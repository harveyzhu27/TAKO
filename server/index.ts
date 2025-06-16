import express, { Request, Response, NextFunction } from 'express';
import projectsRouter from './routes/projects';
import listsRouter from './routes/lists';
import tasksRouter from './routes/tasks';
import subtasksRouter from './routes/subtasks';

const app = express();

// 1) Echo‐back CORS headers for every request
app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin as string | undefined;
  if (origin) {
    // allow the requesting origin
    res.header('Access-Control-Allow-Origin', origin);
    // allow cookies / Authorization headers
    res.header('Access-Control-Allow-Credentials', 'true');
    // allowed methods
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    // allowed headers
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

  // short-circuit preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// 2) Parse JSON bodies
app.use(express.json());

// 3) Mount your routers
app.use('/projects', projectsRouter);
app.use('/lists', listsRouter);
app.use('/tasks', tasksRouter);
app.use('/subtasks', subtasksRouter);

// 4) Health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// 5) Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
