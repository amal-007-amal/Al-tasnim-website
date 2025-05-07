<template>
  <div v-if="isLoading" class="page-loader">
    <img src="../assets/business/innerpage-color-logo.png" alt="Loading...">
    <div class="loader-spinner"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'PageLoader',
  setup() {
    const isLoading = ref(false);
    const router = useRouter();

    // Add a ref for dropdowns if needed
    const dropdowns = ref([]);

    // Function to close dropdowns
    const closeDropdowns = () => {
      dropdowns.value.forEach(dropdown => dropdown = false);
    };

    // Set the loader when the component is mounted (for page refresh or initial load)
    onMounted(() => {
      isLoading.value = true;
      closeDropdowns();  // Close any open dropdowns
      document.body.classList.add('loading'); // Disable interactions while loading
      setTimeout(() => {
        isLoading.value = false;
        document.body.classList.remove('loading'); // Enable interactions after loading
      }, 1500); // Simulate loading delay
    });

    // Watch for route changes
    router.beforeEach((to, from, next) => {
      isLoading.value = true;
      closeDropdowns(); // Close dropdowns on route change
      document.body.classList.add('loading'); // Disable interactions while loading
      next();
    });

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
        document.body.classList.remove('loading'); // Enable interactions after loading
      }, 1500); // Simulate loading delay
    });

    return {
      isLoading,
      dropdowns,
    };
  },
};
</script>

<style scoped>
/* Your existing styles remain unchanged */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.page-loader img {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.loader-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1E398D;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Disable interactions during loading */
body.loading .dropdown {
  pointer-events: none; /* Prevent interaction with dropdowns */
}

body.loading .menu-item {
  pointer-events: none; /* Prevent interaction with other menu items */
}
</style>
