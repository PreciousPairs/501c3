
// Importing Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase (make sure this happens only once)
// Your Firebase Config from firebase-credentials.json
const firebaseConfig = {
  apiKey: "<Your API Key>",
  authDomain: "<Your Auth Domain>",
  projectId: "<Your Project ID>",
  storageBucket: "<Your Storage Bucket>",
  messagingSenderId: "<Your Messaging Sender ID>",
  appId: "<Your App ID>",
  measurementId: "<Your Measurement ID>"
};

firebase.initializeApp(firebaseConfig);

// Firestore instance
const db = firebase.firestore();

// CRUD Operations for Users Collection
export const createUser = (data) => db.collection('users').add(data);
export const readUsers = () => db.collection('users').get();
export const updateUser = (id, data) => db.collection('users').doc(id).update(data);
export const deleteUser = (id) => db.collection('users').doc(id).delete();

// CRUD Operations for Donations Collection
export const createDonation = (data) => db.collection('donations').add(data);
export const readDonations = () => db.collection('donations').get();
export const updateDonation = (id, data) => db.collection('donations').doc(id).update(data);
export const deleteDonation = (id) => db.collection('donations').doc(id).delete();

// CRUD Operations for Events Collection
export const createEvent = (data) => db.collection('events').add(data);
export const readEvents = () => db.collection('events').get();
export const updateEvent = (id, data) => db.collection('events').doc(id).update(data);
export const deleteEvent = (id) => db.collection('events').doc(id).delete();

// CRUD Operations for Testimonials Collection
export const createTestimonial = (data) => db.collection('testimonials').add(data);
export const readTestimonials = () => db.collection('testimonials').get();
export const updateTestimonial = (id, data) => db.collection('testimonials').doc(id).update(data);
export const deleteTestimonial = (id) => db.collection('testimonials').doc(id).delete();