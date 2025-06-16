import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    // whatever shape your auth middleware gives you
    user?: {
      uid: string;
      // you can add email?: string, roles?: string[], etc.
    };
  }
}