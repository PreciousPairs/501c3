
// Importing Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase (make sure this happens only once)
// Your Firebase Config from firebase-credentials.json
const firebaseConfig = {
    apiKey: "AIzaSyA-LdJuB7iXARNyl74cjQ6Sh8wntjwUwso",
  authDomain: "ppdisasterrelief.firebaseapp.com",
  projectId: "ppdisasterrelief",
  storageBucket: "ppdisasterrelief.appspot.com",
  messagingSenderId: "125033891078",
  appId: "1:125033891078:web:9532264dc6995d9d0a0a87",
  measurementId: "G-FFPBKVK336"
};

firebase.initializeApp(firebaseConfig);

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Function to initiate Google Sign In
export const signInWithGoogle = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

// Function to sign out
export const signOut = () => {
  return firebase.auth().signOut();
};

// Function to get current user
export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
