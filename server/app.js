const express = require('express');
const cors = require('cors');

const projectsRouter = require('./routes/projects');
const listsRouter = require('./routes/lists');
const tasksRouter = require('./routes/tasks');
const subtasksRouter = require('./routes/subtasks');

const app = express();

// ✅ CORS config
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-vercel-app.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ Preflight handler
app.options('*', cors());

// ✅ Request logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.use(express.json());

// ✅ Mount routes
app.use('/projects', projectsRouter);
app.use('/lists', listsRouter);
app.use('/tasks', tasksRouter);
app.use('/subtasks', subtasksRouter);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
