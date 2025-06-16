const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Fully configured CORS middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-vercel-app.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ Handle preflight OPTIONS requests manually
app.options('*', cors());

// ✅ Log every request
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.use(express.json());

// ✅ Mount your actual routes
app.use('/projects', require('./routes/projects'));
app.use('/lists', require('./routes/lists'));
app.use('/tasks', require('./routes/tasks'));
app.use('/subtasks', require('./routes/subtasks'));

// ✅ Optional root check route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
