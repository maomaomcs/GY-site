<template>
    <div class="macau-subsidiary-audit-page">
      <h1 class="header">澳門子公司審計相關服務</h1>
      <p class="description">
        以下是澳門子公司審計相關信息，包括其與其他審計服務的關聯及可能涉及的審計內容
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
                title: "澳門子公司審計概述",
                shortDescription: "瞭解澳門子公司審計基本概念",
                description: "介紹澳門子公司審計在企業管理中的意義和作用",
                icon: "../../img/Insurance.png"
            },
            {
                title: "澳門子公司審計與法定審計關係",
                shortDescription: "明確與法定審計關聯",
                description: "闡述澳門子公司審計和法定審計等相關審計服務要求的聯繫",
                icon: "../../img/qiyue.png"
            },
            {
                title: "澳門子公司財務報表審計",
                shortDescription: "財務報表審計內容",
                description: "詳細介紹對澳門子公司財務報表審計的目標、流程和重要性",
                icon: "../../img/baobao.png"
            },
            {
                title: "澳門子公司內部控制審計",
                shortDescription: "內部控制審計內容",
                description: "說明對澳門子公司內部控制審計的重點、方法和意義",
                icon: "../../img/Stocks and brokerages.png"
            },
            {
                title: "確保財務信息準確性",
                shortDescription: "財務信息質量保障",
                description: "闡述澳門子公司審計如何確保子公司財務信息的準確性",
                icon: "../../img/huoban.png"
            },
            {
                title: "確保財務信息合規性",
                shortDescription: "財務信息合規保障",
                description: "解釋澳門子公司審計在保障子公司財務信息合規性方面的措施",
                icon: "../../img/passive income.png"
            },
            {
                title: "物業管理收支報告審計",
                shortDescription: "物業管理收支審計",
                description: "以物業管理收支報告審計為例，介紹其作為子公司審計部分內容的情況",
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