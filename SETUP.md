# 📚 Page-a-Day — Firebase Setup Guide

The site works **right now in Guest mode** (books saved in the browser).
To enable real accounts (email + Google login, data saved in the cloud per user),
connect Firebase — it's free and takes about 10 minutes.

## 1. Create a Firebase project
1. Go to https://console.firebase.google.com and sign in with Google.
2. Click **Add project** → name it (e.g. `page-a-day`) → you can disable Analytics → **Create project**.

## 2. Register a web app & get your keys
1. On the project overview page, click the **`</>` (Web)** icon.
2. Nickname it (e.g. `page-a-day-web`) → **Register app**.
3. Firebase shows a `firebaseConfig` object. Copy its values into
   **`js/firebase-config.js`** in this folder, replacing the `YOUR_...` placeholders.

## 3. Turn on login methods
1. In the left sidebar: **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable:
   - **Email/Password**
   - **Google** (pick your support email when asked)

## 4. Create the database
1. Sidebar: **Build → Firestore Database → Create database**.
2. Choose **Start in production mode** → pick a location → **Enable**.
3. Open the **Rules** tab and replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

4. Click **Publish**. (These rules mean: each user can only touch their own data.)

## 5. Run the site
Pages must be served over HTTP (not opened as `file://`) for logins to work.
From this folder run:

```
python3 -m http.server 8000
```

then open http://localhost:8000/login.html

## 6. (Optional) Put it on the internet — Firebase Hosting
```
npm install -g firebase-tools
firebase login
firebase init hosting     # choose your project, public dir: . , single-page app: No
firebase deploy
```
You'll get a free `https://your-project.web.app` URL.
Also add that domain under **Authentication → Settings → Authorized domains**
(localhost is authorized by default).

## File map
| File | What it is |
|---|---|
| `login.html` | Login / sign-up / Google / Guest entry page |
| `shelf.html` | My Shelf + Milestone board (the main app) |
| `book-calculator.html` | The pages-per-day calculator |
| `js/firebase-config.js` | **← paste your Firebase keys here** |
| `css/app.css` | Shared styles |
