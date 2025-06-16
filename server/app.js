const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Use CORS — allow localhost + Vercel
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-vercel-project.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ (Optional) Handle OPTIONS preflight explicitly
app.options('*', cors());

// Middleware
app.use(express.json());

// Routes
app.use('/projects', require('./prev/projects'));
app.use('/projects', require('./prev/lists'));
app.use('/projects', require('./prev/tasks'));
app.use('/projects', require('./prev/subtasks'));

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
