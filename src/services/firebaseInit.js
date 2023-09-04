import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
