import express from 'express';
import {
  createTaskController,
  getTasksController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
  // checkTaskController
} from '../controllers/taskController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/:projectid/lists/:listid/tasks', authenticate, createTaskController);
router.get('/:projectid/lists/:listid/tasks', authenticate, getTasksController);
router.get('/:projectid/lists/:listid/tasks/:taskid', authenticate, getTaskController);
router.put('/:projectid/lists/:listid/tasks/:taskid', authenticate, updateTaskController);
// router.put('/:projectid/lists/:listid/tasks/:taskid/check', authenticate, checkTaskController);
router.delete('/:projectid/lists/:listid/tasks/:taskid', authenticate, deleteTaskController);

export default router;
