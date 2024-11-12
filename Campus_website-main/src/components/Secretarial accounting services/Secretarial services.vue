<template>
  <div class="company-secretary-services-page">
    <h1 class="header">公司秘书及授权代表服务</h1>
    <p class="description">
      提供全面的公司秘书服务，帮助企业合规运营，助力企业发展
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
          title: "撰写ESG报告",
          shortDescription: "为上市企业撰写ESG报告",
          description: "帮助企业编制符合国际标准的环境、社会及治理(ESG)报告，助力企业可持续发展",
          icon: "../../img/sheji.png"
        },
        {
          title: "担任公司秘书",
          shortDescription: "提供公司秘书服务",
          description: "为企业提供专业的公司秘书服务，包括日常管理及合规咨询",
          icon: "../../img/qiyue.png"
        },
        {
          title: "担任授权代表",
          shortDescription: "担任企业授权代表",
          description: "为企业担任授权代表，处理与政府机关的相关事务",
          icon: "../../img/Insurance.png"
        },
        {
          title: "安排董事和股东会议",
          shortDescription: "安排董事和股东会议",
          description: "组织并安排公司董事会及股东大会的会议，确保合规并记录会议内容",
          icon: "../../img/ghfj.png"
        },
        {
          title: "更新公司登记资料",
          shortDescription: "更新公司章程及登记资料",
          description: "更新公司章程、登记资料，包括增资、营业范围变更、管理层变动等",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "法定文件提交",
          shortDescription: "准备及提交法定文件",
          description: "为企业准备及提交年度申报表、商业登记及其它法定文件",
          icon: "../../img/Business solutions.png"
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
.company-secretary-services-page {
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
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
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
  width: 50px; /* Adjust size */
  height: 50px; /* Adjust size */
  margin-bottom: 10px; /* Space between icon and text */
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
