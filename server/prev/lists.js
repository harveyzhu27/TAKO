const express = require('express');
const router = express.Router();
const authenticate = require('../authMiddleware');
const {
  createList,
  getLists,
  getList,
  updateList,
  deleteList,
} = require('../controllers/listController');

router.post('/:projectid/lists', authenticate, createList);
router.get('/:projectid/lists', authenticate, getLists);
router.get('/:projectid/lists/:listid', authenticate, getList);
router.put('/:projectid/lists/:listid', authenticate, updateList);
router.delete('/:projectid/lists/:listid', authenticate, deleteList);

module.exports = router;
