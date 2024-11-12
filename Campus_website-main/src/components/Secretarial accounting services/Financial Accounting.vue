<template>
  <div class="financial-accounting-page">
    <h1 class="header">财务会计服务</h1>
    <p class="description">
      提供全面的财务会计服务，助力企业规范财务管理，提升运营效率。
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
          title: "账目整理",
          shortDescription: "专业的账目整理服务",
          description: "帮助企业整理账目，确保财务数据准确无误。",
          icon: "../../img/Stocks and brokerages .png"
        },
        {
          title: "财务报表编制",
          shortDescription: "编制财务报表",
          description: "为企业编制符合国际标准的财务报表，确保合规。",
          icon: "../../img/ghfj.png"
        },
        {
          title: "存货管理",
          shortDescription: "有效管理存货",
          description: "通过精细化管理，帮助企业优化存货，提升运营效率。",
          icon: "../../img/passive income.png"
        },
        {
          title: "成本管理",
          shortDescription: "优化成本管理",
          description: "协助企业进行成本控制，提升整体财务表现。",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "代理记账",
          shortDescription: "提供代理记账服务",
          description: "为企业提供高效、合规的代理记账服务，确保财务透明。",
          icon: "../../img/sheji.png"
        },
        {
          title: "会计制度设立",
          shortDescription: "设立会计制度",
          description: "根据企业需求，帮助企业设立完善的会计制度。",
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
