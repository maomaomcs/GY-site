<template>
  <div class="offshore-company-support-page">
    <h1 class="header">离岸公司支援（BVI、Cayman）相关服务</h1>
    <p class="description">
      以下是针对英属维尔京群岛（BVI）和开曼群岛（Cayman）离岸公司的支援服务信息
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
          title: "BVI、Cayman离岸公司开业服务概述",
          shortDescription: "了解离岸公司开业服务基本情况",
          description: "介绍针对BVI和Cayman离岸公司开业服务的意义和大致内容"
        },
        {
          title: "BVI离岸公司开业特定要求",
          shortDescription: "BVI公司开业要求",
          description: "阐述英属维尔京群岛离岸公司开业的特殊要求，虽未详细展开，但包括一些当地法律、政策相关内容"
        },
        {
          title: "Cayman离岸公司开业特定要求",
          shortDescription: "Cayman公司开业要求",
          description: "讲解开曼群岛离岸公司开业的特殊要求，如当地规定的文件、手续等"
        },
        {
          title: "BVI、Cayman离岸公司银行开户服务概述",
          shortDescription: "了解离岸公司银行开户服务",
          description: "介绍针对BVI和Cayman离岸公司银行开户服务的意义和大致流程"
        },
        {
          title: "BVI离岸公司银行开户特定流程",
          shortDescription: "BVI公司银行开户流程",
          description: "阐述英属维尔京群岛离岸公司在银行开户方面的特殊流程和注意事项"
        },
        {
          title: "Cayman离岸公司银行开户特定流程",
          shortDescription: "Cayman公司银行开户流程",
          description: "讲解开曼群岛离岸公司在银行开户方面的特殊流程和要求"
        },
        {
          title: "与一般公司开业及开户服务的区别",
          shortDescription: "区别于一般公司服务",
          description: "说明针对BVI和Cayman离岸公司的服务与一般公司开业及开户服务在要求、流程等方面的差异"
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