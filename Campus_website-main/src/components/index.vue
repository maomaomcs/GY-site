<template>
  <div class="advisory-banner">
    <div class="banner-image">
      <img src="../../img/image.png" alt="Cityscape" class="cityscape-image" />
    </div>
    <div class="banner-content">
      <p class="tagline animate-float">For a successful business</p>
      <h1 class="title animate-float">
        Grand <span class="highlight">Blossom</span>
      </h1>
      <p class="subtitle animate-float">Advisory ltd.</p>
      <p class="description animate-float">
        Collaborative growth with professionals.<br />
        Focused on delivering value to customers.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvisoryBanner",
};
</script>

<style scoped>
.advisory-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: #f5f5f5;
  overflow: hidden;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.cityscape-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0.5; /* For a subtle overlay effect */
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #000;
}

.tagline,
.title,
.subtitle,
.description {
  opacity: 0; /* Initially hidden for the animation */
  animation: float-in 1.5s ease-out forwards;
}

.tagline {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  animation-delay: 0.2s; /* Staggered animation */
}

.title {
  font-size: 3rem;
  margin: 0.5rem 0;
  font-weight: bold;
  animation-delay: 0.4s; /* Staggered animation */
}

.highlight {
  color: #007bff; /* Blue color for the word "Blossom" */
}

.subtitle {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  animation-delay: 0.6s; /* Staggered animation */
}

.description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  animation-delay: 0.8s; /* Staggered animation */
}

@keyframes float-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
