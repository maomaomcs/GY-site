<template>
  <div class="audit-page">
    <h1 class="header">法定审计</h1>
    <p class="description">
      提供全面的法定审计服务，确保企业符合相关法规和标准。
    </p>

    <div class="audit-grid">
      <div 
        v-for="(audit, index) in audits" 
        :key="index" 
        class="audit-card"
        @click="openModal(audit)"
      >
        <img :src="audit.icon" alt="Audit Icon" class="audit-icon"/>
        <h2>{{ audit.title }}</h2>
        <p>{{ audit.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedAudit" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">×</span>
        <h2>{{ selectedAudit.title }}</h2>
        <p>{{ selectedAudit.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audits: [
        {
          title: "所需资料",
          shortDescription: "审计年度财务报表、会计账目、关联公司名单等。",
          description: "包括审计年度财务报表（利润表、资产负债表及现金流量表）、当年会计账目（银行对账单、合同、费用支出发票等）及关联公司名单等。",
          icon: "../../img/baobao.png" // 随机替换为baobao.png
        },
        {
          title: "审计流程",
          shortDescription: "详细描述审计流程，包括各项步骤。",
          description: "审计流程包括拟定审计方案、了解企业内部控制、收集相关资料、进行符合性测试、实质性控制、拟定审计报告等。",
          icon: "../../img/Business analytics.png" // 随机替换为Business analytics.png
        },
        {
          title: "审计报告",
          shortDescription: "审计后编制并转交的报告。",
          description: "拟定审计报告，并转达给被审计公司，确保其遵循审计标准。",
          icon: "../../img/passive income.png" // 假设将passive income.jpg转换为png路径并替换
        },
        {
          title: "财务报表",
          shortDescription: "财务报表包括利润表、资产负债表及现金流量表。",
          description: "财务报表是审计的重要部分，包括利润表、资产负债表和现金流量表，展示公司的财务健康状况。",
          icon: "../../img/qiye.png" // 假设将qiye.jpg转换为png路径并替换
        },
        {
          title: "会计账目",
          shortDescription: "包括银行对账单、合同和费用支出发票。",
          description: "当年会计账目包括银行对账单、合同、费用支出发票及其他单据，记录公司的财务活动。",
          icon: "../../img/qiyue.png" // 假设将qiyue.jpg转换为png路径并替换
        },
        {
          title: "关联公司",
          shortDescription: "涉及的关联公司名单及关联人士。",
          description: "提供关联公司名单以及涉及的关联人士，以确保审计的完整性。",
          icon: "../../img/sheji.png" // 假设将sheji.jpg转换为png路径并替换
        }
      ],
      selectedAudit: null
    };
  },
  methods: {
    openModal(audit) {
      this.selectedAudit = audit;
    },
    closeModal() {
      this.selectedAudit = null;
    }
  }
};
</script>

<style scoped>
.audit-page {
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

.audit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  margin: 0 20px;
}

.audit-card {
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

.audit-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.audit-icon {
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
