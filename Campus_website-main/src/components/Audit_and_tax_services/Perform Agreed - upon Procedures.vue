<template>
  <div class="execution-page">
    <h1 class="header">执行商定程序</h1>
    <p class="description">
      根据《受助活助项目查验指引》，提供受助活动的执行商定程序。
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
          title: "澳基金会资助",
          shortDescription: "为超澳门100万的受助活动提供资助报告。",
          description: "根据《受助活助项目查验指引》，澳基金会资助用于支持受助活动，需由会计师制作详细报告。",
          icon: "../../img/aus-foundation.png"
        },
        {
          title: "科学技术发展基金资助",
          shortDescription: "为科技发展提供资金支持。",
          description: "涉及科学技术发展基金资助，帮助企业提升科研能力，提供详细的资金支持报告。",
          icon: "../../img/tech-fund.png"
        },
        {
          title: "文化发展基金资助",
          shortDescription: "支持文化活动及项目。",
          description: "提供文化发展基金资助，支持文化项目和活动的资助报告制作，确保资金使用合规。",
          icon: "../../img/culture-fund.png"
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
