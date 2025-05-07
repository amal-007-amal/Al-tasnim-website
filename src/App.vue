<template>
  <div id="app">
    <!-- Preloader component that will show during the page load -->
    <PageLoader />
    
    <!-- Router view to load different pages based on routing -->
    <router-view />
  </div>
</template>

<script setup>
// Import the Preloader component if it's not globally available
import PageLoader from './views/PageLoader.vue';
</script>

<style scoped>
/* Your styles here */
</style>
