import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

// Initialize the Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})

export const db = admin.firestore()
