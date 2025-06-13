const { getNewListId, validateName } = require('../utils');
let currentListOrder = 0;
const { projects } = require('../data/projectsStore');

exports.createList = (req, res) => {
  const project = projects[req.params.projectid];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const name = validateName(req.body.name);
  if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });

  if (project.lists.some(l => l.name === name))
    return res.status(400).json({ error: 'List name must be unique within project' });

  const listId = getNewListId();
  const list = {
    id: listId,
    name,
    projectId: project.id,
    tasks: [],
    isUniversal: false,
    order: currentListOrder++,
    taskCount: 0,
  };

  project.lists.push(list);
  res.status(201).json({ list });
};

exports.getLists = (req, res) => {
  const project = projects[req.params.projectid];
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.status(200).json({ lists: project.lists });
};

exports.getList = (req, res) => {
  const project = projects[req.params.projectid];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const list = project.lists.find(l => l.id === req.params.listid);
  if (!list) return res.status(404).json({ error: 'List not found' });

  res.status(200).json({ list });
};

exports.updateList = (req, res) => {
  const project = projects[req.params.projectid];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const list = project.lists.find(l => l.id === req.params.listid);
  if (!list) return res.status(404).json({ error: 'List not found' });

  const name = validateName(req.body.name);
  if (!name) return res.status(400).json({ error: 'List name is required and must be non-numeric string' });

  if (project.lists.some(l => l.name === name && l.id !== list.id))
    return res.status(400).json({ error: 'List name must be unique within project' });

  list.name = name;
  res.status(200).json({ list });
};

exports.deleteList = (req, res) => {
  const project = projects[req.params.projectid];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const list = project.lists.find(l => l.id === req.params.listid);
  if (!list) return res.status(404).json({ error: 'List not found' });

  if (list.isUniversal) return res.status(400).json({ error: 'Cannot delete Do Now list' });

  const nonUniversal = project.lists.filter(l => !l.isUniversal);
  if (nonUniversal.length <= 1)
    return res.status(400).json({ error: 'Must have at least one other list' });

  const deletedOrder = list.order;
  project.lists = project.lists.filter(l => l.id !== list.id);
  project.lists.forEach(l => { if (l.order > deletedOrder) l.order--; });

  currentListOrder--;
  res.status(200).json({ list });
};
