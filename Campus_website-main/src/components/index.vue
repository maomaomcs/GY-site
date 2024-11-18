<template>
    <div id="app" class="main-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-image-container">
            <img src="../../temp/image.png" alt="Main Image" class="main-image">
        </div>

        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style scoped>
.main-image {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
  .main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
  
  .hero-image-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  </style>
  