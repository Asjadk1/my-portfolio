// ============================================================
//  PASTE YOUR FIREBASE CONFIG HERE
//  Firebase Console → Project settings → General → "Your apps"
//  → </> Web app → copy the firebaseConfig object values below.
//  Until you do, the site still works in Guest mode.
// ============================================================
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// true once real keys have been pasted in
export const isConfigured = !firebaseConfig.apiKey.startsWith("YOUR_");
