<template>
  <div class="bank-account-opening-page">
    <h1 class="header">银行开户服务</h1>
    <p class="description">
      提供多种香港银行开户方式，确保企业顺利开户。
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
          title: "亲临开户",
          shortDescription: "公司董事亲临香港银行开户",
          description: "当天完成签名文件，预计20个工作日完成开户。",
          icon: "../../img/Agreement.png"
        },
        {
          title: "视频开户",
          shortDescription: "公司董事亲临香港银行分行见证开户",
          description: "约需30个工作日，过程通过视频见证完成。",
          icon: "../../img/qiyue.png"
        },
        {
          title: "律师公证开户",
          shortDescription: "通过两地律师公证开户",
          description: "由律师公证文件，再由律师代表到银行开户。",
          icon: "../../img/Stocks and brokerages .png"
        },
        {
          title: "递交开户申请",
          shortDescription: "递交开户申请",
          description: "提供公司文件并提交申请。",
          icon: "../../img/sheji.png"
        },
        {
          title: "银行审批",
          shortDescription: "银行尽职调查",
          description: "银行进行审批并核实公司信息。",
          icon: "../../img/qiyue.png"
        },
        {
          title: "确认网上理财密码",
          shortDescription: "确认网上银行服务",
          description: "激活网上理财密码，并完成首次登录及领取银行卡。",
          icon: "../../img/passive income.png"
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
