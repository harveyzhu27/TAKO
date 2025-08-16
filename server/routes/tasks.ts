import express from 'express';
import {
  createTaskController,
  getTasksController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
  reorderTasksController,
  // checkTaskController
} from '../controllers/taskController';
import { migrateTaskOrders } from '../utils/utils';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/:projectid/lists/:listid/tasks', authenticate, createTaskController);
router.get('/:projectid/lists/:listid/tasks', authenticate, getTasksController);
router.get('/:projectid/lists/:listid/tasks/:taskid', authenticate, getTaskController);
router.put('/:projectid/lists/:listid/tasks/:taskid', authenticate, updateTaskController);
router.delete('/:projectid/lists/:listid/tasks/:taskid', authenticate, deleteTaskController);
router.post('/:projectid/lists/:listid/tasks/reorder', authenticate, reorderTasksController);

// Migration endpoint (remove in production)
router.post('/migrate-orders', authenticate, async (req, res) => {
  try {
    const totalMigrated = await migrateTaskOrders();
    res.json({ message: `Migration completed. ${totalMigrated} tasks migrated.` });
  } catch (error) {
    console.error('Migration failed:', error);
    res.status(500).json({ error: 'Migration failed' });
  }
});

export default router;
