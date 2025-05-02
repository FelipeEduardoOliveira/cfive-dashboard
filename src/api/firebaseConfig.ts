// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Adicione outros serviços se necessário (e.g. storage)

const firebaseConfig = {
  apiKey: 'AIzaSyBkHCtUzECiz855u43aWbd8pv8XhoxlazA',
  authDomain: 'cfive-4e5cf.firebaseapp.com',
  projectId: 'cfive-4e5cf',
  storageBucket: 'cfive-4e5cf.firebasestorage.app',
  messagingSenderId: '484175876349',
  appId: '1:484175876349:web:3f8a4be2db690472aeae94',
  measurementId: 'G-QYMGLXSMPX',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
