import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-LdJuB7iXARNyl74cjQ6Sh8wntjwUwso",
  authDomain: "ppdisasterrelief.firebaseapp.com",
  projectId: "ppdisasterrelief",
  storageBucket: "ppdisasterrelief.appspot.com",
  messagingSenderId: "125033891078",
  appId: "1:125033891078:web:9532264dc6995d9d0a0a87",
  measurementId: "G-FFPBKVK336",
};

firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Custom logic (your existing logic can be added here)
// For example, updating Vuex store if a user is an admin
// ...

export { db, auth, storage };
