const { getNewSubtaskId, validateName } = require('../utils');
let currentSubtaskOrder = 0;
const { projects } = require('../data/projectsStore');

exports.createSubtask = (req, res) => {
  const task = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  const name = validateName(req.body.name);
  if (!name) return res.status(400).json({ error: 'Subtask name is required and must be non-numeric string' });

  const dueDate = req.body.dueDate;
  if (dueDate !== undefined && typeof dueDate !== 'number')
    return res.status(400).json({ error: 'Due date must be a number' });

  const subtaskId = getNewSubtaskId();
  const subtask = {
    id: subtaskId,
    name,
    dueDate: dueDate ?? null,
    createdAt: Date.now(),
    completedAt: null,
    taskId: task.id,
    order: currentSubtaskOrder++,
  };

  task.subtasks.push(subtask);
  task.subtaskCount++;
  res.status(201).json({ subtask });
};

exports.getSubtasks = (req, res) => {
  const subtasks = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid)?.subtasks;
  if (!subtasks) return res.status(404).json({ error: 'Subtasks not found' });
  res.status(200).json({ subtasks });
};

exports.getSubtask = (req, res) => {
  const subtask = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid)?.subtasks.find(st => st.id === req.params.subtaskid);
  if (!subtask) return res.status(404).json({ error: 'Subtask not found' });
  res.status(200).json({ subtask });
};

exports.updateSubtask = (req, res) => {
  const task = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid);
  const subtask = task?.subtasks.find(st => st.id === req.params.subtaskid);
  if (!subtask) return res.status(404).json({ error: 'Subtask not found' });

  const name = req.body.name !== undefined ? validateName(req.body.name) : undefined;
  if (req.body.name !== undefined && !name)
    return res.status(400).json({ error: 'Subtask name must be non-numeric string' });
  if (name) subtask.name = name;

  const dueDate = req.body.dueDate;
  if (dueDate !== undefined) {
    if (typeof dueDate !== 'number') return res.status(400).json({ error: 'Due date must be a number' });
    subtask.dueDate = dueDate;
  }

  if (req.body.completedAt !== undefined) subtask.completedAt = req.body.completedAt;
  if (req.body.order !== undefined) subtask.order = req.body.order;

  res.status(200).json({ subtask });
};

exports.deleteSubtask = (req, res) => {
  const task = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid);
  const idx = task?.subtasks.findIndex(st => st.id === req.params.subtaskid);
  if (idx === undefined || idx === -1)
    return res.status(404).json({ error: 'Subtask not found' });

  const [subtask] = task.subtasks.splice(idx, 1);
  task.subtaskCount--;
  task.subtasks.forEach(st => { if (st.order > subtask.order) st.order--; });

  currentSubtaskOrder--;
  res.status(200).json({ subtask });
};

exports.checkSubtask = (req, res) => {
  const task = projects[req.params.projectid]?.lists.find(l => l.id === req.params.listid)?.tasks.find(t => t.id === req.params.taskid);
  const subtask = task?.subtasks.find(st => st.id === req.params.subtaskid);

  if (!subtask) return res.status(404).json({ error: 'Subtask not found' });

  const checked = req.body.checked;
  if (typeof checked !== 'boolean')
    return res.status(400).json({ error: 'Missing or invalid checked boolean' });

  subtask.completedAt = checked ? Date.now() : null;
  res.status(200).json({ subtask });
};
