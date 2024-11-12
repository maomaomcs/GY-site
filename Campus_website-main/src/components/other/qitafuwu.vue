<template>
  <div class="company-opening-page">
    <h1 class="header">其他服務</h1>

    <div class="service-list">
      <!-- 新增其他服務循環展示 -->
      <div 
        v-for="(otherService, index) in otherServices" 
        :key="index" 
        class="service-card"
        @click="openOtherServiceModal(otherService)"
      >
        <img :src="otherService.icon" alt="Service Icon" class="service-icon"/>
        <h2>{{ otherService.title }}</h2>
        <p>{{ otherService.shortDescription }}</p>
      </div>
    </div>

    <!-- 新增其他服務詳情模態框 -->
    <div v-if="selectedOtherService" class="other-service-modal" @click="closeOtherServiceModal">
      <div class="other-service-modal-content" @click.stop>
        <span class="close" @click="closeOtherServiceModal">×</span>
        <h2>{{ selectedOtherService.title }}</h2>
        <p>{{ selectedOtherService.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 新增其他服務數據
      otherServices: [
        {
          title: "註冊商標",
          shortDescription: "提供商標註冊相關服務",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../img/zhuce.png" 
        },
        {
          title: "資助申請",
          shortDescription: "協助進行資助申請相關事務",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../../img/shenqing.png"
        },
        {
          title: "受資助項目查驗",
          shortDescription: "按照相關指引對受資助項目進行查驗",
          description: "根據《受助活助項目查驗指引》，對受資助項目進行查驗（如受助活動超過澳門100萬需會計師製作報告，可視為受資助項目查驗的一部分要求，確保資助資金使用合規等）。",
          icon: "../../img/chayan.png"
        },
        {
          title: "港澳車牌申請",
          shortDescription: "負責港澳車牌申請相關事宜",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../../img/chaepai.png"
        },
        {
          title: "資產管理",
          shortDescription: "提供資產管理相關服務",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../../img/qian.png"
        },
        {
          title: "股權投融資",
          shortDescription: "涵蓋在上市統籌及策劃中的股權投融資服務",
          description: "上市（IPO）統籌及策劃中涵蓋股權投融資服務，包括為企業提供股權融資渠道、協助企業進行股權結構設計、開展股權融資相關活動等，幫助企業籌集資金用於發展或擴張業務（例如在上市過程中吸引投資者投資企業股權）。",
          icon: "../../img/rongzi.png"
        },
        {
          title: "信貸支援",
          shortDescription: "提供信貸支援相關服務",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../../img/xindai.png"
        },
        {
          title: "股權包銷",
          shortDescription: "屬於上市統籌及策劃服務中的股權包銷服務",
          description: "上市（IPO）統籌及策劃服務中的一部分，在企業上市過程中，投行或相關機構承擔股權包銷責任，幫助企業銷售股票，確保企業成功上市融資（例如在路演、融資過程中，與承銷商合作完成股權包銷工作）。",
          icon: "../../img/guquan.png"
        },
        {
          title: "重大投資移民",
          shortDescription: "協助辦理重大投資移民相關事務",
          description: "更多內容請通過聯繫方式進行交流",
          icon: "../../img/yiming.png"
        }
      ],
      selectedOtherService: null
    };
  },
  methods: {
    // 新增打開其他服務詳情模態框的方法
    openOtherServiceModal(otherService) {
      this.selectedOtherService = otherService;
    },
    // 新增關閉其他服務詳情模態框的方法
    closeOtherServiceModal() {
      this.selectedOtherService = null;
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
  margin-bottom: 10px; 
}
.other-service-modal {
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

.other-service-modal-content {
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