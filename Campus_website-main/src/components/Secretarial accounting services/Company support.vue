<template>
  <div class="offshore-company-support-page">
    <h1 class="header">离岸公司支援（BVI、Cayman）</h1>
    <p class="description">
      为英属维尔京群岛（BVI）和开曼群岛（Cayman）的离岸公司提供开业及银行开户等相关服务，这些服务在当地有特定要求和流程。
    </p>
    <div class="service-list">
      <div class="service-card">
        <h2>离岸公司开业服务</h2>
        <p>针对BVI和Cayman离岸公司的开业相关流程协助。</p>
      </div>
      <div class="service-card">
        <h2>离岸公司银行开户服务</h2>
        <p>协助BVI和Cayman离岸公司开设银行账户。</p>
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
          title: "离岸公司开业服务",
          shortDescription: "针对BVI和Cayman离岸公司的开业相关流程协助。",
          description: "虽未详细展开，但涉及当地特定要求和流程的公司开业服务。"
        },
        {
          title: "离岸公司银行开户服务",
          shortDescription: "协助BVI和Cayman离岸公司开设银行账户。",
          description: "同样有针对当地情况的特定流程，此处未详细说明。"
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
.offshore-company-support-page {
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