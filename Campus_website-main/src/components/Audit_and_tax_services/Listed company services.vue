<template>
    <div class="listed-company-secretary-page">
      <h1 class="header">上市公司秘书</h1>
      <p class="description">
        提供全面的上市公司秘书服务，确保公司运营符合上市规则和法律法规要求。
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
            title: "担任公司秘书",
            shortDescription: "担任公司秘书及联席公司秘书",
            description: "为上市公司担任公司秘书/联席公司秘书，确保公司遵守相关法律法规和公司治理要求。",
            icon: "../../img/huoban.png"
          },
          {
            title: "董事会会议及股东大会",
            shortDescription: "协助召开董事会及股东周年大会",
            description: "编制董事会会议和董事委员会会议文件，协助召开董事会和股东周年大会，确保合法合规。",
            icon: "../../img/sheji.png"
          },
          {
            title: "报告及公告编制",
            shortDescription: "编制中期、年度报告及业绩公告",
            description: "编制并审阅上市公司中期、年度报告和业绩公告，确保报告内容准确且符合规定。",
            icon: "../../img/shenqing.png"
          },
          {
            title: "股东大会通函",
            shortDescription: "编制股东大会通函",
            description: "编制股东周年大会通函，包括董事授权及重选董事相关事项。",
            icon: "../../img/guquan.png"
          },
          {
            title: "通知注册处及联交所",
            shortDescription: "通知公司注册处及香港联交所",
            description: "为上市公司提供与香港公司注册处和香港联交所相关的通知及备案服务。",
            icon: "../../img/Insurance.png"
          },
          {
            title: "月报表及秘书服务",
            shortDescription: "编制月报表及提供秘书服务",
            description: "协助上市公司编制月报表，为公司提供全方位的秘书服务，确保遵守上市规则。",
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
  