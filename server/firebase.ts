import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

let serviceAccount: any;

try {
  serviceAccount = require('./serviceAccountKey.json');
} catch (e) {
  throw new Error('Firebase credentials not found: add serviceAccountKey.json or set environment variables.');
}

// 1. Local dev JSON file (placed next to firebase.ts)
const localPath = path.join(__dirname, 'serviceAccountKey.json');
if (fs.existsSync(localPath)) {
  serviceAccount = JSON.parse(
    fs.readFileSync(localPath, 'utf8')
  ) as admin.ServiceAccount;
} else {
  // 2. Render secret mount
  const secretPath = '/etc/secrets/serviceAccountKey.json';
  if (fs.existsSync(secretPath)) {
    serviceAccount = JSON.parse(
      fs.readFileSync(secretPath, 'utf8')
    ) as admin.ServiceAccount;
  } else {
    // 3. Environment variables fallback
    const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;
    if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
      throw new Error('Firebase credentials not found: set serviceAccountKey.json, secret file, or env vars.');
    }
    serviceAccount = {
      projectId:   FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      privateKey:  FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    } as admin.ServiceAccount;
  }
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const db = admin.firestore();
