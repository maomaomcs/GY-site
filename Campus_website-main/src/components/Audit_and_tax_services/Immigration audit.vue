<template>
    <div class="hongkong-immigration-audit-page">
      <h1 class="header">香港移民审计相关服务</h1>
      <p class="description">
        以下是香港移民审计相关内容，包括审计目的、涉及资产类别和投资规定等信息
      </p>
      <div class="service-list">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="service-card"
          @click="openModal(service)"
        >
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
            title: "香港移民审计概述",
            shortDescription: "了解香港移民审计基本概念",
            description: "介绍香港移民审计在移民申请中的作用和意义"
          },
          {
            title: "净资产查证 - 总体要求",
            shortDescription: "明确净资产查证要求",
            description: "解释香港移民审计中针对净资产查证的整体目标和意义"
          },
          {
            title: "净资产查证 - 银行存款资料",
            shortDescription: "银行存款审计资料",
            description: "阐述银行存款作为资产类别在香港移民审计中的资料要求"
          },
          {
            title: "净资产查证 - 证券债券基金资料",
            shortDescription: "证券债券基金审计资料",
            description: "说明证券债券基金在香港移民审计中的资料要求"
          },
          {
            title: "净资产查证 - 房地产资料",
            shortDescription: "房地产审计资料",
            description: "介绍房地产作为资产类别在香港移民审计中的资料要求"
          },
          {
            title: "净资产查证 - 公司股份资料",
            shortDescription: "公司股份审计资料",
            description: "讲解公司股份在香港移民审计中的资料要求"
          },
          {
            title: "投资规定查证 - 总体要求",
            shortDescription: "明确投资规定查证要求",
            description: "解释香港移民审计中针对投资规定查证的整体目标和意义"
          },
          {
            title: "投资规定查证 - 存款证资料",
            shortDescription: "存款证审计资料",
            description: "阐述存款证在香港移民审计中的资料要求"
          },
          {
            title: "投资规定查证 - 有限合基金拥有权权益资料",
            shortDescription: "有限合基金资料",
            description: "说明有限合基金的拥有权权益在香港移民审计中的资料要求"
          },
          {
            title: "净资产金额要求",
            shortDescription: "明确净资产金额标准",
            description: "讲述申请人需证明在申请前两年内绝对实益拥有3,000万港元净资产的要求"
          },
          {
            title: "投资金额及期限要求",
            shortDescription: "明确投资金额和期限",
            description: "说明申请人在180日内投资最少3,000万港元净值于获许投资资产的规定，以及在参加计划的首个周年日后及在其后每个周年日持续符合投资管理规定的内容"
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
}
  </script>
  
  <style scoped>
  .hongkong-immigration-audit-page {
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
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
  }
  
  .service-card:hover {
    transform: scale(1.05);
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