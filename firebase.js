import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

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

console.log("SLIET CONNECT Firebase initialized!");

export {
  db,
  auth,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
