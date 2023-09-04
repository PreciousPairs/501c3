<template>
  <footer>
    <div class="footer-content">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/faqs">FAQs</router-link></li>
      </ul>
      <div class="social-media">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">Instagram</a>
      </div>
      <p>&copy; 2023 Precious Pairs. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Your CSS styles here */
</style>