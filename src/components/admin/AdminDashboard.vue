<template>
  <div>
    <h1>Admin Dashboard</h1>
    <router-link to="/admin/users">User Management</router-link>
    <router-link to="/admin/analytics">Analytics</router-link>
    <!-- Add more links as needed -->
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>
