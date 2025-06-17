import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewSubtaskId, validateName } from '../utils/utils';
import { createSubtask } from '@shared/models/SubtaskModel';

let currentSubtaskOrder = 0;

export const createSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const taskRef = projectRef.collection('lists').doc(listid).collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Invalid subtask name' });

    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number')
      return res.status(400).json({ error: 'Due date must be a number' });

    const dup = await taskRef.collection('subtasks').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'Duplicate subtask name' });

    const subId = getNewSubtaskId();
    const subtask = createSubtask({ id: subId, uid, name, dueDate, order: currentSubtaskOrder++ });

    await taskRef.collection('subtasks').doc(subId).set(subtask);
    res.status(201).json({ subtask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSubtasksController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const subsSnap = await projectRef
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').get();

    const subtasks = subsSnap.docs.map(doc => doc.data());
    res.status(200).json({ subtasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;

    const subRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    const subtask = subSnap.data();
    if (!subtask || subtask.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    res.status(200).json({ subtask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;
    const subRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);

    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    const subtask = subSnap.data();
    if (!subtask || subtask.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const updates: any = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Invalid name' });
      const dup = await subRef.parent.where('name', '==', name).get();
      if (!dup.empty && dup.docs[0].id !== subtaskid)
        return res.status(400).json({ error: 'Duplicate name' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) {
      if (typeof req.body.dueDate !== 'number')
        return res.status(400).json({ error: 'Due date must be a number' });
      updates.dueDate = req.body.dueDate;
    }
    if (req.body.completedAt !== undefined) updates.completedAt = req.body.completedAt;

    await subRef.update(updates);
    const updatedSnap = await subRef.get();
    res.status(200).json({ subtask: updatedSnap.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const checkSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;
    const subRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);

    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    const subtask = subSnap.data();
    if (!subtask || subtask.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const checked = req.body.checked;
    if (typeof checked !== 'boolean')
      return res.status(400).json({ error: 'Invalid checked value' });

    await subRef.update({ completedAt: checked ? Date.now() : null });
    const updated = (await subRef.get()).data();
    res.status(200).json({ subtask: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteSubtaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid, subtaskid } = req.params;
    const subRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid)
      .collection('subtasks').doc(subtaskid);

    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    const subtask = subSnap.data();
    if (!subtask || subtask.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    await subRef.delete();
    res.status(200).json({ message: 'Subtask deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
