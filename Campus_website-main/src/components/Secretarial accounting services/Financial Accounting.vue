<template>
  <div class="financial-accounting-page">
    <h1 class="header">財務會計服務</h1>
    <p class="description">
      提供全面的財務會計服務，助力企業規範財務管理，提升運營效率。
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
          title: "賬目整理",
          shortDescription: "專業的賬目整理服務",
          description: "幫助企業整理賬目，確保財務數據準確無誤。",
          icon: "../../img/Stocks and brokerages .png"
        },
        {
          title: "財務報表編制",
          shortDescription: "編制財務報表",
          description: "為企業編制符合國際標準的財務報表，確保合規。",
          icon: "../../img/ghfj.png"
        },
        {
          title: "存貨管理",
          shortDescription: "有效管理存貨",
          description: "通過精細化管理，幫助企業優化存貨，提升運營效率。",
          icon: "../../img/passive income.png"
        },
        {
          title: "成本管理",
          shortDescription: "優化成本管理",
          description: "協助企業進行成本控制，提升整體財務表現。",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "代理記賬",
          shortDescription: "提供代理記賬服務",
          description: "為企業提供高效、合規的代理記賬服務，確保財務透明。",
          icon: "../../img/sheji.png"
        },
        {
          title: "會計制度設立",
          shortDescription: "設立會計制度",
          description: "根據企業需求，幫助企業設立完善的會計制度。",
          icon: "../../img/Business solutions .png"
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
.financial-accounting-page {
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
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
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
  width: 50px; /* Adjust size */
  height: 50px; /* Adjust size */
  margin-bottom: 10px; /* Space between icon and text */
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
