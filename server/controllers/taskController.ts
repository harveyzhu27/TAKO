import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewTaskId, validateName } from '../utils/utils';
import { createTask } from '@shared/models/TaskModel';

let currentTaskOrder = 0;

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
    if (!listSnap.exists) return res.status(404).json({ error: 'List not found' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Invalid task name' });

    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number')
      return res.status(400).json({ error: 'Due date must be a number' });

    const dup = await listRef.collection('tasks').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'Duplicate task name' });

    const taskId = getNewTaskId();
    const task = createTask({
      id: taskId,
      uid,
      name,
      projectId: projectid,
      listId: listid,
      dueDate,
      tags: req.body.tags || [],
      isUniversal: listSnap.data()?.isUniversal ?? false,
      order: currentTaskOrder++,
    });

    await listRef.collection('tasks').doc(taskId).set(task);
    res.status(201).json({ task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const tasksSnap = await projectRef.collection('lists').doc(listid).collection('tasks').get();
    const tasks = tasksSnap.docs.map(doc => doc.data());
    res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;

    const taskRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const task = taskSnap.data();
    if (!task || task.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    res.status(200).json({ task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;
    const taskRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);

    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const task = taskSnap.data();
    if (!task || task.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const updates: any = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Invalid name' });
      const dup = await taskRef.parent.where('name', '==', name).get();
      if (!dup.empty && dup.docs[0].id !== taskid)
        return res.status(400).json({ error: 'Duplicate name' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) {
      if (typeof req.body.dueDate !== 'number')
        return res.status(400).json({ error: 'Due date must be a number' });
      updates.dueDate = req.body.dueDate;
    }
    if (req.body.completedAt !== undefined) updates.completedAt = req.body.completedAt;
    if (Array.isArray(req.body.tags)) updates.tags = req.body.tags;

    await taskRef.update(updates);
    const updatedSnap = await taskRef.get();
    res.status(200).json({ task: updatedSnap.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const checkTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;
    const taskRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);

    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const task = taskSnap.data();
    if (!task || task.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const checked = req.body.checked;
    if (typeof checked !== 'boolean')
      return res.status(400).json({ error: 'Invalid checked value' });

    await taskRef.update({ completedAt: checked ? Date.now() : null });
    const updated = (await taskRef.get()).data();
    res.status(200).json({ task: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid, taskid } = req.params;
    const taskRef = db.collection('projects')
      .doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskid);

    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const task = taskSnap.data();
    if (!task || task.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const batch = db.batch();
    const subsSnap = await taskRef.collection('subtasks').get();
    subsSnap.docs.forEach(sd => batch.delete(sd.ref));
    batch.delete(taskRef);
    await batch.commit();

    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};