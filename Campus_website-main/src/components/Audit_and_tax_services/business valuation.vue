<template>
  <div class="valuation-page">
    <h1 class="header">商業估值</h1>
    <p class="description">
      提供全面的商業估值服務，包括公司估值和房產估值。
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
          shortDescription: "通過內外部因素評估股價價值，確保估值準確性。",
          description: "考慮行業趨勢、公司財務表現和市場前景等多個因素，全面評估公司的市場價值和潛在風險，確保估值的準確性。",
          icon: "../../img/sheji.png"
        },
        {
          title: "房產估值",
          shortDescription: "確定不動產的市場價值，廣泛應用於交易、貸款、保險等。",
          description: "通過對市場、地理位置、物業條件等因素的分析，準確評估房產的當前市場價值，適用於買賣、貸款和保險等場景。",
          icon: "../../img/qiye.png"
        },
        {
          title: "其他估值",
          shortDescription: "提供其它類型的估值服務。",
          description: "根據不同需求，提供不同類型的估值服務，包括設備、商標、專利等非物質資產的評估。",
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

/* Add a bounce effect to the image */
.valuation-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.valuation-card:hover .valuation-icon {
  animation: bounce 0.6s ease-in-out; /* Apply bounce animation */
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px); /* Bounce up */
  }
  50% {
    transform: translateY(0); /* Back to original position */
  }
  70% {
    transform: translateY(-5px); /* Smaller bounce up */
  }
  100% {
    transform: translateY(0); /* Back to original position */
  }
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
