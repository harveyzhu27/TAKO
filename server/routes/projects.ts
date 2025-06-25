import express from 'express';
import {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
  rebalanceProjectsController,
  getProjectSummariesController
} from '../controllers/projectController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/', authenticate, createProjectController);
router.get('/all', authenticate, getAllProjectsController);
router.put('/rebalance', authenticate, rebalanceProjectsController);
router.get('/summaries', authenticate, getProjectSummariesController);
router.get('/:id', authenticate, getProjectByIdController);
router.put('/:id', authenticate, updateProjectController);
router.delete('/:id', authenticate, deleteProjectController);
// router.get('/summaries', getProjectSummariesController);

export default router;
