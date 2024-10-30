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
        <div class="static-elements">
          <h3>靜態要素:</h3>
          <ul>
            <li>資產</li>
            <li>負債</li>
            <li>所有者權益</li>
          </ul>
        </div>
        <div class="dynamic-elements">
          <h3>動態要素:</h3>
          <ul>
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
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background: #f4f6f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .description {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #555;
  }
  
  .sub-header {
    margin-top: 30px;
    font-size: 2em;
    color: #2c3e50;
  }
  
  .service-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .service-card {
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .accounting-elements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .static-elements, .dynamic-elements {
    width: 48%;
  }
  
  .static-elements h3, .dynamic-elements h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #2980b9;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  ul li {
    background: #ecf0f1;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  