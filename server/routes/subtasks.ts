import express from 'express';
import {
  createSubtaskController,
  getAllSubtasksController,
  getSubtaskByIdController,
  updateSubtaskController,
  deleteSubtaskController,
  // checkSubtaskController
} from '../controllers/subtaskController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, createSubtaskController);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks', authenticate, getAllSubtasksController);
router.get('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, getSubtaskByIdController);
router.put('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, updateSubtaskController);
router.delete('/:projectid/lists/:listid/tasks/:taskid/subtasks/:subtaskid', authenticate, deleteSubtaskController);

export default router;
