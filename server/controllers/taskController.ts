import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewTaskId, validateName, recalculateTaskCount, recalculateProjectTaskCount } from '../utils/utils';
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore';
import { createTask } from '../../shared/models/TaskModel';
import { FieldValue } from 'firebase-admin/firestore';

let currentTaskOrder = 0;

// Create a new task under a list
export const createTaskController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const name = validateName(req.body.name);
    if (!name)
      return res.status(400).json({ error: 'Invalid task name' });

    // Quick validation - check if project and list exist (optional for performance)
    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid)
      return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists)
      return res.status(404).json({ error: 'List not found' });

    // Create task object
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

    // Use batch operations for better performance
    const batch: WriteBatch = db.batch();
    
    // Add task
    const taskRef = db.collection('projects').doc(projectid)
      .collection('lists').doc(listid)
      .collection('tasks').doc(taskId);
    batch.set(taskRef, task);
    
    // OPTIMIZATION: Use incremental updates instead of recalculating
    // Since new task is incomplete, increment taskCount
    batch.update(listRef, { 
      taskCount: FieldValue.increment(1)
    });
    
    // Increment project taskCount
    batch.update(projectRef, { 
      taskCount: FieldValue.increment(1)
    });
    
    // Execute all operations in a single batch
    await batch.commit();
    
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

    // Use batch operations for better performance
    const batch: WriteBatch = db.batch();
    
    // Update task
    batch.update(taskRef, updates);
    
    // OPTIMIZATION: Use incremental updates for taskCount changes
    if (req.body.completedAt !== undefined) {
      const currentTask = taskSnap.data()!;
      const isCompleting = req.body.completedAt !== null;
      const wasCompleted = currentTask.completedAt !== null;
      
      if (isCompleting !== wasCompleted) {
        const listRef = db.collection('projects').doc(projectid)
          .collection('lists').doc(listid);
        const projectRef = db.collection('projects').doc(projectid);
        
        // Use incremental updates instead of reading current values
        const increment = isCompleting ? -1 : 1;
        batch.update(listRef, { 
          taskCount: FieldValue.increment(increment)
        });
        
        batch.update(projectRef, { 
          taskCount: FieldValue.increment(increment)
        });
      }
    }
    
    await batch.commit();
    
    const updatedSnap = await taskRef.get();
    const updatedTask = updatedSnap.data();
    return res.status(200).json({ task: updatedTask });

  } catch (err) {
    console.error("🔥 ERROR in updateTaskController:", err);
    return res.status(500).json({ error: 'Server error' });
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

    // Get task data to check if it was incomplete (affects taskCount)
    const taskData = taskSnap.data()!;
    const wasIncomplete = taskData.completedAt === null;
    
    // delete subtasks and task in one batch
    const subsSnap = await taskRef.collection('subtasks').get();
    const batch: WriteBatch = db.batch();
    subsSnap.docs.forEach(sd => batch.delete(sd.ref));
    batch.delete(taskRef);
    
    // OPTIMIZATION: Use incremental updates for taskCount
    if (wasIncomplete) {
      const listRef = db.collection('projects').doc(projectid)
        .collection('lists').doc(listid);
      const projectRef = db.collection('projects').doc(projectid);
      
      // Use incremental updates instead of reading current values
      batch.update(listRef, { 
        taskCount: FieldValue.increment(-1)
      });
      
      batch.update(projectRef, { 
        taskCount: FieldValue.increment(-1)
      });
    }
    
    await batch.commit();

    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
