<template>
  <div class="statutory-audit-page">
    <h1 class="header">法定审计相关服务</h1>
    <p class="description">
      以下是法定审计相关信息，包括所需资料和审计流程等内容
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
          title: "法定审计资料 - 财务报表",
          shortDescription: "了解审计所需财务报表",
          description: "详细介绍审计年度财务报表，包括利润表、资产负债表及现金流量表在法定审计中的作用和要求"
        },
        {
          title: "法定审计资料 - 会计账目",
          shortDescription: "明确会计账目资料要求",
          description: "阐述当年会计账目（如银行对账单、合同、费用支出发票及单据等）在法定审计中的重要性和具体内容"
        },
        {
          title: "法定审计资料 - 关联信息",
          shortDescription: "掌握关联公司和人士资料",
          description: "说明关联公司名单及涉及的关联人士等资料在法定审计中的意义和用途"
        },
        {
          title: "法定审计流程 - 方案拟定",
          shortDescription: "审计方案的制定",
          description: "解释拟定审计方案在法定审计流程中的首要步骤和关键要点"
        },
        {
          title: "法定审计流程 - 内部控制评价",
          shortDescription: "评价企业内部控制",
          description: "讲述了解企业内部控制制度并评价在法定审计流程中的重要性和实施方法"
        },
        {
          title: "法定审计流程 - 资料收集",
          shortDescription: "资料的收集与记录",
          description: "说明收集及记录或复制相关资料在法定审计流程中的作用和操作细节"
        },
        {
          title: "法定审计流程 - 符合性测试",
          shortDescription: "符合性测试环节",
          description: "阐述进行符合性测试及结果评价在法定审计流程中的内容和意义"
        },
        {
          title: "法定审计流程 - 实质性控制",
          shortDescription: "实质性控制环节",
          description: "讲解实质性控制及结果评价在法定审计流程中的要点和价值"
        },
        {
          title: "法定审计流程 - 报告拟定与转达",
          shortDescription: "审计报告处理",
          description: "介绍拟定审计报告并转达给被审计公司在法定审计流程中的最终环节和注意事项"
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
}
</script>

<style scoped>
.statutory-audit-page {
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