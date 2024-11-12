<template>
    <div class="forensic-accounting-page">
    <h1 class="header">鉴证会计相关服务</h1>
    <p class="description">
    以下是鉴证会计相关信息，包括其概念、与其他业务的关联等
    </p>
    <div class="service-list">
    <div
    v-for="(service, index) in services"
    :key="index"
    class="service-card"
    @click="openModal(service)"
    >
    <img :src="audit.icon" alt="Audit Icon" class="audit-icon"/>
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
    title: "鉴证会计概述",
    shortDescription: "了解鉴证会计基本概念",
    description: "介绍鉴证会计是什么，以及它在财务领域的重要性",icon: "../../img/Business analytics.png"
    },
    {
    title: "鉴证会计与审计关系",
    shortDescription: "明确与审计业务联系",
    description: "阐述鉴证会计和审计之间的关联，它们如何相互影响",icon: "../../img/passive income.png"
    },
    {
    title: "鉴证会计与会计业务关系",
    shortDescription: "明确与会计业务联系",
    description: "解释鉴证会计和一般会计业务之间的联系",icon: "../../img/huoban.png"
    },
    {
    title: "鉴证功能体现",
    shortDescription: "了解鉴证功能的体现",
    description: "说明鉴证会计如何确保财务信息的真实性和可靠性",icon: "../../img/Agreement.png"
    },
    {
    title: "在法定审计中的作用",
    shortDescription: "法定审计中的鉴证",
    description: "讲述鉴证会计在法定审计中所承担的角色和发挥的作用",icon: "../../img/Files and folders.png"
    },
    {
    title: "在其他审计服务中的作用",
    shortDescription: "其他审计服务中的鉴证",
    description: "介绍鉴证会计在除法定审计外的其他审计服务中的作用",icon: "../../img/Insurance.png"
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
    .forensic-accounting-page {
      max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
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

.audit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  margin: 0 20px;
}

.audit-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.audit-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.audit-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.8em;
  cursor: pointer;
  color: #ff7675;
}

.close:hover {
  color: #d63031;
}
</style>
