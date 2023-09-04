
// Importing Firebase
import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase Storage
const storage = firebase.storage();

// Function to upload image
const uploadImage = async (file) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  return fileRef.getDownloadURL();
};
