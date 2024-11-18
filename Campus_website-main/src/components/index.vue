<template>
    <div id="app" class="main-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-image-placeholder">
            <p class="image01">
              <img src="../../img/image01.png" alt="Image 01">
            </p>
            <img src="../../img/image.png" alt="Main Image">
          </div>
          <div class="hero-text">
            <h1>Think Future</h1>
            <p>For a successful business</p>
            <div class="carousel-indicators">
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Business Partner Section -->
      <section class="business-partner">
        <h2>Business Partner</h2>
        <div class="partner-cards">
          <div class="card">
            <div class="image-placeholder">
              <p>Grow Together Image</p>
            </div>
            <h3>Grow Together</h3>
            <p>Collaborative growth with professionals.</p>
          </div>
          <div class="card">
            <div class="image-placeholder">
              <p>Value Creator Image</p>
            </div>
            <h3>Value Creator</h3>
            <p>Focused on delivering value to customers.</p>
          </div>
          <div class="card">
            <div class="image-placeholder">
              <p>Smart Business Image</p>
            </div>
            <h3>Smart Business</h3>
            <p>Innovative solutions for smart enterprises.</p>
          </div>
        </div>
      </section>
  
      <!-- Business Planning Section -->
      <section class="business-planning">
        <h2>Business Planning</h2>
        <div class="image-placeholder">
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
    name: "App",
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
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
  
  .carousel-indicators span {
    margin: 0 0.5rem;
    font-size: 1rem;
    color: #888;
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
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
  }
  
  .card h3 {
    color: #001f5b;
  }
  
  .image-placeholder {
    background-color: #e0e0e0;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 1rem;
    color: #555;
  }
  
  /* Business Planning Section */
  .business-planning {
    text-align: center;
    padding: 2rem;
    background-color: #f4f4f4;
  }
  
  .business-planning .image-placeholder {
    width: 100%;
    max-width: 500px;
    height: 250px;
    margin: 0 auto;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
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
  