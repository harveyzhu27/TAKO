import express from 'express';
import {
  createListController,
  getListsController,
  getListController,
  updateListController,
  deleteListController
} from '../controllers/listController';
import authenticate from '../authMiddleware';

const router = express.Router();

router.post('/:projectid/lists', authenticate, createListController);
router.get('/:projectid/lists', authenticate, getListsController);
router.get('/:projectid/lists/:listid', authenticate, getListController);
router.put('/:projectid/lists/:listid', authenticate, updateListController);
router.delete('/:projectid/lists/:listid', authenticate, deleteListController);

export default router;