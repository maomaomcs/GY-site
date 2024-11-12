<template>
  <div class="valuation-page">
    <h1 class="header">商业估值</h1>
    <p class="description">
      提供全面的商业估值服务，包括公司估值和房产估值。
    </p>

    <div class="valuation-grid">
      <div 
        v-for="(valuation, index) in valuations" 
        :key="index" 
        class="valuation-card"
        @click="openModal(valuation)"
      >
        <img :src="valuation.icon" alt="Valuation Icon" class="valuation-icon"/>
        <h2>{{ valuation.title }}</h2>
        <p>{{ valuation.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedValuation" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">×</span>
        <h2>{{ selectedValuation.title }}</h2>
        <p>{{ selectedValuation.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valuations: [
        {
          title: "公司估值",
          shortDescription: "通过内外部因素评估股价价值，确保估值准确性。",
          description: "考虑行业趋势、公司财务表现和市场前景等多个因素，全面评估公司的市场价值和潜在风险，确保估值的准确性。",
          icon: "../../img/sheji.png"
        },
        {
          title: "房产估值",
          shortDescription: "确定不动产的市场价值，广泛应用于交易、贷款、保险等。",
          description: "通过对市场、地理位置、物业条件等因素的分析，准确评估房产的当前市场价值，适用于买卖、贷款和保险等场景。",
          icon: "../../img/qiye.png"
        },
        {
          title: "其他估值",
          shortDescription: "提供其它类型的估值服务。",
          description: "根据不同需求，提供不同类型的估值服务，包括设备、商标、专利等非物质资产的评估。",
          icon: "../../img/Insurance.png"
        }
      ],
      selectedValuation: null
    };
  },
  methods: {
    openModal(valuation) {
      this.selectedValuation = valuation;
    },
    closeModal() {
      this.selectedValuation = null;
    }
  }
};
</script>

<style scoped>
.valuation-page {
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

.valuation-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  margin: 0 20px;
}

.valuation-card {
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

.valuation-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.valuation-icon {
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
