<template>
  <div class="virtual-office-page">
    <h1 class="header">虛擬辦公室服務</h1>
    <p class="description">
      提供全面的虛擬辦公室服務，助力企業在全球拓展業務
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
          title: "公司註冊地址及聯絡地址",
          shortDescription: "提供合法的公司註冊及聯絡地址",
          description: "我們提供合法的公司註冊地址及聯絡地址，確保您在全球各地的運營合規",
          icon: "../../img/baobao.png"
        },
        {
          title: "專人代收信件並寄回指定地址",
          shortDescription: "專人代收信件並寄回指定地址",
          description: "為客戶提供專人代收信件服務，確保信件按時轉寄至指定地址",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "會議室借用及聯絡電話",
          shortDescription: "會議室借用、提供聯絡電話及接待服務",
          description: "提供會議室借用、聯絡電話服務，並可接待政府部門稽查",
          icon: "../../img/ghfj.png"
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
.virtual-office-page {
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
