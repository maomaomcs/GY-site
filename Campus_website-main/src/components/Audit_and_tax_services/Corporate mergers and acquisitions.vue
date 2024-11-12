<template>
    <div class="enterprise-merger-acquisition-page">
      <h1 class="header">企业并购相关服务</h1>
      <p class="description">
        以下是企业并购相关的各项专业服务介绍，助力企业完成成功并购
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
            title: "企业并购咨询服务概述",
            shortDescription: "了解企业并购咨询服务内容",
            description: "介绍企业并购咨询服务涵盖的范围和重要性"
          },
          {
            title: "企业并购估值服务",
            shortDescription: "对并购企业进行估值",
            description: "详细阐述如何在企业并购中运用专业方法进行估值，为交易提供价值参考"
          },
          {
            title: "企业并购尽职调查服务",
            shortDescription: "为并购开展尽职调查",
            description: "说明在企业并购过程中尽职调查的具体内容和流程，降低交易风险"
          },
          {
            title: "企业并购交易结构设计",
            shortDescription: "设计合理交易结构",
            description: "讲解如何根据企业情况和并购目标设计合适的交易结构，保障交易顺利进行"
          },
          {
            title: "企业并购谈判协助",
            shortDescription: "协助企业进行并购谈判",
            description: "介绍在并购谈判中为企业提供的支持和策略，争取有利条件"
          },
          {
            title: "确保并购交易成功",
            shortDescription: "保障并购交易达成",
            description: "阐述确保并购交易成功的关键因素和措施"
          },
          {
            title: "符合商业目标的并购",
            shortDescription: "使并购符合商业战略",
            description: "说明如何保证并购活动符合企业商业目标和长期战略"
          },
          {
            title: "成功并购策略获取",
            shortDescription: "制定成功并购策略",
            description: "讲述如何帮助企业获得适合自身的成功并购策略"
          },
          {
            title: "最佳交易结果实现",
            shortDescription: "达成最佳交易成果",
            description: "介绍如何通过各项服务实现企业并购的最佳交易结果"
          },
          {
            title: "合并协同效应最大化",
            shortDescription: "提升合并协同效益",
            description: "阐述如何在并购后最大化合并的协同效应，实现企业价值提升"
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
  .enterprise-merger-acquisition-page {
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