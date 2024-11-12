<template>
    <div class="macau-subsidiary-audit-page">
      <h1 class="header">澳门子公司审计相关服务</h1>
      <p class="description">
        以下是澳门子公司审计相关信息，包括其与其他审计服务的关联及可能涉及的审计内容
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
                title: "澳门子公司审计概述",
                shortDescription: "了解澳门子公司审计基本概念",
                description: "介绍澳门子公司审计在企业管理中的意义和作用",
                icon: "../../img/Insurance.png"
            },
            {
                title: "澳门子公司审计与法定审计关系",
                shortDescription: "明确与法定审计关联",
                description: "阐述澳门子公司审计和法定审计等相关审计服务要求的联系",
                icon: "../../img/qiyue.png"
            },
            {
                title: "澳门子公司财务报表审计",
                shortDescription: "财务报表审计内容",
                description: "详细介绍对澳门子公司财务报表审计的目标、流程和重要性",
                icon: "../../img/baobao.png"
            },
            {
                title: "澳门子公司内部控制审计",
                shortDescription: "内部控制审计内容",
                description: "说明对澳门子公司内部控制审计的重点、方法和意义",
                icon: "../../img/Stocks and brokerages.png"
            },
            {
                title: "确保财务信息准确性",
                shortDescription: "财务信息质量保障",
                description: "阐述澳门子公司审计如何确保子公司财务信息的准确性",
                icon: "../../img/huoban.png"
            },
            {
                title: "确保财务信息合规性",
                shortDescription: "财务信息合规保障",
                description: "解释澳门子公司审计在保障子公司财务信息合规性方面的措施",
                icon: "../../img/passive income.png"
            },
            {
                title: "物业管理收支报告审计",
                shortDescription: "物业管理收支审计",
                description: "以物业管理收支报告审计为例，介绍其作为子公司审计部分内容的情况",
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
}
  </script>
  
  <style scoped>
  .macau-subsidiary-audit-page {
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