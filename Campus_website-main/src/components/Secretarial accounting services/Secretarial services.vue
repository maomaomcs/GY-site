<template>
  <div class="company-secretary-services-page">
    <h1 class="header">公司秘書及授權代表服務</h1>
    <p class="description">
      提供全面的公司秘書服務，幫助企業合規運營，助力企業發展
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
          title: "撰寫ESG報告",
          shortDescription: "為上市企業撰寫ESG報告",
          description: "幫助企業編制符合國際標準的環境、社會及治理(ESG)報告，助力企業可持續發展",
          icon: "../../img/sheji.png"
        },
        {
          title: "擔任公司秘書",
          shortDescription: "提供公司秘書服務",
          description: "為企業提供專業的公司秘書服務，包括日常管理及合規諮詢",
          icon: "../../img/qiyue.png"
        },
        {
          title: "擔任授權代表",
          shortDescription: "擔任企業授權代表",
          description: "為企業擔任授權代表，處理與政府機關的相關事務",
          icon: "../../img/Insurance.png"
        },
        {
          title: "安排董事和股東會議",
          shortDescription: "安排董事和股東會議",
          description: "組織並安排公司董事會及股東大會的會議，確保合規並記錄會議內容",
          icon: "../../img/ghfj.png"
        },
        {
          title: "更新公司登記資料",
          shortDescription: "更新公司章程及登記資料",
          description: "更新公司章程、登記資料，包括增資、營業範圍變更、管理層變動等",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "法定文件提交",
          shortDescription: "準備及提交法定文件",
          description: "為企業準備及提交年度申報表、商業登記及其它法定文件",
          icon: "../../img/Business solutions.png"
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
.company-secretary-services-page {
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
