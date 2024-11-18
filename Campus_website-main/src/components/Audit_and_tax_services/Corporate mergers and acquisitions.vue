<template>
  <div class="ma-page">
    <h1 class="header">企業併購服務</h1>
    <p class="description">
      提供全面諮詢服務，包括估值、盡職調查、交易結構設計和談判等，確保交易成功，符合商業目標。
    </p>

    <div class="ma-grid">
      <div 
        v-for="(service, index) in maServices" 
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
      maServices: [
        {
          title: "企業估值",
          shortDescription: "對企業價值進行全面評估，支持交易決策。",
          description: "通過市場分析、財務分析等方法，全面評估目標企業的市場價值和潛在風險，幫助決策者做出明智的併購決策。",
          icon: "../../img/Agreement.png" // Replace with appropriate icon
        },
        {
          title: "盡職調查",
          shortDescription: "確保企業財務、法律合規。",
          description: "通過審查目標公司的財務狀況、運營情況和法律合規性，評估潛在的風險與回報，確保交易的透明度和可靠性。",
          icon: "../../img/Business analytics.png" // Replace with appropriate icon
        },
        {
          title: "交易結構設計",
          shortDescription: "設計最佳的併購交易結構。",
          description: "根據企業的商業目標與市場環境，設計合適的交易結構，最大化合並的協同效應，優化稅務和財務影響。",
          icon: "../../img/baobao.png" // Replace with appropriate icon
        },
        {
          title: "談判策略",
          shortDescription: "幫助企業制定有效的談判策略。",
          description: "提供談判策略指導，確保交易條款符合企業目標，幫助實現最佳交易結果。",
          icon: "../../img/Business solutions .png" // Replace with appropriate icon
        },
        {
          title: "併購整合",
          shortDescription: "整合資源，確保交易後順利過渡。",
          description: "通過併購後整合流程，幫助企業有效整合資源，實現協同效應和持續增長。",
          icon: "../../img/sheji.png" // Replace with appropriate icon
        },
        {
          title: "融資支持",
          shortDescription: "為併購提供融資解決方案。",
          description: "根據併購需求，提供融資支持方案，幫助企業在資金結構和融資途徑上做出最佳選擇。",
          icon: "../../img/qiyue.png" // Replace with appropriate icon
        },
        {
          title: "法律支持",
          shortDescription: "提供併購過程中法律諮詢。",
          description: "提供併購過程中的法律支持，確保所有合同、條款和法律程序符合相關法規要求。",
          icon: "../../img/huoban.png" // Replace with appropriate icon
        },
        {
          title: "稅務優化",
          shortDescription: "優化稅務結構，最大化併購效益。",
          description: "幫助企業在併購過程中進行稅務規劃與優化，確保交易的稅務效率，降低不必要的稅務負擔。",
          icon: "../../img/ghfj.png" // Replace with appropriate icon
        },
        {
          title: "併購風險管理",
          shortDescription: "評估併購風險，提供風險管理方案。",
          description: "幫助企業識別併購過程中可能的風險因素，提供全面的風險管理方案，確保併購過程的順利進行。",
          icon: "../../img/Insurance.png" // Replace with appropriate icon
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
.ma-page {
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

/* Add a bounce effect to the image */
.ma-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.ma-card:hover .ma-icon {
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

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .ma-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }

  .ma-card {
    padding: 15px; /* Smaller padding for cards */
  }

  .header {
    font-size: 2em;
  }

  .description {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .ma-grid {
    grid-template-columns: 1fr; /* 1 column on very small screens */
  }

  .header {
    font-size: 1.8em;
  }

  .description {
    font-size: 0.9em;
  }
}


</style>
