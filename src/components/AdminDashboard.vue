import { createUser, readUsers, updateUser, deleteUser } from '@/services/Firestore_CRUD_Operations';
import { signInWithGoogle, signOut, getCurrentUser } from '@/services/Firebase_Google_Auth';

<template>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <nav>
      <ul>
        <li><router-link to="/admin/users">User Management</router-link></li>
        <li><router-link to="/admin/donations">Donation Management</router-link></li>
        <li><router-link to="/admin/analytics">Analytics</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
