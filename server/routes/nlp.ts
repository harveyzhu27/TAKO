
import authenticate from '../authMiddleware';

// POST /nlp/parse
require('dotenv').config();
const express = require('express');
import { createNLPController } from '../controllers/nlpController';

const router = express.Router();

router.post('/parse', authenticate, createNLPController);

export default router;