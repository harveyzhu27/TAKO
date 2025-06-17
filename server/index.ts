import express, { Request, Response, NextFunction } from 'express';
import projectsRouter from './routes/projects';
import listsRouter from './routes/lists';
import tasksRouter from './routes/tasks';
import subtasksRouter from './routes/subtasks';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Body parsing
app.use(express.json());

// Routes
app.use('/projects', projectsRouter);
app.use('/projects', listsRouter);
app.use('/projects', tasksRouter);
app.use('/projects', subtasksRouter);

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
