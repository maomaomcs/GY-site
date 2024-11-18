<template>
    <div class="ma-page">
      <h1 class="header">財務審計</h1>
      <p class="description">
        在上市相關服務中，財務審計是重要環節，確保企業財務信息準確合規，為上市提供財務數據支持。
      </p>
  
      <div class="ma-grid">
        <div 
          v-for="(service, index) in maServices" 
          :key="index" 
          class="ma-card"
          @click="openModal(service)"
        >
          <img :src="service.icon" alt="Service Icon" class="ma-icon"/>
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
        maServices: [
          {
            title: "財務審計 - 確保財務信息準確",
            shortDescription: "確保企業財務信息準確，為上市做準備。",
            description: "通過嚴謹的審計流程和方法，對企業財務數據進行審查，保證數據的準確性，滿足上市要求。",
            icon: "../../img/Agreement.png"
          },
          {
            title: "財務審計 - 確保財務信息合規",
            shortDescription: "確保企業財務信息合規，符合上市規範。",
            description: "依據相關法律法規和上市標準，檢查企業財務操作和報告的合規性，避免潛在法律問題。",
            icon: "../../img/Business analytics.png"
          },
          {
            title: "財務審計 - 關聯法定審計",
            shortDescription: "與法定審計等審計服務相關聯。",
            description: "在財務審計過程中，與法定審計及其他相關審計服務協同工作，形成全面的審計體系，保障上市工作順利進行。",
            icon: "../../img/baobao.png"
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
  .ma-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px 50px 20px;
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
  
  .ma-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 20px;
  }
  
  .ma-card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }
  
  .ma-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  .ma-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }
  .ma-card:hover .ma-icon{
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
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 700px;
    width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.8em;
    cursor: pointer;
    color: #ff7675;
  }
  
  .close:hover {
    color: #d63031;
  }
  </style>