<template>
  <div class="tax-page">
    <h1 class="header">稅務諮詢服務</h1>
    <p class="description">
      提供澳門和香港的稅務諮詢服務，協助企業稅務規劃、申報和優化。
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
          title: "澳門稅務環境",
          shortDescription: "A組納稅人需簽署A組所得稅表格。",
          description: "澳門A組納稅人（股份有限公司等）需要簽署A組所得稅表格，確保稅務合規，稅務規劃有助於企業優化財務結構。",
          icon: "../../img/Agreement.png"
        },
        {
          title: "澳門稅務類型",
          shortDescription: "包括直接稅和間接稅。",
          description: "澳門的稅種包括營業稅、所得補充稅等直接稅和消費稅、旅遊稅等間接稅，稅務籌劃幫助企業減輕稅務負擔。",
          icon: "../../img/baobao.png"
        },
        {
          title: "香港稅務環境",
          shortDescription: "包括利得稅和薪俸稅。",
          description: "香港稅務有利得稅、薪俸稅等，稅務優惠政策幫助企業減輕稅務負擔，提供稅務規劃服務。",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "香港稅務類型",
          shortDescription: "包括物業稅和稅務優惠。",
          description: "香港的稅務包括物業稅、薪俸稅等，並有稅務優惠政策，如自願醫保產品的稅務扣減。",
          icon: "../../img/Business solutions .png"
        },
        {
          title: "稅務籌劃",
          shortDescription: "協助優化稅務結構。",
          description: "通過專業的稅務籌劃，幫助企業制定合理的稅務結構，利用區域優勢，確保企業稅務合規。",
          icon: "../../img/Insurance.png"
        },
        {
          title: "稅務申報",
          shortDescription: "確保稅務申報準確無誤。",
          description: "提供稅務申報服務，確保各類稅表的填寫準確無誤，避免稅務風險。",
          icon: "../../img/qiyue.png"
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
