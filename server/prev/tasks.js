const express = require('express');
const router = express.Router();
const authenticate = require('../authMiddleware');
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  checkTask,
} = require('../controllers/taskController');

router.post('/:projectid/lists/:listid/tasks', authenticate, createTask);
router.get('/:projectid/lists/:listid/tasks', authenticate, getTasks);
router.get('/:projectid/lists/:listid/tasks/:taskid', authenticate, getTask);
router.put('/:projectid/lists/:listid/tasks/:taskid', authenticate, updateTask);
router.put('/:projectid/lists/:listid/tasks/:taskid/check', authenticate, checkTask);
router.delete('/:projectid/lists/:listid/tasks/:taskid', authenticate, deleteTask);

module.exports = router;
