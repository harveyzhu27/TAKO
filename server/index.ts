import express from 'express';
import cors from 'cors';

import projectsRouter from './routes/projects';
import listsRouter from './routes/lists';
import tasksRouter from './routes/tasks';
import subtasksRouter from './routes/subtasks';

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://your-vercel-app.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.use(express.json());

app.use('/projects', projectsRouter);
app.use('/lists', listsRouter);
app.use('/tasks', tasksRouter);
app.use('/subtasks', subtasksRouter);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
