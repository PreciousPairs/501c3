const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUserDocument = functions.auth.user().onCreate((user) => {
  const userRef = admin.firestore().collection('users').doc(user.uid);
  return userRef.set({
    displayName: user.displayName,
    email: user.email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
});
