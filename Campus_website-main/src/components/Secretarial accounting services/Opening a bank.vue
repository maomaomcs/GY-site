<template>
  <div class="bank-account-opening-page">
    <h1 class="header">银行开户相关信息</h1>
    <p class="description">
      以下是香港银行开户的不同方式和开户流程介绍
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
          title: "亲临香港开户",
          shortDescription: "公司董事亲临香港银行开户，当天完成所需签名文件，预计20个工作日完成",
          description: "详细介绍亲临香港开户的具体步骤、注意事项，以及开户过程中的相关细节"
        },
        {
          title: "视频开户",
          shortDescription: "公司董事亲临香港银行中国内地分行见证开户，约需30个工作日",
          description: "阐述视频开户的流程、所需准备的材料，以及整个过程中的关键环节"
        },
        {
          title: "律师公证开户",
          shortDescription: "由两地律师公证文件，再由律师代表到银行开户",
          description: "包括律师公证的具体要求、选择律师的建议，以及律师代表开户的流程"
        },
        {
          title: "开户流程",
          shortDescription: "开户流程包括递交开户申请、银行尽职调查部门审批、批出账户号码、寄出支票本、网银密码等，最后确认网上理财密码启动、首次登录服务、寄出或领取提款卡及密码、存入启动资金",
          description: "对开户流程的每一个步骤进行详细讲解，如递交开户申请的方式、银行尽职调查的内容、各个环节的时间安排等"
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
.bank-account-opening-page {
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