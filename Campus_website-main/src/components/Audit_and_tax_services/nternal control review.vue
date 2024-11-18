<template>
    <div class="internal-control-review-page">
      <h1 class="header">內部控制審閱</h1>
      <p class="description">
        提供全面的內部控制審閱服務，幫助企業完善內部控制體系，確保運營風險可控，財務報告可靠合規。
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
            title: "審核內部控制系統",
            shortDescription: "審核企業內部控制系統",
            description: "評估和審查企業現有的內部控制系統，識別潛在風險點，提出改善建議以確保公司流程高效且符合合規要求。",
            icon: "../../img/chaepai.png"
          },
          {
            title: "完善內部控制體系",
            shortDescription: "完善企業內部控制體系",
            description: "提供針對性的改善方案，幫助企業建立和完善內部控制體系，減少運營風險並增強財務報告的可靠性。",
            icon: "../../img/sheji.png"
          },
          {
            title: "降低運營風險",
            shortDescription: "降低企業運營風險",
            description: "通過審閱和改進內部控制措施，降低企業在運營中可能面臨的風險，確保企業穩定運行。",
            icon: "../../img/Business analytics.png"
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
  .internal-control-review-page {
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
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  .service-icon {
    width: 50px; /* Adjust size */
    height: 50px; /* Adjust size */
    margin-bottom: 10px; /* Space between icon and text */
    transition: transform 0.3s ease;
  }
  .service-card:hover .service-icon {
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
  