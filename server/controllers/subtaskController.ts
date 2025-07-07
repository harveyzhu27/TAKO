import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewSubtaskId, validateName, recalculateTaskCount, recalculateProjectTaskCount } from '../utils/utils';
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore';
import { createSubtask } from '../../shared/models/SubtaskModel';

let currentSubtaskOrder = 0;

// Create a subtask
export const createSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const taskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists || taskSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Invalid subtask name' });

    // Unique in the task
    const dupSnap = await taskRef.collection('subtasks').where('name', '==', name).get();
    if (!dupSnap.empty) return res.status(400).json({ error: 'Duplicate subtask name' });

    const subtaskId = getNewSubtaskId();
    const subtask = createSubtask({
      id: subtaskId,
      uid,
      name,
      projectId: projectid,
      listId: listid,
      taskId: taskid,
      dueDate: req.body.dueDate ?? null,
      order: currentSubtaskOrder++,
    });

    await taskRef.collection('subtasks').doc(subtaskId).set(subtask);
    
    // Update taskCount for list and project (subtasks might affect task completion)
    await recalculateTaskCount(projectid, listid);
    await recalculateProjectTaskCount(projectid);
    
    res.status(201).json({ subtask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all subtasks for a task
export const getAllSubtasksController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const taskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists || taskSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const subsSnap = await taskRef.collection('subtasks').get();
    const subtasks = subsSnap.docs.map((d: QueryDocumentSnapshot<DocumentData>) => d.data());
    res.status(200).json({ subtasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
export const getSubtaskByIdController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;

    const subtaskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);

    // 3) fetch the document
    const subtaskSnap = await subtaskRef.get();

    // 4) not found?
    if (!subtaskSnap.exists) {
      return res.status(404).json({ error: 'Subtask not found' });
    }

    const subtask = subtaskSnap.data();
    if (subtask?.uid !== uid) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    return res.status(200).json({ subtask });
  } catch (err) {
    console.error('getSubtaskByIdController error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a subtask
export const updateSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;

    const subRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists || subSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const updates: any = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Invalid subtask name' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) updates.dueDate = req.body.dueDate;
    if (req.body.order !== undefined) updates.order = req.body.order;

    await subRef.update(updates);
    const updated = await subRef.get();
    res.status(200).json({ subtask: updated.data()! });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a subtask
export const deleteSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;

    const subRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists || subSnap.data()?.uid !== uid)
      return res.status(404).json({ error: 'Subtask not found or forbidden' });

    await subRef.delete();
    
    // Update taskCount for list and project (subtasks might affect task completion)
    await recalculateTaskCount(projectid, listid);
    await recalculateProjectTaskCount(projectid);
    
    res.status(200).json({ message: 'Subtask deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
