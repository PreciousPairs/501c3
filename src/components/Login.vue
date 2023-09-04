import { createUser, readUsers, updateUser, deleteUser } from '@/services/Firestore_CRUD_Operations';
import { signInWithGoogle, signOut, getCurrentUser } from '@/services/Firebase_Google_Auth';

<template>
  <section id="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <input type="submit" value="Login">
    </form>
    <button @click="googleSignIn">Sign in with Google</button>
  </section>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Handle regular login logic
    },
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // Handle successful login
      }).catch((error) => {
        // Handle error
      });
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
