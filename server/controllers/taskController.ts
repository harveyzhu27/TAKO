import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewTaskId, validateName } from '../utils/utils';
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore';
import { createTask } from '../../shared/models/TaskModel';

let currentTaskOrder = 0;

// Create a new task under a list
export const createTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists)
      return res.status(404).json({ error: 'List not found' });

    const name = validateName(req.body.name);
    if (!name)
      return res.status(400).json({ error: 'Invalid task name' });

    // Unique in the list
    const dupSnap = await listRef.collection('tasks').where('name', '==', name).get();
    if (!dupSnap.empty)
      return res.status(400).json({ error: 'Duplicate task name' });

    const taskId = getNewTaskId();
    const task = createTask({
      id: taskId,
      uid,
      name,
      projectId: projectid,
      listId: listid,
      dueDate: req.body.dueDate ?? null,
      order: currentTaskOrder++,
    });

    await listRef.collection('tasks').doc(taskId).set(task);
    res.status(201).json({ task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all tasks in a list
export const getTasksController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const tasksSnap = await projectRef
      .collection('lists')
      .doc(listid)
      .collection('tasks')
      .get();
    const tasks = tasksSnap.docs.map((d: QueryDocumentSnapshot<DocumentData>) => d.data());
    res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get one task by ID
export const getTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const taskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists || taskSnap.data()?.uid !== uid)
      return res.status(404).json({ error: 'Task not found or forbidden' });

    res.status(200).json({ task: taskSnap.data()! });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a task
export const updateTaskController = async (req: Request, res: Response) => {
  try {

    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;
    const taskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists || taskSnap.data()?.uid !== uid) {

      return res.status(404).json({ error: 'Task not found or forbidden' });
    }

    const updates: any = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Invalid task name' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) updates.dueDate = req.body.dueDate;
    if (req.body.order !== undefined) updates.order = req.body.order;
    if (req.body.completedAt !== undefined) updates.completedAt = req.body.completedAt;
    if (req.body.tags !== undefined) updates.tags = req.body.tags;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }
    await taskRef.update(updates);
  } catch (err) {
    console.error("🔥 ERROR in updateTaskController:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a task and its subtasks
export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const taskRef = db
      .collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists || taskSnap.data()?.uid !== uid)
      return res.status(404).json({ error: 'Task not found or forbidden' });

    // delete subtasks first
    const subsSnap = await taskRef.collection('subtasks').get();
    const batch: WriteBatch = db.batch();
    subsSnap.docs.forEach(sd => batch.delete(sd.ref));
    batch.delete(taskRef);
    await batch.commit();

    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
