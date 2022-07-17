// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "docs-next-build.firebaseapp.com",
  projectId: "docs-next-build",
  storageBucket: "docs-next-build.appspot.com",
  messagingSenderId: "626882274646",
  appId: "1:626882274646:web:ad5cba6d723153303922f7",
};

// Initialize Firebase
const app = getApps.length> 0? getApp() : initializeApp(firebaseConfig);

//const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
