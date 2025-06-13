const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route mounting
app.use('/projects', require('./routes/projects'));
app.use('/projects', require('./routes/lists'));
app.use('/projects', require('./routes/tasks'));
app.use('/projects', require('./routes/subtasks'));

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
