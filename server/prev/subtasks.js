const express = require('express');
const router = express.Router();
const authenticate = require('../authMiddleware');
const {
  createSubtask,
  getSubtasks,
  getSubtask,
  updateSubtask,
  deleteSubtask,
  checkSubtask,
} = require('../controllers/subtaskController');

router.post('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, createSubtask);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, getSubtasks);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, getSubtask);
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, updateSubtask);
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid/check', authenticate, checkSubtask); // ✅ check route
router.delete('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, deleteSubtask);

module.exports = router;
