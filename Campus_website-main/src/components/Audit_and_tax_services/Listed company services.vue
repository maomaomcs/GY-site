<template>
    <div class="listed-company-secretary-page">
      <h1 class="header">上市公司秘書</h1>
      <p class="description">
        提供全面的上市公司秘書服務，確保公司運營符合上市規則和法律法規要求。
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
            title: "擔任公司秘書",
            shortDescription: "擔任公司秘書及聯席公司秘書",
            description: "為上市公司擔任公司秘書/聯席公司秘書，確保公司遵守相關法律法規和公司治理要求。",
            icon: "../../img/huoban.png"
          },
          {
            title: "董事會會議及股東大會",
            shortDescription: "協助召開董事會及股東周年大會",
            description: "編制董事會會議和董事委員會會議文件，協助召開董事會和股東周年大會，確保合法合規。",
            icon: "../../img/sheji.png"
          },
          {
            title: "報告及公告編制",
            shortDescription: "編制中期、年度報告及業績公告",
            description: "編制並審閱上市公司中期、年度報告和業績公告，確保報告內容準確且符合規定。",
            icon: "../../img/shenqing.png"
          },
          {
            title: "股東大會通函",
            shortDescription: "編制股東大會通函",
            description: "編制股東周年大會通函，包括董事授權及重選董事相關事項。",
            icon: "../../img/guquan.png"
          },
          {
            title: "通知註冊處及聯交所",
            shortDescription: "通知公司註冊處及香港聯交所",
            description: "為上市公司提供與香港公司註冊處和香港聯交所相關的通知及備案服務。",
            icon: "../../img/Insurance.png"
          },
          {
            title: "月報表及秘書服務",
            shortDescription: "編制月報表及提供秘書服務",
            description: "協助上市公司編制月報表，為公司提供全方位的秘書服務，確保遵守上市規則。",
            icon: "../../img/shangbiao.png"
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
  .listed-company-secretary-page {
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
  