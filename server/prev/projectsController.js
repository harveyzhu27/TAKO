const { getNewProjId, getNewListId, validateName } = require('../utils');

const USE_SIMPLE_IDS = true;
let currentProjOrder = 0;
let currentListOrder = 0;
const projects = {};

exports.createProject = (req, res) => {
  const name = validateName(req.body.name);
  if (!name)
    return res.status(400).json({ error: 'Project name is required and must be non-numeric string' });
  if (Object.values(projects).some(p => p.name === name))
    return res.status(400).json({ error: 'Project name must be unique' });

  const projId = getNewProjId();
  const project = {
    id: projId,
    name,
    description: '',
    lists: [],
    order: currentProjOrder++,
    taskCount: 0,
  };

  ['Do Now', 'Unnamed'].forEach(listName => {
    const listId = getNewListId();
    project.lists.push({
      id: listId,
      name: listName,
      projectId: projId,
      tasks: [],
      isUniversal: listName === 'Do Now',
      order: currentListOrder++,
      taskCount: 0,
    });
  });

  projects[projId] = project;
  res.status(201).json({ project });
};

exports.getAllProjects = (req, res) => {
  res.status(200).json({ projects });
};

exports.getProjectById = (req, res) => {
  const project = projects[req.params.id];
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.status(200).json({ project });
};

exports.deleteProject = (req, res) => {
  const project = projects[req.params.id];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const deletedOrder = project.order;
  delete projects[req.params.id];

  Object.values(projects).forEach(p => {
    if (p.order > deletedOrder) p.order--;
  });

  currentProjOrder--;
  res.status(200).json({ projects });
};

exports.updateProject = (req, res) => {
  const project = projects[req.params.id];
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const nameInput = req.body.name;
  const name = nameInput !== undefined ? validateName(nameInput) : undefined;
  const { description } = req.body;

  if (name !== undefined) {
    if (!name)
      return res.status(400).json({ error: 'Project name is required and must be non-numeric string' });
    if (Object.values(projects).some(p => p.name === name && p.id !== project.id))
      return res.status(400).json({ error: 'Project name must be unique' });
    project.name = name;
  }

  if (description !== undefined) project.description = description;

  res.status(200).json({ project });
};
