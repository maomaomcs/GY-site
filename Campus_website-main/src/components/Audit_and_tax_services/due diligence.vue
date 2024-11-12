<template>
  <div class="due-diligence-page">
    <h1 class="header">盡職調查服務</h1>
    <p class="description">
      提供全面的盡職調查服務，幫助企業確保財務狀況的真實性、評估風險並做出明智決策。
    </p>

    <div class="ma-grid">
      <div 
        v-for="(service, index) in dueDiligenceServices" 
        :key="index" 
        class="ma-card"
        @click="openModal(service)"
      >
        <img :src="service.icon" alt="Service Icon" class="ma-icon"/>
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
      dueDiligenceServices: [
        {
          title: "審計需求",
          shortDescription: "銀行和政府資助項目對特定類型客戶要求審計報告。",
          description: "儘管澳門法律並未強制所有公司進行審計，但銀行對融資客戶及政府資助項目有審計報告的要求。通過盡職調查，確保所有交易符合財務規範。",
          icon: "../../img/sheji.png" // Replace with appropriate icon
        },
        {
          title: "財務狀況真實性",
          shortDescription: "確保企業財務狀況真實可信。",
          description: "盡職調查可確保企業的財務狀況真實可信，避免潛在的財務風險，幫助決策者做出明智的決策。",
          icon: "../../img/qiyue.png" // Replace with appropriate icon
        },
        {
          title: "風險評估",
          shortDescription: "評估企業運營的潛在風險。",
          description: "盡職調查評估企業的財務狀況、運營情況和法律合規性，幫助識別潛在的風險因素並做出合適決策。",
          icon: "../../img/qiye.png" // Replace with appropriate icon
        },
        {
          title: "重要財務信息",
          shortDescription: "提供關鍵財務數據，支持決策。",
          description: "盡職調查可為相關方提供關鍵財務信息和建議，幫助做出有關企業併購、融資等重大決策。",
          icon: "../../img/passive income.png" // Replace with appropriate icon
        },
        {
          title: "併購相關盡職調查",
          shortDescription: "併購業務中的重要環節。",
          description: "在企業併購過程中，盡職調查確保交易透明、無隱患，涉及收購合併及特殊目的審計等服務。",
          icon: "../../img/Agreement.png" // Replace with appropriate icon
        },
        {
          title: "特殊目的審計",
          shortDescription: "為特殊審計目的提供支持。",
          description: "在特定審計任務中（如併購、融資等），進行盡職調查以確保目標公司無潛在風險，提供透明度和安全保障。",
          icon: "../../img/Business analytics.png" // Replace with appropriate icon
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
.due-diligence-page {
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

.ma-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  margin: 0 20px;
}

.ma-card {
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

.ma-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.ma-icon {
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
