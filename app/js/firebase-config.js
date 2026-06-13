// ============================================================
//  PASTE YOUR FIREBASE CONFIG HERE
//  Firebase Console → Project settings → General → "Your apps"
//  → </> Web app → copy the firebaseConfig object values below.
//  Until you do, the site still works in Guest mode.
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAL3-YgYMFGJQzkV7jfzpW0IUme0kDhhOs",
  authDomain: "page-a-day-asjad-29f67.firebaseapp.com",
  projectId: "page-a-day-asjad-29f67",
  storageBucket: "page-a-day-asjad-29f67.firebasestorage.app",
  messagingSenderId: "695431676390",
  appId: "1:695431676390:web:4a5fa0aef67a1c26a65627"
};

// true once real keys have been pasted in
export const isConfigured = !firebaseConfig.apiKey.startsWith("YOUR_");
