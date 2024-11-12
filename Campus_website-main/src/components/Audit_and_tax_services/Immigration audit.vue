<template>
  <div class="asset-investment-page">
    <h1 class="header">淨資產查證與投資規定查</h1>
    <p class="description">
      請確保申請人申請前兩年內絕對實益擁有3,000萬港元淨資產，並在180日內投資最少3,000萬港元淨值於獲許投資資產。
    </p>

    <div class="grid">
      <div v-for="(item, index) in assetInvestmentItems" :key="index" class="grid-item">
        <img :src="item.icon" alt="Icon" class="icon" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      assetInvestmentItems: [
        {
          title: "銀行存款",
          description: "提供銀行存款記錄，包括存款證、存款餘額等，證明淨資產的一部分。",
          icon: "../../img/sheji.png" // Replace with appropriate icon
        },
        {
          title: "證券債券基金",
          description: "提供證券、債券、基金的投資證明，包括持有的證券清單、基金份額等。",
          icon: "../../img/qiyue.png" // Replace with appropriate icon
        },
        {
          title: "房地產",
          description: "提供房地產的產權證明、估值報告等，證明資產的實際所有權和市場價值。",
          icon: "../../img/qiye.png" // Replace with appropriate icon
        },
        {
          title: "公司股份",
          description: "提供公司股份的證書、股東名冊等，證明擁有公司股權的份額。",
          icon: "../../img/passive income.png" // Replace with appropriate icon
        },
        {
          title: "存款證",
          description: "提供存款證明文件，顯示存款金額和期限等。",
          icon: "../../img/Business analytics.png" // Replace with appropriate icon
        },
        {
          title: "投資所有權權益",
          description: "提供有限合基金的擁有權權益證明，顯示投資者的權益份額。",
          icon: "../../img/baobao.png" // Replace with appropriate icon
        }
      ]
    };
  }
};
</script>
<style scoped>
.asset-investment-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 30px;
  margin: 0 20px;
}

.grid-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
}

.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
  }
}
</style>
