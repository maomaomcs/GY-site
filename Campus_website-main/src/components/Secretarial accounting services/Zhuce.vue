<template>
  <div class="registration-address-page">
    <h1 class="header">注册地址相关服务</h1>
    <p class="description">
      我们提供虚拟办公室服务，满足企业在注册地址及相关业务方面的需求。
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
          title: "提供公司注册地址及联络地址",
          shortDescription: "为企业提供合法有效的公司注册地址和联络地址。",
          description: "详细说明地址的合法性、稳定性以及如何用于公司注册和日常联络。"
        },
        {
          title: "专人代收信件并寄回指定地址",
          shortDescription: "安排专人负责代收公司信件，并按要求寄回指定地点。",
          description: "包括信件代收的流程、安全保障措施以及寄回服务的细节。"
        },
        {
          title: "会议室借用",
          shortDescription: "企业可借用我们的会议室。",
          description: "介绍会议室的设施、借用规则、预约方式和使用时间限制等。"
        },
        {
          title: "提供联络电话",
          shortDescription: "为企业提供专门的联络电话服务。",
          description: "说明联络电话的使用方式、接听安排以及如何与企业业务衔接。"
        },
        {
          title: "接待政府部门稽查",
          shortDescription: "协助企业接待政府部门的稽查工作。",
          description: "阐述接待流程、准备工作以及如何配合政府部门完成稽查。"
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
.registration-address-page {
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