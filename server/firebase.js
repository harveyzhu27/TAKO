// server/firebase.js
const admin = require('firebase-admin');

// Parse the JSON you pasted into Render’s FIREBASE_CONFIG_JSON var
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { db };
