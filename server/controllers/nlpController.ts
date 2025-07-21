import { Request, Response } from 'express';
import { db } from '../firebase';

import OpenAI from 'openai';

const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
  throw new Error("OPENAI_API_KEY environment variable is missing. Please set it in your .env file or environment.");
}
const openai = new OpenAI({ apiKey: openaiApiKey });

export const createNLPController = async (req: Request, res: Response) => {
  const { text } = req.body;
  console.log(text);
  res.status(200).json({ message: 'NLP controller called' });
};