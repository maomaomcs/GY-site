<template>
    <div class="ma-page">
      <h1 class="header">上市策劃（美國、香港）</h1>
      <p class="description">
        已完成美國及香港市場上市項目，涵蓋上市（IPO）統籌及策劃的多個方面，包括股權投融資、路演、包銷對接、會計及法律支援等。
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
            title: "上市籌備流程 - 委任團隊",
            shortDescription: "委任顧問及專業團隊（會計師、律師團隊等）。",
            description: "上市籌備的重要環節，選擇合適的顧問和專業團隊，為後續上市工作提供專業支持。",
            icon: "../../img/Agreement.png"
          },
          {
            title: "上市籌備流程 - 準備文件",
            shortDescription: "準備上市文件（審計、招股書起草等）。",
            description: "精心準備各類上市文件，包括審計報告和招股書的起草，確保信息準確和完整。",
            icon: "../../img/Business analytics.png"
          },
          {
            title: "上市籌備流程 - 遞交招股書",
            shortDescription: "向SEC證監會遞交F - 1招股書。",
            description: "按照規定向美國SEC證監會遞交F - 1招股書，開啟上市審批流程。",
            icon: "../../img/baobao.png"
          },
          {
            title: "上市籌備流程 - 審批流程",
            shortDescription: "經過SEC證監會、FINRA金融監管局和交易所審批（回覆監管機構提問及補充數據）。",
            description: "應對多個監管機構的審批，包括回覆提問和補充數據，確保順利通過審批。",
            icon: "../../img/Business solutions.png"
          },
          {
            title: "上市籌備流程 - 路演融資",
            shortDescription: "進行IPO路演融資。",
            description: "通過IPO路演吸引投資者，完成融資環節，為上市提供資金支持。",
            icon: "../../img/sheji.png"
          },
          {
            title: "上市籌備流程 - 掛牌交易",
            shortDescription: "最後掛牌交易與股票交割（公司股票於美國掛牌並交易）。",
            description: "完成最後的掛牌交易和股票交割，使公司股票在市場上正常交易。",
            icon: "../../img/qiyue.png"
          },
          {
            title: "美國香港上市對比 - 上市標準",
            shortDescription: "納斯達克資本市場門檻較低，香港主板上市門檻較高。",
            description: "分析美國納斯達克和香港主板的上市標準差異，為企業選擇上市地點提供參考。",
            icon: "../../img/huoban.png"
          },
          {
            title: "美國香港上市對比 - 上市程式和指導思想",
            shortDescription: "納斯達克披露為主，註冊制，上市時間短；香港半審核制，上市時間長。",
            description: "對比美國納斯達克和香港市場的上市程式和指導思想，瞭解不同市場的特點。",
            icon: "../../img/ghfj.png"
          },
          {
            title: "美國香港上市對比 - 其他方面對比",
            shortDescription: "包括訴訟和賣空風險、AB股、投行選擇等方面對比。",
            description: "詳細比較美國和香港市場在訴訟和賣空風險、AB股、投行選擇、費用、私有化、關聯交易等方面的差異。",
            icon: "../../img/Insurance.png"
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