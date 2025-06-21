import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import listsRouter from './routes/lists';
import tasksRouter from './routes/tasks';
import subtasksRouter from './routes/subtasks';
import doNowRouter from './routes/doNow';

const app = express();
app.use(cors()); // or use origin option to restrict in production

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Body parsing
app.use(express.json());

// Routes
app.use('/projects', projectsRouter);
app.use('/projects', listsRouter);
app.use('/projects', tasksRouter);
app.use('/projects', subtasksRouter);
app.use('/doNow', doNowRouter);

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
