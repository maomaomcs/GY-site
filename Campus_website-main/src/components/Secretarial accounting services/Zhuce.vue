<template>
  <div class="virtual-office-page">
    <h1 class="header">虚拟办公室服务</h1>
    <p class="description">
      提供全面的虚拟办公室服务，助力企业在全球拓展业务
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
          title: "公司注册地址及联络地址",
          shortDescription: "提供合法的公司注册及联络地址",
          description: "我们提供合法的公司注册地址及联络地址，确保您在全球各地的运营合规",
          icon: "../../img/baobao.png"
        },
        {
          title: "专人代收信件并寄回指定地址",
          shortDescription: "专人代收信件并寄回指定地址",
          description: "为客户提供专人代收信件服务，确保信件按时转寄至指定地址",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "会议室借用及联络电话",
          shortDescription: "会议室借用、提供联络电话及接待服务",
          description: "提供会议室借用、联络电话服务，并可接待政府部门稽查",
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
