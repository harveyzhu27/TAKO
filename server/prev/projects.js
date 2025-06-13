const express = require('express');
const router = express.Router();
const authenticate = require('../authMiddleware');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');

router.post('/create', authenticate, createProject);
router.get('/all', authenticate, getAllProjects);
router.get('/:id', authenticate, getProjectById);
router.put('/:id', authenticate, updateProject);
router.delete('/:id', authenticate, deleteProject);

module.exports = router;
