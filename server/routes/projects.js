const express = require('express');
const { randomUUID } = require('crypto');
const router = express.Router();
const { db } = require('./firebase');

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

// PROJECT ROUTES
router.post('/create', async (req, res) => {
  try {
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Project name is required and must be non-numeric string' });
    const existing = await db.collection('projects').where('name', '==', name).get();
    if (!existing.empty) return res.status(400).json({ error: 'Project name must be unique' });

    const projId = getNewProjId();
    const projectRef = db.collection('projects').doc(projId);
    const project = { id: projId, name, description: '', lists: [], order: currentProjOrder++, taskCount: 0 };
    await projectRef.set(project);

    const lists = ['Do Now', 'Unnamed'];
    const batch = db.batch();
    lists.forEach(listName => {
      const listId = getNewListId();
      const listRef = projectRef.collection('lists').doc(listId);
      batch.set(listRef, {
        id: listId,
        name: listName,
        projectId: projId,
        isUniversal: listName === 'Do Now',
        order: currentListOrder++,
        taskCount: 0,
      });
    });
    await batch.commit();
    return res.status(201).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const snapshot = await db.collection('projects').get();
    const projects = snapshot.docs.map(d => d.data());
    return res.status(200).json({ projects });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectRef = db.collection('projects').doc(req.params.id);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
    const project = doc.data();
    const listsSnap = await projectRef.collection('lists').get();
    project.lists = listsSnap.docs.map(d => d.data());
    return res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const projectRef = db.collection('projects').doc(req.params.id);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
    const updates = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Project name must be non-numeric string' });
      const dup = await db.collection('projects').where('name', '==', name).get();
      if (!dup.empty && !(dup.docs.length === 1 && dup.docs[0].id === req.params.id))
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

router.delete('/:id', async (req, res) => {
  try {
    const projectRef = db.collection('projects').doc(req.params.id);
    const doc = await projectRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Project not found' });
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

// LIST ROUTES
router.post('/:projectid/lists', async (req, res) => {
  try {
    const projectRef = db.collection('projects').doc(req.params.projectid);
    if (!(await projectRef.get()).exists) return res.status(404).json({ error: 'Project not found' });
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });
    const dup = await projectRef.collection('lists').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'List name must be unique within project' });
    const listId = getNewListId();
    const list = { id: listId, name, projectId: req.params.projectid, isUniversal: false, order: currentListOrder++, taskCount: 0 };
    await projectRef.collection('lists').doc(listId).set(list);
    return res.status(201).json({ list });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists', async (req, res) => {
  try {
    const listsSnap = await db.collection('projects').doc(req.params.projectid).collection('lists').get();
    const lists = listsSnap.docs.map(d => d.data());
    return res.status(200).json({ lists });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists/:listid', async (req, res) => {
  try {
    const listRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid);
    const doc = await listRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'List not found' });
    return res.status(200).json({ list: doc.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:projectid/lists/:listid', async (req, res) => {
  try {
    const listRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid);
    const doc = await listRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'List not found' });
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });
    const dup = await db.collection('projects').doc(req.params.projectid).collection('lists').where('name', '==', name).get();
    if (!dup.empty && !(dup.docs.length === 1 && dup.docs[0].id === req.params.listid)) return res.status(400).json({ error: 'List name must be unique within project' });
    await listRef.update({ name });
    return res.status(200).json({ list: (await listRef.get()).data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:projectid/lists/:listid', async (req, res) => {
  try {
    const listRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid);
    const doc = await listRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'List not found' });
    const list = doc.data();
    if (list.isUniversal) return res.status(400).json({ error: 'Cannot delete Do Now list' });
    const others = await db.collection('projects').doc(req.params.projectid).collection('lists').where('isUniversal', '==', false).get();
    if (others.size <= 1) return res.status(400).json({ error: 'Must have at least one other list' });
    await listRef.delete();
    return res.status(200).json({ list });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// TASK ROUTES
router.post('/:projectid/lists/:listid/tasks', async (req, res) => {
  try {
    const listRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid);
    const listDoc = await listRef.get();
    if (!listDoc.exists) return res.status(404).json({ error: 'List not found' });
    const list = listDoc.data();
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Task name is required and must be non-numeric string' });
    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
    const dup = await listRef.collection('tasks').where('name', '==', name).get();
    if (!dup.empty) return res.status(400).json({ error: 'Task name must be unique within list' });
    const taskId = getNewTaskId();
    const task = { id: taskId, name, projectId: req.params.projectid, listId: req.params.listid, dueDate: dueDate||null, createdAt: Date.now(), completedAt: null, tags: list.isUniversal ? ['DoNow'] : [], order: currentTaskOrder++, subtaskCount: 0 };
    await listRef.collection('tasks').doc(taskId).set(task);
    return res.status(201).json({ task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists/:listid/tasks', async (req, res) => {
  try {
    const tasksSnap = await db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid).collection('tasks').get();
    const tasks = tasksSnap.docs.map(d => d.data());
    return res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists/:listid/tasks/:taskid', async (req, res) => {
  try {
    const taskRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const doc = await taskRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Task not found' });
    return res.status(200).json({ task: doc.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:projectid/lists/:listid/tasks/:taskid', async (req, res) => {
  try {
    const taskRef = db.collection('projects').doc(req.params.projectid).collection('lists').doc(req.params.listid).collection('tasks').doc(req.params.taskid);
    const doc = await taskRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Task not found' });
    const updates = {};
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Task name must be non-numeric string' });
      const dup = await taskRef.parent.where('name', '==', name).get();
      if (!dup.empty && !(dup.docs.length===1 && dup.docs[0].id===req.params.taskid)) return res.status(400).json({ error: 'Task name must be unique within list' });
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

// SUBTASK ROUTES
router.post('/:projectid/lists/:listid/tasks/:taskid/subtasks', async (req, res) => {
  try {
    const subRef = db.collection('projects').doc(req.params.projectid)
      .collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(getNewSubtaskId());
    const name = validateName(req.body.name);
    if (!name) return res.status(400).json({ error: 'Subtask name is required and must be non-numeric string' });
    const dueDate = req.body.dueDate;
    if (dueDate !== undefined && typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
    const subtask = { id: subRef.id, name, dueDate: dueDate||null, createdAt: Date.now(), completedAt: null, order: currentSubtaskOrder++ };
    await subRef.set(subtask);
    return res.status(201).json({ subtask });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks', async (req, res) => {
  try {
    const subsSnap = await db.collection('projects').doc(req.params.projectid)
      .collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').get();
    const subtasks = subsSnap.docs.map(d => d.data());
    return res.status(200).json({ subtasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', async (req, res) => {
  try {
    const subRef = db.collection('projects').doc(req.params.projectid)
      .collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const doc = await subRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Subtask not found' });
    return res.status(200).json({ subtask: doc.data() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', async (req, res) => {
  try {
    const subRef = db.collection('projects').doc(req.params.projectid)
      .collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const doc = await subRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Subtask not found' });
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

router.delete('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', async (req, res) => {
  try {
    const subRef = db.collection('projects').doc(req.params.projectid)
      .collection('lists').doc(req.params.listid)
      .collection('tasks').doc(req.params.taskid)
      .collection('subtasks').doc(req.params.subtaskid);
    const doc = await subRef.get();
    if (!doc.exists) return res.status(404).json({ error: 'Subtask not found' });
    const subtask = doc.data();
    await subRef.delete();
    return res.status(200).json({ subtask });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
