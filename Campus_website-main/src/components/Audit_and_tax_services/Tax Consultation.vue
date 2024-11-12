<template>
  <div class="tax-page">
    <h1 class="header">税务咨询服务</h1>
    <p class="description">
      提供澳门和香港的税务咨询服务，协助企业税务规划、申报和优化。
    </p>

    <div class="tax-grid">
      <div 
        v-for="(service, index) in taxServices" 
        :key="index" 
        class="tax-card"
        @click="openModal(service)"
      >
        <img :src="service.icon" alt="Service Icon" class="tax-icon"/>
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
      taxServices: [
        {
          title: "澳门税务环境",
          shortDescription: "A组纳税人需签署A组所得税表格。",
          description: "澳门A组纳税人（股份有限公司等）需要签署A组所得税表格，确保税务合规，税务规划有助于企业优化财务结构。",
          icon: "../../img/macau-tax.png"
        },
        {
          title: "澳门税务类型",
          shortDescription: "包括直接税和间接税。",
          description: "澳门的税种包括营业税、所得补充税等直接税和消费税、旅游税等间接税，税务筹划帮助企业减轻税务负担。",
          icon: "../../img/macau-tax-type.png"
        },
        {
          title: "香港税务环境",
          shortDescription: "包括利得税和薪俸税。",
          description: "香港税务有利得税、薪俸税等，税务优惠政策帮助企业减轻税务负担，提供税务规划服务。",
          icon: "../../img/hk-tax.png"
        },
        {
          title: "香港税务类型",
          shortDescription: "包括物业税和税务优惠。",
          description: "香港的税务包括物业税、薪俸税等，并有税务优惠政策，如自愿医保产品的税务扣减。",
          icon: "../../img/hk-tax-type.png"
        },
        {
          title: "税务筹划",
          shortDescription: "协助优化税务结构。",
          description: "通过专业的税务筹划，帮助企业制定合理的税务结构，利用区域优势，确保企业税务合规。",
          icon: "../../img/tax-planning.png"
        },
        {
          title: "税务申报",
          shortDescription: "确保税务申报准确无误。",
          description: "提供税务申报服务，确保各类税表的填写准确无误，避免税务风险。",
          icon: "../../img/tax-filing.png"
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
.tax-page {
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

.tax-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 20px;
}

.tax-card {
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

.tax-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.tax-icon {
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
