import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

import {
  getMessaging,
  getToken,
  onMessage,
  isSupported
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnEXaS5LuodPbxbXBMgANpkA4ipmdGQ8E",
  authDomain: "sliet-connect.firebaseapp.com",
  projectId: "sliet-connect",
  storageBucket: "sliet-connect.firebasestorage.app",
  messagingSenderId: "504766146769",
  appId: "1:504766146769:web:2e0422a130cae03d5bfdf0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const messagingPromise = isSupported()
  .then((supported) => supported ? getMessaging(app) : null)
  .catch((error) => {
    console.warn("Firebase Messaging available nahi hai:", error);
    return null;
  });


console.log("SLIET CONNECT Firebase initialized!");

export {
  messagingPromise,
  getToken,
  onMessage,
  db,
  auth,
  storage,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  sendPasswordResetEmail,
};
