<template>
  <div class="company-registration-page">
    <h1 class="header">一站式企業秘書服務</h1>
    <p class="description">
      爲了讓企業能夠專注於核心業務，我們提供一站式多元化的秘書服務，從公司成立到日常行政管理，全方位支持企業展需求。
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
          title: '公司增資', 
          shortDescription: '協助公司增資的流程及所需文件', 
          description: '詳細描述公司增資的具體流程和注意事項。' 
        },
        { 
          title: '增加營業範圍', 
          shortDescription: '幫助擴大業務範圍的申請', 
          description: '詳細描述如何增加公司的營業範圍，包括所需的法律文件。' 
        },
        { 
          title: '更换管理層成員', 
          shortDescription: '協助更换公司的管理層', 
          description: '提供更换管理層的必要流程和文件。' 
        },
        { 
          title: '更改公司地址', 
          shortDescription: '辦理公司地址變更手續', 
          description: '描述如何更改公司地址及所需的申請。' 
        },
        { 
          title: '更改公司名稱及商號', 
          shortDescription: '協助公司名稱及商號的變更', 
          description: '提供更改公司名稱及商號的流程。' 
        },
        { 
          title: '股權轉讓', 
          shortDescription: '協助股權轉讓的流程及文件', 
          description: '詳細說明股權轉讓的步驟和法律要求。' 
        },
        { 
          title: '公司註銷', 
          shortDescription: '協助公司註銷及暫停業務的申請', 
          description: '描述如何處理公司的註銷及相關事宜。' 
        },
        { 
          title: '開設銀行賬戶', 
          shortDescription: '協助開設公司銀行賬戶', 
          description: '提供開設銀行賬戶所需的文件和流程。' 
        },
        { 
          title: '法定文件準備', 
          shortDescription: '預備及提交法定文件', 
          description: '說明如何準備和提交周年申報表及商業登記。' 
        },
      ],
      selectedService: null,
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
.company-registration-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
