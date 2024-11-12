<template>
  <div class="company-opening-page">
    <h1 class="header">公司開業相關服務</h1>
    <p class="description">
      以下是公司開業所需辦理的各項事務以及相關地區的適用情況等信息
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
          title: "公司名稱許可申請",
          shortDescription: "辦理公司名稱的許可申請流程相關服務",
          description: "詳細介紹公司名稱許可申請的具體步驟、所需材料以及注意事項等",
          icon: "../../img/Agreement.png"
        },
        {
          title: "開業申請",
          shortDescription: "協助完成公司開業申請的各項事宜",
          description: "包括開業申請的填寫規範、提交渠道以及審核流程等內容的詳細說明",
<<<<<<< HEAD
          icon: "../../img/baobao.png"
=======
          icon: "../../img/公文包.png"
>>>>>>> 435ff47d4b91c57cd1129b7f600fca0c6de9b14e
        },
        {
          title: "法律公證文件準備",
          shortDescription: "負責準備公司開業所需的各類法律公證文件",
          description: "明確各類法律公證文件的具體要求、辦理地點以及辦理時長等情況",
<<<<<<< HEAD
          icon: "../../img/huoban.png"
        },
        {
          title: "公司章程撰寫與遞交",
          shortDescription: "撰寫符合要求的公司章程，包括对股东架构相关内容的确定，并完成递交工作",
          description: "闡述公司章程撰寫的規範格式、內容要點以及遞交的相關部門和流程，同时涉及股东身份核实、股权比例确定等股东架构方面内容",
=======
          icon: "../../img/合夥夥伴.png"
        },
        {
          title: "公司章程撰寫與遞交",
          shortDescription: "撰寫符合要求的公司章程並完成遞交工作",
          description: "闡述公司章程撰寫的規範格式、內容要點以及遞交的相關部門和流程",
>>>>>>> 435ff47d4b91c57cd1129b7f600fca0c6de9b14e
          icon: "../../img/passive income.png"
        },
        {
          title: "公司印章及銀行印章辦理",
          shortDescription: "辦理公司及銀行相關印章的製作等事宜",
          description: "說明公司印章和銀行印章辦理的流程、所需材料以及印章的使用規範等",
<<<<<<< HEAD
          icon: "../../img/qiye.png"
=======
          icon: "../../img/Stocks and brokerages .png"
        },
        {
          title: "股東架構確認",
          shortDescription: "對公司股東架構進行確認與梳理",
          description: "講解如何準確確認股東架構，包括股東身份核實、股權比例確定等方面",
          icon: "../../img/Insurance.png"
>>>>>>> 435ff47d4b91c57cd1129b7f600fca0c6de9b14e
        },
        {
          title: "刊登政府公告",
          shortDescription: "按照規定完成在政府相關平臺刊登公告的操作",
          description: "具體說明刊登政府公告的平臺選擇、公告內容要求以及發佈時間等規定",
<<<<<<< HEAD
          icon: "../../img/qiyue.png"
=======
          icon: "../../img/Business solutions .png"
>>>>>>> 435ff47d4b91c57cd1129b7f600fca0c6de9b14e
        },
        {
          title: "法定記錄冊管理",
          shortDescription: "負責公司法定記錄冊的管理維護工作",
          description: "涵蓋法定記錄冊應記錄的內容、更新頻率以及保管要求等內容",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "申領開業文件及證明",
          shortDescription: "幫助申領公司開業所需的各類文件及證明",
          description: "詳細列出開業文件及證明的種類、申領地點、所需材料以及申領流程等",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "開立多幣種戶口",
          shortDescription: "協助公司開立多幣種的銀行戶口",
          description: "介紹開立多幣種戶口的銀行選擇、開戶流程、所需文件以及相關注意事項等",
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
.company-opening-page {
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