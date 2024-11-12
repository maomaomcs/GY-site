<template>
  <div class="tax-consulting-page">
    <h1 class="header">税务咨询相关服务</h1>
    <p class="description">
      以下是澳门和香港税务咨询相关信息，包括企业报税要求和不同税种情况等
    </p>
    <div class="service-list">
      <div v-for="(service, index) in services" :key="index" class="service-card" @click="openModal(service)">
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
          title: "澳门企业报税要求",
          shortDescription: "了解澳门特定企业报税规定",
          description: "解释纯利或注册资本超澳门币100万的企业需由会计师签署A组所得税表格的要求"
        },
        {
          title: "澳门税务规划协助",
          shortDescription: "利用区域优势规划税务",
          description: "介绍如何利用澳门的区域优势协助企业进行税务规划"
        },
        {
          title: "澳门A组纳税人规定",
          shortDescription: "A组纳税人相关要求",
          description: "阐述A组纳税人（如股份有限公司及股份两合公司等）需具备完善会计帐册，由注册会计师等核对签署申报文件的规定"
        },
        {
          title: "澳门B组纳税人规定",
          shortDescription: "B组纳税人课税方式",
          description: "说明B组纳税人依财政局估定所得利润课税的情况"
        },
        {
          title: "澳门税种介绍 - 直接税",
          shortDescription: "了解澳门直接税种类",
          description: "详细介绍澳门直接税（包括营业税、所得补充税、职业税、房屋税）的税额计算方式和税率规定"
        },
        {
          title: "澳门税种介绍 - 间接税",
          shortDescription: "了解澳门间接税种类",
          description: "详细介绍澳门间接税（包括消费税、旅游税、印花税、机动车辅税）的税额计算方式和税率规定"
        },
        {
          title: "香港利得税介绍",
          shortDescription: "香港利得税相关信息",
          description: "讲解香港利得税（包括有限公司和独资或合伙企业税率不同、宽减政策、部分股息或投资收益豁免、存放认可机构存款利息豁免等内容）"
        },
        {
          title: "香港薪俸税介绍",
          shortDescription: "香港薪俸税相关信息",
          description: "阐述香港薪俸税（包括扣除和免税额、税阶、暂缴规定、宽减政策等内容）"
        },
        {
          title: "香港物业税介绍",
          shortDescription: "香港物业税相关信息",
          description: "介绍香港物业税（包括标准税率15%、可扣除相关支出、免税项目等内容）"
        },
        {
          title: "香港税务优惠介绍",
          shortDescription: "香港税务优惠情况",
          description: "如购买合资格自愿医保产品可获税务扣减等香港税务优惠相关内容"
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
.tax-consulting-page {
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