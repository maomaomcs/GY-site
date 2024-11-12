<template>
  <div class="execution-page">
    <h1 class="header">執行商定程序</h1>
    <p class="description">
      根據《受助活助項目查驗指引》，提供受助活動的執行商定程序。
    </p>

    <div class="execution-grid">
      <div 
        v-for="(program, index) in programs" 
        :key="index" 
        class="execution-card"
        @click="openModal(program)"
      >
        <img :src="program.icon" alt="Program Icon" class="execution-icon"/>
        <h2>{{ program.title }}</h2>
        <p>{{ program.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedProgram" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">×</span>
        <h2>{{ selectedProgram.title }}</h2>
        <p>{{ selectedProgram.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          title: "澳基金會資助",
          shortDescription: "為超澳門100萬的受助活動提供資助報告。",
          description: "根據《受助活助項目查驗指引》，澳基金會資助用於支持受助活動，需由會計師製作詳細報告。",
          icon: "../../img/baobao.png" // 更換為baobao.png
        },
        {
          title: "科學技術發展基金資助",
          shortDescription: "為科技發展提供資金支持。",
          description: "涉及科學技術發展基金資助，幫助企業提升科研能力，提供詳細的資金支持報告。",
          icon: "../../img/Insurance.png" // 更換為Insurance.jpg（這裡假設可使用jpg格式圖片路徑，若需轉換為png可自行調整）
        },
        {
          title: "文化發展基金資助",
          shortDescription: "支持文化活動及項目。",
          description: "提供文化發展基金資助，支持文化項目和活動的資助報告製作，確保資金使用合規。",
          icon: "../../img/passive income.png" // 更換為passive income.jpg（同樣假設可使用jpg格式圖片路徑，可按需調整）
        }
      ],
      selectedProgram: null
    };
  },
  methods: {
    openModal(program) {
      this.selectedProgram = program;
    },
    closeModal() {
      this.selectedProgram = null;
    }
  }
};
</script>

<style scoped>
.execution-page {
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

.execution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 20px;
}

.execution-card {
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

.execution-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.execution-icon {
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
