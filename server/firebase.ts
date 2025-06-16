import admin from 'firebase-admin';

// Initialize the Admin SDK using environment variables
const serviceAccount = {
  projectId:     process.env.FIREBASE_PROJECT_ID!,
  clientEmail:   process.env.FIREBASE_CLIENT_EMAIL!,
  privateKey:    (process.env.FIREBASE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
} as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Uncomment and set if you need a database URL:
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const db = admin.firestore();
