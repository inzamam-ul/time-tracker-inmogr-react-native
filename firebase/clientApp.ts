import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSN4My0NhnVgBZ8Ff2mkYw4AevsT9F30",
  authDomain: "devfeed-io.firebaseapp.com",
  projectId: "devfeed-io",
  storageBucket: "devfeed-io.appspot.com",
  messagingSenderId: "216594890362",
  appId: "1:216594890362:web:71480fad7a685a526605c3",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { app, firestore, auth, storage };
