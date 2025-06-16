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

// ✅ Handle preflight OPTIONS requests manually (some proxies need this)
app.options('*', cors());

// ✅ Add logging to verify preflights reach server
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.use(express.json());

// ✅ Mount your routes
app.use('/projects', require('./prev/projects'));
// ... other routes

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
