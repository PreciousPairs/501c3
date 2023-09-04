import { createUser, readUsers, updateUser, deleteUser } from '@/services/Firestore_CRUD_Operations';
import { signInWithGoogle, signOut, getCurrentUser } from '@/services/Firebase_Google_Auth';

<template>
  <section id="signup">
    <h2>Sign Up to Volunteer</h2>
    <form>
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName">
      
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email">
      
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone">
      
      <label for="areasOfInterest">Areas of Interest:</label>
      <select id="areasOfInterest" name="areasOfInterest">
        <option value="shoeDistribution">Shoe Distribution</option>
        <option value="communityOutreach">Community Outreach</option>
        <option value="fundraising">Fundraising</option>
      </select>
      
      <label for="availability">Availability:</label>
      <input type="text" id="availability" name="availability" placeholder="Weekdays/Weekends/Any">
      
      <label for="location">Location:</label>
      <input type="text" id="location" name="location" placeholder="City, State">
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      
      <input type="submit" value="Sign Up">
    
    <button @click="googleSignIn">Sign up with Google</button>
  </form>

  </section>
</template>

<script>
export default {
  name: 'EnhancedSignup',
};

  methods: {
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // Handle successful signup or login
      }).catch((error) => {
        // Handle error
      });
    },
  },
</script>


<style scoped>
/* Your CSS styles here */
</style>
