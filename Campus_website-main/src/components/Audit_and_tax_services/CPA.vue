<template>
    <div class="forensic-accounting-page">
    <h1 class="header">鑑證會計相關服務</h1>
    <p class="description">
    以下是鑑證會計相關信息，包括其概念、與其他業務的關聯等
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
    title: "鑑證會計概述",
    shortDescription: "瞭解鑑證會計基本概念",
    description: "介紹鑑證會計是什麼，以及它在財務領域的重要性",icon: "../../img/Business analytics.png"
    },
    {
    title: "鑑證會計與審計關係",
    shortDescription: "明確與審計業務聯繫",
    description: "闡述鑑證會計和審計之間的關聯，它們如何相互影響",icon: "../../img/passive income.png"
    },
    {
    title: "鑑證會計與會計業務關係",
    shortDescription: "明確與會計業務聯繫",
    description: "解釋鑑證會計和一般會計業務之間的聯繫",icon: "../../img/huoban.png"
    },
    {
    title: "鑑證功能體現",
    shortDescription: "瞭解鑑證功能的體現",
    description: "說明鑑證會計如何確保財務信息的真實性和可靠性",icon: "../../img/Agreement.png"
    },
    {
    title: "在法定審計中的作用",
    shortDescription: "法定審計中的鑑證",
    description: "講述鑑證會計在法定審計中所承擔的角色和發揮的作用",icon: "../../img/Files and folders.png"
    },
    {
    title: "在其他審計服務中的作用",
    shortDescription: "其他審計服務中的鑑證",
    description: "介紹鑑證會計在除法定審計外的其他審計服務中的作用",icon: "../../img/Insurance.png"
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
