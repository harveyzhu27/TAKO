// server/controllers/doNowController.ts

import { Request, Response } from 'express';
import { db } from '../firebase';

// Helper: get a reference to the user's universal doNowTasks collection
const getDoNowRef = (uid: string) =>
  db.collection('users').doc(uid).collection('doNowTasks');

// Get all Do Now tasks for current user
export const getDoNowTasks = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const snapshot = await getDoNowRef(uid).get();
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Do Now tasks', details: err });
  }
};

// Add a task to Do Now (usually by reference from a project task)
export const addDoNowTask = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectId, taskId, name, ...rest } = req.body;

    if (!projectId || !taskId || !name)
      return res.status(400).json({ error: 'Missing required fields' });

    // Option 1: Store the minimal info and reference to the project task
    const doNowTask = {
      projectId,
      taskId,
      name,
      ...rest, // dueDate, etc
      createdAt: Date.now()
    };

    const ref = await getDoNowRef(uid).doc(taskId).set(doNowTask); // Use project taskId as docId for easy sync
    res.status(201).json({ task: { ...doNowTask, id: taskId } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add Do Now task', details: err });
  }
};

// Update a Do Now task (sync with project task changes)
export const updateDoNowTask = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { id } = req.params;
    const updates = req.body;
    await getDoNowRef(uid).doc(id).update(updates);
    res.status(200).json({ message: 'Do Now task updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update Do Now task', details: err });
  }
};

// Remove a task from Do Now (untagged or deleted in project)
export const deleteDoNowTask = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { id } = req.params;
    await getDoNowRef(uid).doc(id).delete();
    res.status(200).json({ message: 'Do Now task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete Do Now task', details: err });
  }
};

