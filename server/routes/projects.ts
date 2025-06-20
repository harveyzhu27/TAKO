import express from 'express';
import {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
  rebalanceProjectsController
} from '../controllers/projectController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/', authenticate, createProjectController);
router.get('/all', authenticate, getAllProjectsController);
router.get('/:id', authenticate, getProjectByIdController);
router.put('/:id', authenticate, updateProjectController);
router.delete('/:id', authenticate, deleteProjectController);
router.put('/projects/rebalance', authenticate, rebalanceProjectsController);

export default router;
