
<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/programs">Programs</router-link></li>
      <li><router-link to="/get-involved">Get Involved</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
      <li><router-link to="/signup">Sign Up</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/donate">Donate</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Your CSS styles here */
</style>
