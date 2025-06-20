// server/routes/doNow.ts

import express from 'express';
import authenticate from '../authMiddleware';
import {
  getDoNowTasks,
  addDoNowTask,
  updateDoNowTask,
  deleteDoNowTask
} from '../controllers/doNowController';

const router = express.Router();

// All routes require authentication
router.get('/', authenticate, getDoNowTasks);
router.post('/', authenticate, addDoNowTask);
router.put('/:id', authenticate, updateDoNowTask);
router.delete('/:id', authenticate, deleteDoNowTask);

export default router;
