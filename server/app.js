const express = require('express');
const app = express();

// const db = require('./firebase');
// console.log('Firestore connected');

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

const projectRoutes = require('./routes/projects.js')
app.use('/projects', projectRoutes);

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});