<template>
    <div class="esg-reporting-page">
      <h1 class="header">環境社會及管治報告（ESG報告）</h1>
      <p class="description">
        提供全面的ESG報告編制服務，助力企業合規、可持續發展。
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
            title: "ESG報告編制",
            shortDescription: "為上市企業撰寫ESG報告",
            description: "為上市企業編制符合國際標準的環境、社會及治理(ESG)報告，助力企業可持續發展",
            icon: "../../img/zhuce.png"
          },
          {
            title: "ESG諮詢及合規專案",
            shortDescription: "提供ESG諮詢及合規專案",
            description: "提供專業的ESG諮詢服務，幫助企業制定並執行合規專案，確保符合相關地區要求",
            icon: "../../img/qiyue.png"
          },
          {
            title: "ESG審計",
            shortDescription: "進行ESG審計",
            description: "對企業的環境、社會及治理情況進行審計，確保企業的ESG實踐符合標準",
            icon: "../../img/Insurance.png"
          },
          {
            title: "社會責任諮詢",
            shortDescription: "提供社會責任諮詢",
            description: "為企業提供社會責任相關的諮詢服務，幫助企業履行社會責任",
            icon: "../../img/huoban.png"
          },
          {
            title: "反貪腐諮詢",
            shortDescription: "提供反貪腐諮詢",
            description: "為企業提供反貪腐培訓和諮詢，提升企業的合規性和透明度",
            icon: "../../img/qian.png"
          },
          {
            title: "ESG培訓",
            shortDescription: "為企業提供ESG培訓",
            description: "為上市公司及其董事提供ESG相關培訓，提升其在可持續發展領域的知識和實踐能力",
            icon: "../../img/Files and folders.png"
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
  .esg-reporting-page {
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
  