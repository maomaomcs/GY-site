<template>
    <div class="container">
      <h1 class="header">公司註冊及開戶指南</h1>
  
      <div class="section">
        <h2 @click="toggleMaterials" class="toggle-header">
          所需資料 <span>{{ showMaterials ? '−' : '+' }}</span>
        </h2>
        <transition name="fade">
          <ul v-if="showMaterials" class="content-list">
            <li>公司註册資料，例如: 公司註冊證書、商業登記證、公司章程法團成立表格或周年申報表等</li>
            <li>股束、董事及簽名人身份證明和最近3個月地址證明資料</li>
            <li>業務證明資料，例如: 訂單、購銷發票、合同、提單等關聯公司註册資料</li>
            <li>個人以及關聯公司最近3個月的銀行流水</li>
          </ul>
        </transition>
      </div>
  
      <div class="section">
        <h2 @click="toggleOpeningMethods" class="toggle-header">
          開戶方式 <span>{{ showOpeningMethods ? '−' : '+' }}</span>
        </h2>
        <transition name="fade">
          <ul v-if="showOpeningMethods" class="content-list">
            <li>親臨開戶: 公司董事親臨香港銀行開户，一般情況下，當天可完成開戶所需簽名文件，预计20個工作日完成。</li>
            <li>視頻開戶: 公司董事親臨香港銀行中國内地分行見證開戶，約需30個工作日。</li>
            <li>律師公證: 由兩地律師公證文件，再由律師代表到銀行開戶。</li>
          </ul>
        </transition>
      </div>
  
      <div class="section">
        <h2 @click="toggleOpeningProcess" class="toggle-header">
          開戶流程 <span>{{ showOpeningProcess ? '−' : '+' }}</span>
        </h2>
        <transition name="fade">
          <ul v-if="showOpeningProcess" class="content-list">
            <li>遞交開戶申請</li>
            <li>銀行盡職調查部門審批</li>
            <li>盡職調查通過，批出最終的賬戶號碼寄出支票本</li>
            <li>寄出網銀等密碼</li>
            <li>確認網上理財密碼啟動</li>
            <li>首次網上理財登入服務</li>
            <li>寄出或領取提款卡及密碼</li>
            <li>存入啟動資金</li>
          </ul>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMaterials: false,
        showOpeningMethods: false,
        showOpeningProcess: false,
      };
    },
    methods: {
      toggleMaterials() {
        this.showMaterials = !this.showMaterials;
      },
      toggleOpeningMethods() {
        this.showOpeningMethods = !this.showOpeningMethods;
      },
      toggleOpeningProcess() {
        this.showOpeningProcess = !this.showOpeningProcess;
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .section {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    background: #f9f9f9;
  }
  
  .toggle-header {
    cursor: pointer;
    font-size: 1.5em;
    color: #007BFF;
    margin: 0;
  }
  
  .content-list {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  