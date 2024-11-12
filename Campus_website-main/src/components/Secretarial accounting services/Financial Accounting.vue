<template>
  <div class="financial-accounting-page">
    <h1 class="header">财务会计相关服务</h1>
    <p class="description">
      我们提供全面专业的财务会计服务，助力企业财务管理
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
          shortDescription: "对企业账目进行系统整理",
          description: "详细介绍账目整理的方法、流程，确保账目清晰准确",
          icon: "../../img/Agreement.png"
        },
        {
          title: "编制财报",
          shortDescription: "编制企业财务报告",
          description: "包括财报的种类、编制依据、格式规范和时间要求等内容",
          icon: "../../img/baobao.png"
        },
        {
          title: "存货管理",
          shortDescription: "协助企业进行存货管理",
          description: "涉及存货盘点、计价方法、出入库管理等相关流程",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "成本管理",
          shortDescription: "帮助企业进行成本控制和管理",
          description: "分析成本构成、成本核算方法和成本控制策略",
          icon: "../../img/Business solutions.png"
        },
        {
          title: "代理记账",
          shortDescription: "为企业提供代理记账服务",
          description: "阐述代理记账的范围、责任和优势",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "设置会计制度",
          shortDescription: "根据企业特点设置合理的会计制度",
          description: "包括会计科目设置、账务处理程序等方面",
          icon: "../../img/Insurance.png"
        },
        {
          title: "财务报表编制",
          shortDescription: "编制各类财务报表",
          description: "详细说明资产负债表、利润表、现金流量表等编制要点",
          icon: "../../img/passive income.png"
        },
        {
          title: "协助建立内部会计稽核制度",
          shortDescription: "帮助企业建立内部会计稽核机制",
          description: "明确稽核的内容、方法和频率，保障财务信息质量",
          icon: "../../img/qiye.png"
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
  width: 50px; /* 根据需要调整大小 */
  height: 50px; /* 根据需要调整大小 */
  margin-bottom: 10px; /* 添加一些间距 */
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