import express from 'express';
import {
  createSubtaskController,
  getSubtasksController,
  getSubtaskController,
  updateSubtaskController,
  deleteSubtaskController,
  checkSubtaskController
} from '../controllers/subtaskController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, createSubtaskController);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, getSubtasksController);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, getSubtaskController);
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, updateSubtaskController);
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid/check', authenticate, checkSubtaskController);
router.delete('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, deleteSubtaskController);

export default router;
