const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend.vercel.app'],
  credentials: true
}));


// Middleware
app.use(express.json());

// Route mounting
app.use('/projects', require('./prev/projects'));
app.use('/projects', require('./prev/lists'));
app.use('/projects', require('./prev/tasks'));
app.use('/projects', require('./prev/subtasks'));

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
