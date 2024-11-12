<template>
  <div class="asset-investment-page">
    <h1 class="header">净资产查证与投资规定查</h1>
    <p class="description">
      请确保申请人申请前两年内绝对实益拥有3,000万港元净资产，并在180日内投资最少3,000万港元净值于获许投资资产。
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
          title: "银行存款",
          description: "提供银行存款记录，包括存款证、存款余额等，证明净资产的一部分。",
          icon: "../../img/sheji.png" // Replace with appropriate icon
        },
        {
          title: "证券债券基金",
          description: "提供证券、债券、基金的投资证明，包括持有的证券清单、基金份额等。",
          icon: "../../img/qiyue.png" // Replace with appropriate icon
        },
        {
          title: "房地产",
          description: "提供房地产的产权证明、估值报告等，证明资产的实际所有权和市场价值。",
          icon: "../../img/qiye.png" // Replace with appropriate icon
        },
        {
          title: "公司股份",
          description: "提供公司股份的证书、股东名册等，证明拥有公司股权的份额。",
          icon: "../../img/passive income.png" // Replace with appropriate icon
        },
        {
          title: "存款证",
          description: "提供存款证明文件，显示存款金额和期限等。",
          icon: "../../img/Business analytics.png" // Replace with appropriate icon
        },
        {
          title: "投资所有权权益",
          description: "提供有限合基金的拥有权权益证明，显示投资者的权益份额。",
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
