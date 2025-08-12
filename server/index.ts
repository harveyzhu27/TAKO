import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan'; 
import dotenv from 'dotenv';

import projectsRouter from './routes/projects';
import listsRouter    from './routes/lists';
import tasksRouter    from './routes/tasks';
import subtasksRouter from './routes/subtasks';
import doNowRouter    from './routes/doNow';


dotenv.config();
const app = express();

// ─── Request logging ───────────────────────────────────────────────────────────
app.use(morgan('dev'));                 // ← add this line right after app initialization

// ─── CORS & Body parsing ──────────────────────────────────────────────────────
app.use(cors());                        // allow cross-origin (configure in prod)
app.use(express.json());                // parse JSON bodies

// ─── Static assets & favicon ──────────────────────────────────────────────────
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/favicon.png'));
});
app.use(express.static(path.join(__dirname, '../public')));

// ─── Routers ───────────────────────────────────────────────────────────────────
app.use('/projects', projectsRouter);
app.use('/projects', listsRouter);
app.use('/projects', tasksRouter);
app.use('/projects', subtasksRouter);
app.use('/doNow', doNowRouter);


// ─── Health check & error handling ────────────────────────────────────────────
app.get('/', (req, res) => res.send('Backend is running!'));

process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
});

// ─── Start server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
