<template>
  <div id="app">
    <Nav-bar />
    <router-view />
    <Foot-er />
  </div>
</template>

<script>
import Navbar from './components/Nav-bar.vue';
import Footer from './components/Foot-er.vue';

export default {
  name: 'App',
  components: {
    Nav-bar,
    Foot-er
  }
};
</script>

