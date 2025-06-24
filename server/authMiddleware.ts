import { Request, Response, NextFunction } from 'express'
import admin from 'firebase-admin'

export interface AuthRequest extends Request {
  user: { uid: string }
}

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.method === 'OPTIONS') return next()
    

  const authHeader = req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : null

  if (!token) {
    return res.status(401).json({ error: 'Missing token' })
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    ;(req as AuthRequest).user = { uid: decoded.uid }
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export default authenticate
