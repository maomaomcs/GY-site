<template>
    <div class="due-diligence-page">
      <h1 class="header">尽职调查相关服务</h1>
      <p class="description">
        以下是尽职调查相关信息，包括其在不同业务场景中的作用等
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
            title: "尽职调查概述",
            shortDescription: "了解尽职调查基本概念",
            description: "介绍尽职调查是什么，以及它在商业活动中的意义"
          },
          {
            title: "澳门企业审计与尽职调查",
            shortDescription: "澳门企业审计中的应用",
            description: "解释在澳门企业审计需求判断中尽职调查的作用，虽澳门法律对审计的规定情况，但特定客户如银行融资客户和政府资助专案相关企业需要审计报告，尽职调查可满足此需求"
          },
          {
            title: "尽职调查与财务状况",
            shortDescription: "确保财务状况真实性",
            description: "阐述尽职调查如何确保企业财务状况的真实性，保障信息质量"
          },
          {
            title: "尽职调查与风险评估",
            shortDescription: "风险评估作用",
            description: "说明尽职调查在评估企业风险方面的重要性和方法"
          },
          {
            title: "尽职调查与决策支持",
            shortDescription: "帮助决策作用",
            description: "讲述尽职调查如何为相关方提供重要财务信息和建议，辅助做出明智决策"
          },
          {
            title: "企业并购中的尽职调查",
            shortDescription: "企业并购场景应用",
            description: "介绍在企业并购业务（如收购合并）中尽职调查的内容和意义"
          },
          {
            title: "特殊目的审计中的尽职调查",
            shortDescription: "特殊目的审计应用",
            description: "阐述在特殊目的审计中尽职调查的相关情况和作用"
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
  .due-diligence-page {
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