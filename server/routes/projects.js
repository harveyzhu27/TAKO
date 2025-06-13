const express = require('express');
const { randomUUID } = require('crypto');
const router = express.Router();
const { db } = require('../firebase');
const authenticate = require('../authMiddleware');

const USE_SIMPLE_IDS = true;
let simpleProjId = 1, simpleListId = 1, simpleTaskId = 1, simpleSubtaskId = 1;
let currentProjOrder = 0, currentListOrder = 0, currentTaskOrder = 0, currentSubtaskOrder = 0;

function getNewProjId() { return USE_SIMPLE_IDS ? String(simpleProjId++) : randomUUID(); }
function getNewListId() { return USE_SIMPLE_IDS ? String(simpleListId++) : randomUUID(); }
function getNewTaskId() { return USE_SIMPLE_IDS ? String(simpleTaskId++) : randomUUID(); }
function getNewSubtaskId() { return USE_SIMPLE_IDS ? String(simpleSubtaskId++) : randomUUID(); }

function validateName(name) {
  if (typeof name !== 'string') return null;
  const trimmed = name.trim();
  if (!trimmed || /^\d+$/.test(trimmed)) return null;
  return trimmed;
}

// -------------------- PROJECT ROUTES --------------------
// Create a new project
router.post('/create', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Project name is required and must be non-numeric string' });
    const existing = await db.collection('projects')
      .where('uid', '==', uid)
      .where('name', '==', name)
      .get();
    if (!existing.empty) return res.status(400).json({ error: 'Project name must be unique for this user' });

    const projId = getNewProjId();
    const projectRef = db.collection('projects').doc(projId);
    const project = { id: projId, uid, name, description: '', order: currentProjOrder++, taskCount: 0 };
    await projectRef.set(project);

    // Initialize default lists
    const lists = ['Do Now', 'Unnamed'];
    const batch = db.batch();
    for (const listName of lists) {
      const listId = getNewListId();
      const listRef = projectRef.collection('lists').doc(listId);
      batch.set(listRef, {
        id: listId,
        uid,
        name: listName,
        projectId: projId,
        isUniversal: listName === 'Do Now',
        order: currentListOrder++,
        taskCount: 0,
      });
    }
    await batch.commit();

    return res.status(201).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get all user's projects
router.get('/all', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const snapshot = await db.collection('projects').where('uid', '==', uid).get();
    const projects = snapshot.docs.map(d => d.data());
    return res.status(200).json({ projects });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get a single project with its lists
router.get('/:id', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projId = req.params.id;
    const projectRef = db.collection('projects').doc(projId);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
    const project = doc.data();
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listsSnap = await projectRef.collection('lists').get();
    project.lists = listsSnap.docs.map(d => d.data());
    return res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update a project
router.put('/:id', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projId = req.params.id;
    const projectRef = db.collection('projects').doc(projId);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
    const project = doc.data();
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const updates = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Project name must be non-numeric string' });
      const dup = await db.collection('projects')
        .where('uid', '==', uid)
        .where('name', '==', name)
        .get();
      if (!dup.empty && !(dup.docs.length === 1 && dup.docs[0].id === projId))
        return res.status(400).json({ error: 'Project name must be unique' });
      updates.name = name;
    }
    if (req.body.description !== undefined) updates.description = req.body.description;

    await projectRef.update(updates);
    const updated = await projectRef.get();
    return res.status(200).json({ project: updated.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete a project and its lists
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projId = req.params.id;
    const projectRef = db.collection('projects').doc(projId);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
    const project = doc.data();
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const batch = db.batch();
    const listsSnap = await projectRef.collection('lists').get();
    listsSnap.docs.forEach(ld => batch.delete(ld.ref));
    batch.delete(projectRef);
    await batch.commit();

    return res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// -------------------- LIST ROUTES --------------------
// Create a new list under a project
router.post('/:projectid/lists', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projId = req.params.projectid;
    const projectRef = db.collection('projects').doc(projId);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    const project = projSnap.data();
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });
    const dup = await projectRef.collection('lists').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'List name must be unique within project' });

    const listId = getNewListId();
    const list = { id: listId, uid, name, projectId: projId, isUniversal: false, order: currentListOrder++, taskCount: 0 };
    await projectRef.collection('lists').doc(listId).set(list);

    return res.status(201).json({ list });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get all lists for a project
router.get('/:projectid/lists', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projId = req.params.projectid;
    const projectRef = db.collection('projects').doc(projId);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listsSnap = await projectRef.collection('lists').get();
    const lists = listsSnap.docs.map(d => d.data());
    return res.status(200).json({ lists });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get a single list under a project
router.get('/:projectid/lists/:listid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(req.params.listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) return res.status(404).json({ error: 'List not found' });
    return res.status(200).json({ list: listSnap.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update a list
router.put('/:projectid/lists/:listid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(req.params.listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) return res.status(404).json({ error: 'List not found' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });
    const dup = await projectRef.collection('lists').where('name', '==', name).get();
    if (!dup.empty && !(dup.docs.length === 1 && dup.docs[0].id === req.params.listid))
      return res.status(400).json({ error: 'List name must be unique within project' });

    await listRef.update({ name });
    return res.status(200).json({ list: (await listRef.get()).data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete a list
router.delete('/:projectid/lists/:listid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(req.params.listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) return res.status(404).json({ error: 'List not found' });
    if (listSnap.data().isUniversal) return res.status(400).json({ error: 'Cannot delete Do Now list' });
    const others = await projectRef.collection('lists').where('isUniversal', '==', false).get();
    if (others.size <= 1) return res.status(400).json({ error: 'Must have at least one other list' });

    await listRef.delete();
    return res.status(200).json({ list: listSnap.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// -------------------- TASK ROUTES --------------------
// Create a task under a list
router.post('/:projectid/lists/:listid/tasks', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(req.params.listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) return res.status(404).json({ error: 'List not found' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Task name is required and must be non-numeric string' });
    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
    const dup = await listRef.collection('tasks').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'Task name must be unique within list' });

    const taskId = getNewTaskId();
    const task = { id: taskId, uid, name, projectId: req.params.projectid, listId: req.params.listid, dueDate: dueDate || null, createdAt: Date.now(), completedAt: null, tags: listSnap.data().isUniversal ? ['DoNow'] : [], order: currentTaskOrder++, subtaskCount: 0 };
    await listRef.collection('tasks').doc(taskId).set(task);
    return res.status(201).json({ task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get all tasks for a list
router.get('/:projectid/lists/:listid/tasks', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const tasksSnap = await projectRef.collection('lists').doc(req.params.listid).collection('tasks').get();
    const tasks = tasksSnap.docs.map(d => d.data());
    return res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get a single task
router.get('/:projectid/lists/:listid/tasks/:taskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const taskRef = projectRef.collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });
    return res.status(200).json({ task: taskSnap.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update a task
router.put('/:projectid/lists/:listid/tasks/:taskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const taskRef = projectRef.collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const updates = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Task name must be non-numeric string' });
      const dup = await taskRef.parent.where('name', '==', name).get();
      if (!dup.empty && !(dup.docs.length === 1 && dup.docs[0].id === req.params.taskid)) return res.status(400).json({ error: 'Task name must be unique within list' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) {
      if (typeof req.body.dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
      updates.dueDate = req.body.dueDate;
    }
    if (req.body.completedAt !== undefined) updates.completedAt = req.body.completedAt;
    if (Array.isArray(req.body.tags)) updates.tags = req.body.tags;
    await taskRef.update(updates);
    return res.status(200).json({ task: (await taskRef.get()).data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete a task and its subtasks
router.delete('/:projectid/lists/:listid/tasks/:taskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const taskRef = projectRef.collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const batch = db.batch();
    const subsSnap = await taskRef.collection('subtasks').get();
    subsSnap.docs.forEach(sd => batch.delete(sd.ref));
    batch.delete(taskRef);
    await batch.commit();

    return res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// -------------------- SUBTASK ROUTES --------------------
// Create a subtask under a task
router.post('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const taskRef = projectRef.collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const taskSnap = await taskRef.get();
    if (!taskSnap.exists) return res.status(404).json({ error: 'Task not found' });

    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Subtask name is required and must be non-numeric string' });
    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });

    const subId = getNewSubtaskId();
    const subtask = { id: subId, uid, name, dueDate: dueDate || null, createdAt: Date.now(), completedAt: null, order: currentSubtaskOrder++ };
    await taskRef.collection('subtasks').doc(subId).set(subtask);
    return res.status(201).json({ subtask });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get all subtasks for a task
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const subsSnap = await projectRef.collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').get();
    const subtasks = subsSnap.docs.map(d => d.data());
    return res.status(200).json({ subtasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get a single subtask
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const subRef = projectRef.collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });
    return res.status(200).json({ subtask: subSnap.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update a subtask
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const subRef = projectRef.collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    const updates = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Subtask name must be non-numeric string' });
      updates.name = name;
    }
    if (req.body.dueDate !== undefined) {
      if (typeof req.body.dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
      updates.dueDate = req.body.dueDate;
    }
    if (req.body.completedAt !== undefined) updates.completedAt = req.body.completedAt;

    await subRef.update(updates);
    return res.status(200).json({ subtask: (await subRef.get()).data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete a subtask
router.delete('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, async (req, res) => {
  try {
    const uid = req.user.uid;
    const projectRef = db.collection('projects').doc(req.params.projectid);
    const projSnap = await projectRef.get();
    if (!projSnap.exists) return res.status(404).json({ error: 'Project not found' });
    if (projSnap.data().uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const subRef = projectRef.collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) return res.status(404).json({ error: 'Subtask not found' });

    await subRef.delete();
    return res.status(200).json({ message: 'Subtask deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
