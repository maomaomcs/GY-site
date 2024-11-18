<template>
    <div class="risk-management-page">
      <h1 class="header">企業風險管理</h1>
      <p class="description">
        提供全面的風險管理服務，助力企業識別、評估和應對各類風險，確保企業的穩定發展。
      </p>
      <div class="service-list">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="service-card"
          @click="openModal(service)"
        >
          <img :src="service.icon" alt="Service Icon" class="service-icon"/>
          <h2>{{ service.title }}</h2>
          <p>{{ service.shortDescription }}</p>
        </div>
      </div>
  
      <div v-if="selectedService" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <span class="close" @click="closeModal">×</span>
          <h2>{{ selectedService.title }}</h2>
          <p>{{ selectedService.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            title: "風險識別與評估",
            shortDescription: "幫助企業識別和評估各類風險",
            description: "幫助企業識別市場風險、財務風險、運營風險等，並進行詳細評估，確保公司管理層及時做出決策。",
            icon: "../../img/chayan.png"
          },
          {
            title: "風險管理策略",
            shortDescription: "制定全面的風險管理策略",
            description: "為企業制定有效的風險管理策略，確保公司能夠應對可能發生的風險，保障其可持續發展。",
            icon: "../../img/guanli.png"
          },
          {
            title: "風險管控支持",
            shortDescription: "協同內部控制審閱，提供風險管控支持",
            description: "與內部控制審閱等服務協同合作，為企業提供全方位的風險管控支持，幫助企業穩定運營。",
            icon: "../../img/Agreement.png"
          }
        ],
        selectedService: null
      };
    },
    methods: {
      openModal(service) {
        this.selectedService = service;
      },
      closeModal() {
        this.selectedService = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .risk-management-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px 100px 20px;
    background-color: #f5f7fa;
  }
  
  .header {
    text-align: center;
    font-size: 2.5em;
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  .description {
    text-align: center;
    font-size: 1.2em;
    color: #7f8c8d;
    margin-bottom: 40px;
  }
  
  .service-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 20px;
    margin: 10px 100px;
  }
  
  .service-card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    position: relative;
  }
  
  .service-card:hover {
    transform: scale(1.05);
  }
  
  .service-icon {
    width: 50px; /* Adjust size */
    height: 50px; /* Adjust size */
    margin-bottom: 10px; /* Space between icon and text */
    transition: transform 0.3s ease;
  }
  .service-card:hover .service-icon{
  animation: bounce 0.6s ease-in-out; /* Apply bounce animation */
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px); /* Bounce up */
  }
  50% {
    transform: translateY(0); /* Back to original position */
  }
  70% {
    transform: translateY(-5px); /* Smaller bounce up */
  }
  100% {
    transform: translateY(0); /* Back to original position */
  }
}
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .close {
    float: right;
    font-size: 1.5em;
    cursor: pointer;
    color: #ff7675;
  }
  
  .close:hover {
    color: #d63031;
  }
  </style>
  