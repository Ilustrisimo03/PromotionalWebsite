// src/config/firebaseConfig.js

// Firebase SDK imports
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
  indexedDBLocalPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// 🔐 Firebase Web App Configuration
// ❗ Use ONLY web app credentials here (check Firebase console > Project settings > General > Your apps > Web)
const firebaseConfig = {
  apiKey: "AIzaSyBltSSXJ7B1N-3ttYPIi6TBHGMZDS7H2ME",
  authDomain: "auth-87757.firebaseapp.com",
  databaseURL: "https://auth-87757-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "auth-87757",
  storageBucket: "auth-87757.appspot.com",
  messagingSenderId: "644919794030",
  appId: "1:644919794030:web:abc123def456", // MUST contain ":web:" in a valid Web App
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication with persistent login (IndexedDB first, then fallback to localStorage)
const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
});

// ✅ Initialize Realtime Database (optional, only if used)
const database = getDatabase(app);

// ✅ Initialize Cloud Storage (optional, only if used)
const storage = getStorage(app);

// ✅ Export Firebase services for use in your app
export { app, auth, database, storage };
