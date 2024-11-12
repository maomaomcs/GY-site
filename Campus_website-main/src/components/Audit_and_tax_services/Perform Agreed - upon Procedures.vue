<template>
  <div class="agreed-procedure-page">
    <h1 class="header">执行商定程序相关服务</h1>
    <p class="description">
      以下是执行商定程序相关信息，特别是涉及特定资助项目超限额时的报告要求
    </p>
    <div class="service-list">
      <div v-for="(service, index) in services" :key="index" class="service-card" @click="openModal(service)">
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
          title: "执行商定程序概述",
          shortDescription: "了解执行商定程序的基本情况",
          description: "介绍执行商定程序的概念、适用场景等内容"
        },
        {
          title: "超限额报告依据",
          shortDescription: "依据相关指引确定报告需求",
          description: "详细说明《受助活助项目查验指引》对执行商定程序的指导意义"
        },
        {
          title: "受助活动金额限制",
          shortDescription: "明确受助活动的金额门槛",
          description: "解释受助活动超过澳门100万时的特殊要求"
        },
        {
          title: "会计师报告制作",
          shortDescription: "由会计师制作相关报告",
          description: "阐述会计师在执行商定程序中制作报告的责任和流程"
        },
        {
          title: "各类资助情况",
          shortDescription: "涉及多种资助项目",
          description: "列举澳基金会资助、科学技术发展基金资助、文化发展基金资助、招商投资促进局资助、市政署资助、卫生局资助、教育基金资助、渔类发展及援助基金资助等不同类型资助项目的相关情况"
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
.agreed-procedure-page {
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