<template>
  <div class="offshore-company-support-page">
    <h1 class="header">離岸公司支援（BVI、Cayman）相關服務</h1>
    <p class="description">
      以下是針對英屬維爾京群島（BVI）和開曼群島（Cayman）離岸公司的支援服務信息
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
          title: "BVI、Cayman離岸公司開業服務概述",
          shortDescription: "瞭解離岸公司開業服務基本情況",
          description: "介紹針對BVI和Cayman離岸公司開業服務的意義和大致內容",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "BVI離岸公司開業特定要求",
          shortDescription: "BVI公司開業要求",
          description: "闡述英屬維爾京群島離岸公司開業的特殊要求，雖未詳細展開，但包括一些當地法律、政策相關內容",
          icon: "../../img/Agreement.png"
        },
        {
          title: "Cayman離岸公司開業特定要求",
          shortDescription: "Cayman公司開業要求",
          description: "講解開曼群島離岸公司開業的特殊要求，如當地規定的文件、手續等",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "BVI、Cayman離岸公司銀行開戶服務概述",
          shortDescription: "瞭解離岸公司銀行開戶服務",
          description: "介紹針對BVI和Cayman離岸公司銀行開戶服務的意義和大致流程",
          icon: "../../img/passive income.png"
        },
        {
          title: "BVI離岸公司銀行開戶特定流程",
          shortDescription: "BVI公司銀行開戶流程",
          description: "闡述英屬維爾京群島離岸公司在銀行開戶方面的特殊流程和注意事項",
          icon: "../../img/qiye.png"
        },
        {
          title: "Cayman離岸公司銀行開戶特定流程",
          shortDescription: "Cayman公司銀行開戶流程",
          description: "講解開曼群島離岸公司在銀行開戶方面的特殊流程和要求",
          icon: "../../img/Insurance.png"
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
.offshore-company-support-page {
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
  width: 50px; /* 根據需要調整大小 */
  height: 50px; /* 根據需要調整大小 */
  margin-bottom: 10px; /* 添加一些間距 */
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