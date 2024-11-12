<template>
  <div class="audit-page">
    <h1 class="header">法定審計</h1>
    <p class="description">
      提供全面的法定審計服務，確保企業符合相關法規和標準。
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
          title: "所需資料",
          shortDescription: "審計年度財務報表、會計賬目、關聯公司名單等。",
          description: "包括審計年度財務報表（利潤表、資產負債表及現金流量表）、當年會計賬目（銀行對賬單、合同、費用支出發票等）及關聯公司名單等。",
          icon: "../../img/baobao.png" // 隨機替換為baobao.png
        },
        {
          title: "審計流程",
          shortDescription: "詳細描述審計流程，包括各項步驟。",
          description: "審計流程包括擬定審計方案、瞭解企業內部控制、收集相關資料、進行符合性測試、實質性控制、擬定審計報告等。",
          icon: "../../img/Business analytics.png" // 隨機替換為Business analytics.png
        },
        {
          title: "審計報告",
          shortDescription: "審計後編制並轉交的報告。",
          description: "擬定審計報告，並轉達給被審計公司，確保其遵循審計標準。",
          icon: "../../img/passive income.png" // 假設將passive income.jpg轉換為png路徑並替換
        },
        {
          title: "財務報表",
          shortDescription: "財務報表包括利潤表、資產負債表及現金流量表。",
          description: "財務報表是審計的重要部分，包括利潤表、資產負債表和現金流量表，展示公司的財務健康狀況。",
          icon: "../../img/qiye.png" // 假設將qiye.jpg轉換為png路徑並替換
        },
        {
          title: "會計賬目",
          shortDescription: "包括銀行對賬單、合同和費用支出發票。",
          description: "當年會計賬目包括銀行對賬單、合同、費用支出發票及其他單據，記錄公司的財務活動。",
          icon: "../../img/qiyue.png" // 假設將qiyue.jpg轉換為png路徑並替換
        },
        {
          title: "關聯公司",
          shortDescription: "涉及的關聯公司名單及關聯人士。",
          description: "提供關聯公司名單以及涉及的關聯人士，以確保審計的完整性。",
          icon: "../../img/sheji.png" // 假設將sheji.jpg轉換為png路徑並替換
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
