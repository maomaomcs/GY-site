<template>
  <div class="compensation-management-page">
    <h1 class="header">薪酬管理相關服務</h1>
    <p class="description">
      依據澳門法律，以下是僱主在薪酬管理方面需要履行的責任和相關操作
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
          title: "僱員入職及離職登記申報",
          shortDescription: "按照澳門法律，為僱員申報入職及離職信息",
          description: "詳細介紹申報的途徑、所需材料以及申報的時間要求等",icon: "../../img/huoban.png"
        },
        {
          title: "員工薪金等財務信息申報",
          shortDescription: "申報員工薪金等相關財務數據",
          description: "包括薪金信息的具體內容、申報格式以及與財務系統的對接等內容",icon: "../../img/passive income.png"
        },
        {
          title: "提供糧單",
          shortDescription: "為員工提供糧單",
          description: "闡述糧單的內容、格式、發放週期以及保存要求等", icon: "../../img/Agreement.png"
        },
        {
          title: "申報職業稅",
          shortDescription: "負責申報職業稅相關事宜",
          description: "說明職業稅的計算方法、申報時間、申報表格填寫等細節",icon: "../../img/Business analytics.png"
        },
        {
          title: "按季度提交社會保障基金費用",
          shortDescription: "按季度向相關部門提交社會保障基金費用",
          description: "包括費用計算依據、提交方式和逾期處理等情況",icon: "../../img/Business solutions .png"
        },
        {
          title: "提交僱主年度申報表（M3/M4）",
          shortDescription: "提交僱主年度申報表M3/M4",
          description: "詳細講解M3/M4申報表的填寫內容、提交時間和審核要點等",icon: "../../img/Insurance.png"
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
.compensation-management-page {
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
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
.service-icon {
  width: 50px; /* 根據需要調整大小 */
  height: 50px; /* 根據需要調整大小 */
  margin-bottom: 10px; /* 添加一些間距 */
  transition: transform 0.3s ease;
}
.service-card:hover .service-icon {
  animation: bounce 0.6s ease-in-out; /* Apply bounce animation */
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px); /* Bounce up */
  }
  50% {
    transform: translateY(0); /* Back to original position */
  }
  70% {
    transform: translateY(-5px); /* Smaller bounce up */
  }
  100% {
    transform: translateY(0); /* Back to original position */
  }
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