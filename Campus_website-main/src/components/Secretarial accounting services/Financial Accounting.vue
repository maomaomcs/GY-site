<template>
  <div class="container">
    <h1 class="header">專業會計服務</h1>
    <p class="description">
      爲企業提供清晰、準確的財務信息，全面反映企業的財務狀況和經營成果，從而幫助企業做出明智的決策。
      不僅能節省成本、確保會計信息的準確性; 還避免訊息誤導人員變動造成的工作中斷。
      同時，專業人員對相關數據的分析和建議，能夠提升企業的管理水平和盈利能力。
    </p>

    <h2 class="sub-header">我們的服務包括:</h2>
    <div class="service-list">
      <div class="service-card">
        <h3>帳目整理</h3>
      </div>
      <div class="service-card">
        <h3>編制財報</h3>
      </div>
      <div class="service-card">
        <h3>存貨管理</h3>
      </div>
      <div class="service-card">
        <h3>成本管理</h3>
      </div>
    </div>

    <h2 class="sub-header">會計要素:</h2>
    <div class="accounting-elements">
      <div class="element-box">
        <h3>靜態要素:</h3>
        <ul class="element-list">
          <li>資產</li>
          <li>負債</li>
          <li>所有者權益</li>
        </ul>
      </div>
      <div class="element-box">
        <h3>動態要素:</h3>
        <ul class="element-list">
          <li>收入</li>
          <li>費用</li>
          <li>利潤</li>
        </ul>
      </div>
    </div>

    <h2 class="sub-header">我們的具體服務包括:</h2>
    <div class="service-list">
      <div class="service-card">
        <h3>代理記賬</h3>
      </div>
      <div class="service-card">
        <h3>設置會計制度</h3>
      </div>
      <div class="service-card">
        <h3>財務報表編制</h3>
      </div>
      <div class="service-card">
        <h3>存貨管理</h3>
      </div>
      <div class="service-card">
        <h3>成本管理</h3>
      </div>
      <div class="service-card">
        <h3>建立內部會計稽核制度</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountingServices',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 100px 20px;
  background: #f3f7fa;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  font-size: 2.8em;
  margin-bottom: 30px;
  color: #2d3e50;
  font-weight: bold;
}

.description {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #444;
  line-height: 1.6;
}

.sub-header {
  margin-top: 40px;
  font-size: 2em;
  color: #1a5d8a;
  margin-bottom: 20px;
  border-bottom: 2px solid #3aafda;
  padding-bottom: 10px;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.service-card {
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, border 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-color: #3aafda;
}

.accounting-elements {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 20px;
}

.element-box {
  width: 48%;
  background: #eef5fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.element-box h3 {
  font-size: 1.6em;
  margin-bottom: 15px;
  color: #236087;
}

.element-list {
  list-style-type: none;
  padding: 0;
}

.element-list li {
  background: #dfeaf1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: #3a3a3a;
}
</style>
