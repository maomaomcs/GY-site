<template>
  <div class="due-diligence-page">
    <h1 class="header">尽职调查服务</h1>
    <p class="description">
      提供全面的尽职调查服务，帮助企业确保财务状况的真实性、评估风险并做出明智决策。
    </p>

    <div class="ma-grid">
      <div 
        v-for="(service, index) in dueDiligenceServices" 
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
      dueDiligenceServices: [
        {
          title: "审计需求",
          shortDescription: "银行和政府资助项目对特定类型客户要求审计报告。",
          description: "尽管澳门法律并未强制所有公司进行审计，但银行对融资客户及政府资助项目有审计报告的要求。通过尽职调查，确保所有交易符合财务规范。",
          icon: "../../img/sheji.png" // Replace with appropriate icon
        },
        {
          title: "财务状况真实性",
          shortDescription: "确保企业财务状况真实可信。",
          description: "尽职调查可确保企业的财务状况真实可信，避免潜在的财务风险，帮助决策者做出明智的决策。",
          icon: "../../img/qiyue.png" // Replace with appropriate icon
        },
        {
          title: "风险评估",
          shortDescription: "评估企业运营的潜在风险。",
          description: "尽职调查评估企业的财务状况、运营情况和法律合规性，帮助识别潜在的风险因素并做出合适决策。",
          icon: "../../img/qiye.png" // Replace with appropriate icon
        },
        {
          title: "重要财务信息",
          shortDescription: "提供关键财务数据，支持决策。",
          description: "尽职调查可为相关方提供关键财务信息和建议，帮助做出有关企业并购、融资等重大决策。",
          icon: "../../img/passive income.png" // Replace with appropriate icon
        },
        {
          title: "并购相关尽职调查",
          shortDescription: "并购业务中的重要环节。",
          description: "在企业并购过程中，尽职调查确保交易透明、无隐患，涉及收购合并及特殊目的审计等服务。",
          icon: "../../img/Agreement.png" // Replace with appropriate icon
        },
        {
          title: "特殊目的审计",
          shortDescription: "为特殊审计目的提供支持。",
          description: "在特定审计任务中（如并购、融资等），进行尽职调查以确保目标公司无潜在风险，提供透明度和安全保障。",
          icon: "../../img/Business analytics.png" // Replace with appropriate icon
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
.due-diligence-page {
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

.ma-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
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
</style>
