<template>
    <div class="business-valuation-page">
      <h1 class="header">商业估值相关服务</h1>
      <p class="description">
        以下是商业估值相关内容，包括不同类型资产估值的要点
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
            title: "商业估值概述",
            shortDescription: "了解商业估值基本概念",
            description: "介绍商业估值在商业活动中的重要性和作用"
          },
          {
            title: "公司估值 - 内外部因素分析",
            shortDescription: "分析公司估值内外部因素",
            description: "详细阐述在公司估值中需要考虑的内外部因素及其对股价价值评估的影响"
          },
          {
            title: "公司估值 - 风险评估",
            shortDescription: "公司估值中的风险评估",
            description: "讲解如何在公司估值过程中评估风险以确保估值准确性"
          },
          {
            title: "房产估值 - 市场价值确定",
            shortDescription: "确定房产市场价值",
            description: "介绍确定房产等不动产市场价值的方法和流程"
          },
          {
            title: "房产估值 - 应用场景",
            shortDescription: "房产估值的应用",
            description: "阐述房产估值结果在交易、贷款和保险等方面的具体应用"
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
  .business-valuation-page {
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