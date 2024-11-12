<template>
  <div class="ma-page">
    <h1 class="header">企业并购服务</h1>
    <p class="description">
      提供全面咨询服务，包括估值、尽职调查、交易结构设计和谈判等，确保交易成功，符合商业目标。
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
          title: "企业估值",
          shortDescription: "对企业价值进行全面评估，支持交易决策。",
          description: "通过市场分析、财务分析等方法，全面评估目标企业的市场价值和潜在风险，帮助决策者做出明智的并购决策。",
          icon: "../../img/valuation.png" // Replace with appropriate icon
        },
        {
          title: "尽职调查",
          shortDescription: "确保企业财务、法律合规。",
          description: "通过审查目标公司的财务状况、运营情况和法律合规性，评估潜在的风险与回报，确保交易的透明度和可靠性。",
          icon: "../../img/due-diligence.png" // Replace with appropriate icon
        },
        {
          title: "交易结构设计",
          shortDescription: "设计最佳的并购交易结构。",
          description: "根据企业的商业目标与市场环境，设计合适的交易结构，最大化合并的协同效应，优化税务和财务影响。",
          icon: "../../img/transaction-structure.png" // Replace with appropriate icon
        },
        {
          title: "谈判策略",
          shortDescription: "帮助企业制定有效的谈判策略。",
          description: "提供谈判策略指导，确保交易条款符合企业目标，帮助实现最佳交易结果。",
          icon: "../../img/negotiation.png" // Replace with appropriate icon
        },
        {
          title: "并购整合",
          shortDescription: "整合资源，确保交易后顺利过渡。",
          description: "通过并购后整合流程，帮助企业有效整合资源，实现协同效应和持续增长。",
          icon: "../../img/integration.png" // Replace with appropriate icon
        },
        {
          title: "融资支持",
          shortDescription: "为并购提供融资解决方案。",
          description: "根据并购需求，提供融资支持方案，帮助企业在资金结构和融资途径上做出最佳选择。",
          icon: "../../img/financing.png" // Replace with appropriate icon
        },
        {
          title: "法律支持",
          shortDescription: "提供并购过程中法律咨询。",
          description: "提供并购过程中的法律支持，确保所有合同、条款和法律程序符合相关法规要求。",
          icon: "../../img/legal-support.png" // Replace with appropriate icon
        },
        {
          title: "税务优化",
          shortDescription: "优化税务结构，最大化并购效益。",
          description: "帮助企业在并购过程中进行税务规划与优化，确保交易的税务效率，降低不必要的税务负担。",
          icon: "../../img/tax-optimization.png" // Replace with appropriate icon
        },
        {
          title: "并购风险管理",
          shortDescription: "评估并购风险，提供风险管理方案。",
          description: "帮助企业识别并购过程中可能的风险因素，提供全面的风险管理方案，确保并购过程的顺利进行。",
          icon: "../../img/risk-management.png" // Replace with appropriate icon
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
  grid-template-columns: repeat(3, 1fr);
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
