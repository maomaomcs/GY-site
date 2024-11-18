<template>
  <div class="bank-account-opening-page">
    <h1 class="header">銀行開戶服務</h1>
    <p class="description">
      提供多種香港銀行開戶方式，確保企業順利開戶。
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
          title: "親臨開戶",
          shortDescription: "公司董事親臨香港銀行開戶",
          description: "當天完成簽名文件，預計20個工作日完成開戶。",
          icon: "../../img/Agreement.png"
        },
        {
          title: "視頻開戶",
          shortDescription: "公司董事親臨香港銀行分行見證開戶",
          description: "約需30個工作日，過程通過視頻見證完成。",
          icon: "../../img/qiyue.png"
        },
        {
          title: "律師公證開戶",
          shortDescription: "通過兩地律師公證開戶",
          description: "由律師公證文件，再由律師代表到銀行開戶。",
          icon: "../../img/Stocks and brokerages .png"
        },
        {
          title: "遞交開戶申請",
          shortDescription: "遞交開戶申請",
          description: "提供公司文件並提交申請。",
          icon: "../../img/sheji.png"
        },
        {
          title: "銀行審批",
          shortDescription: "銀行盡職調查",
          description: "銀行進行審批並核實公司信息。",
          icon: "../../img/qiyue.png"
        },
        {
          title: "確認網上理財密碼",
          shortDescription: "確認網上銀行服務",
          description: "激活網上理財密碼，並完成首次登錄及領取銀行卡。",
          icon: "../../img/passive income.png"
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
.bank-account-opening-page {
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
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加box-shadow过渡效果 */
  position: relative;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 50px; /* Adjust size */
  height: 50px; /* Adjust size */
  margin-bottom: 10px; /* Space between icon and text */
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
