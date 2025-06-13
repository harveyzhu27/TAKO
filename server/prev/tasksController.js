const { getNewTaskId, validateName } = require('../utils');
let currentTaskOrder = 0;
const { projects } = require('../data/projectsStore');

exports.createTask = (req, res) => {
  const project = projects[req.params.projectid];
  const list = project?.lists.find(l => l.id === req.params.listid);
  if (!list) return res.status(404).json({ error: 'List not found' });

  const name = validateName(req.body.name);
  if (!name) return res.status(400).json({ error: 'Task name is required and must be non-numeric string' });

  const dueDate = req.body.dueDate;
  if (dueDate !== undefined && typeof dueDate !== 'number')
    return res.status(400).json({ error: 'Due date must be a number' });

  if (list.tasks.some(t => t.name === name))
    return res.status(400).json({ error: 'Task name must be unique within list' });

  const taskId = getNewTaskId();
  const task = {
    id: taskId,
    name,
    projectId: project.id,
    listId: list.id,
    dueDate: dueDate ?? null,
    createdAt: Date.now(),
    completedAt: null,
    tags: list.isUniversal ? ['DoNow'] : (Array.isArray(req.body.tags) ? req.body.tags : []),
    order: currentTaskOrder++,
    subtaskCount: 0,
    subtasks: [],
  };

  list.tasks.push(task);
  list.taskCount++;
  project.taskCount++;

  if (task.tags.includes('DoNow')) {
    Object.values(projects).forEach(p => {
      const doNowList = p.lists.find(l => l.isUniversal);
      if (doNowList && p.id !== project.id) {
        const clone = { ...task, id: getNewTaskId(), listId: doNowList.id };
        doNowList.tasks.push(clone);
        doNowList.taskCount++;
        p.taskCount++;
      }
    });
  }

  res.status(201).json({ task });
};

exports.getTasks = (req, res) => {
  const list = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid);
  if (!list) return res.status(404).json({ error: 'List not found' });
  res.status(200).json({ tasks: list.tasks });
};

exports.getTask = (req, res) => {
  const task = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.status(200).json({ task });
};

exports.updateTask = (req, res) => {
  const project = projects[req.params.projectid];
  const list = project?.lists.find(l => l.id === req.params.listid);
  const task = list?.tasks.find(t => t.id === req.params.taskid);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  const name = req.body.name !== undefined ? validateName(req.body.name) : undefined;
  if (req.body.name !== undefined && !name)
    return res.status(400).json({ error: 'Task name must be non-numeric string' });
  if (name) task.name = name;

  const dueDate = req.body.dueDate;
  if (dueDate !== undefined) {
    if (typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
    task.dueDate = dueDate;
  }

  if (req.body.completedAt !== undefined) task.completedAt = req.body.completedAt;

  if (req.body.tags !== undefined) {
    if (!Array.isArray(req.body.tags)) return res.status(400).json({ error: 'Tags must be an array' });
    task.tags = req.body.tags;
    if (list.isUniversal && !task.tags.includes('DoNow')) task.tags.push('DoNow');
  }

  if (req.body.order !== undefined) task.order = req.body.order;

  res.status(200).json({ task });
};


exports.checkTask = (req, res) => {
  const project = projects[req.params.projectid];
  const list = project?.lists.find(l => l.id === req.params.listid);
  const task = list?.tasks.find(t => t.id === req.params.taskid);

  if (!task) return res.status(404).json({ error: 'Task not found' });

  const checked = req.body.checked;
  if (typeof checked !== 'boolean')
    return res.status(400).json({ error: 'Missing or invalid checked boolean' });

  task.completedAt = checked ? Date.now() : null;
  res.status(200).json({ task });
};
