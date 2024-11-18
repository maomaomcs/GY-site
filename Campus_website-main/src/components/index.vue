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
        Risk Advisory | Accounting | Audit | Tax <br />
        Due Diligence ESG | Comp Sec | Valuation | IPO | Compliance
      </p>
      <!-- Learn More Button -->
      <a href="#learn-more" class="learn-more-button animate-float">Learn More</a>
    </div>
  </div>
  <div id="app" class="main-container">
    <!-- New Section for "Learn More" -->
    <!-- Business Partner Section -->
    <section class="business-partner">
      <h2 id="learn-more">Business Partner</h2>
      <div class="partner-cards">
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img :src="businessImage1" alt="Business Partner Image 1">
          </div>
          <h3>Grow Together</h3>
          <p>Collaborative growth with professionals.</p>
        </div>
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img :src="businessImage2" alt="Business Partner Image 2">
          </div>
          <h3>Value Creator</h3>
          <p>Focused on delivering value to customers.</p>
        </div>
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img :src="businessImage3" alt="Business Partner Image 3">
          </div>
          <h3>Smart Business</h3>
          <p>Innovative solutions for smart enterprises.</p>
        </div>
      </div>
    </section>
    <!-- Business Planning Section -->
    <section class="business-planning">
      <h2>Business Planning</h2>
      <div class="image-placeholder-Business-Planning">
        <img src="../../img/微信图片_20241118010926.png">
        <p>Keyboard Image Placeholder</p>
      </div>
    </section>

    <!-- Our Challenge Section -->
    <section class="our-challenge">
      <div class="challenge-content">
        <h2>Our Challenge</h2>
        <p>
          We are committed to solving your business problems through innovation
          and strategy.
        </p>
        <div class="image-placeholder">
          <p>Challenge Image Placeholder</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessImage1: '../../img/image.png',
      businessImage2: '../../img/image.png',
      businessImage3: '../../img/image.png',
      hoverImage1: '../../img/image01.png',
      hoverImage2: '../../img/image01.png',
      hoverImage3: '../../img/image01.png',
    };
  }
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
  opacity: 0.5;
  /* For a subtle overlay effect */
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
.description,
.learn-more-button {
  opacity: 0;
  /* Initially hidden for the animation */
  animation: float-in 1.5s ease-out forwards;
}

.tagline {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  animation-delay: 0.2s;
  /* Staggered animation */
}

.title {
  font-size: 3rem;
  margin: 0.5rem 0;
  font-weight: bold;
  animation-delay: 0.4s;
  /* Staggered animation */
}

.highlight {
  color: green;
  /* Blue color for the word "Blossom" */
}

.subtitle {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  animation-delay: 0.6s;
  /* Staggered animation */
}

.description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  animation-delay: 0.8s;
  /* Staggered animation */
}

.learn-more-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: green;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;
  animation-delay: 1s;
  /* Staggered animation for the button */
}

.learn-more-button:hover {
  background-color: #000
}

.learn-more-section {
  padding: 50px 20px;
  background-color: #f5f5f5;
  text-align: center;
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

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

/* Hero Section */
.hero {
  background-color: #f4f4f4;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.hero-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.hero-image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #001f5b;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
}

/* Business Partner Section */
.business-partner {
  padding: 2rem 1rem;
  text-align: center;
  background-color: #f8f8f8;
}

.partner-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 5%;
  width: 250px;
  text-align: center;
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
}

.card h3 {
  margin-top: 5%;
  color: #001f5b;
}

.card p {
  margin-top: 2%;
  color: #001f5b;
}

.image-placeholder-business-partner {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 1rem;
  color: #555;
  background-color: rgb(26, 198, 95);
  display: flex;
  transition: opacity 0.5s ease;
}

.image-placeholder-business-partner img {
  width: 100%;
  height: 120px;
  border-radius: 50%;
  transition: opacity 0.5s ease;
}

.image-placeholder-business-partner:hover img {
  opacity: 0.8;
}

/* Business Planning Section */

.business-planning {
  width: 100%;
  height: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-image: url("../../img/image.png");
  background-size: cover;
  /* 确保背景图片覆盖整个容器 */
  background-position: center;
  /* 图片居中显示 */
}

.image-placeholder-Business-Planning {
  width: 80%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #555;
  background-color: aqua;
  display: flex;
}

.image-placeholder-Business-Planning img {
  justify-content: center;
  margin-left: 170px;
  width: 120px;
  height: 120px;
  border-radius: 8px;
}

/* Our Challenge Section */
.our-challenge {
  background-color: #001f5b;
  color: white;
  text-align: center;
  padding: 2rem;
}

.challenge-content {
  max-width: 600px;
  margin: 0 auto;
}

.challenge-content .image-placeholder {
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 8px;
}
</style>
