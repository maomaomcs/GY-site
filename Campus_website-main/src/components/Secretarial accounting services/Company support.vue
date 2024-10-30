<template>
    <div class="container">
      <h1 class="header">公司註册及專業服務</h1>
  
      <h2 class="sub-header">成立公司條件</h2>
      <ul class="requirements">
        <li>至少一名年满18歲的股東和董事</li>
        <li>一名法定秘書（由香港永久居民或香港公司擔任）</li>
        <li>一個香港註册地址</li>
      </ul>
  
      <h2 class="sub-header">註册方式及所需時間</h2>
      <ul class="registration-options">
        <li>註册易!方式註册（需時1天）</li>
        <li>註册全新香港有限公司（需時約5-6天）</li>
        <li>購買現成香港公司（即空殼公司，需時約2天）</li>
      </ul>
  
      <h2 class="sub-header">所需資料</h2>
      <ul class="required-documents">
        <li>公司中英文名稱或單一的中文或英文名稱</li>
        <li>股東、董事身份證或護照複印件</li>
        <li>公司註册地址</li>
      </ul>
  
      <h2 class="sub-header">公司秘書服務</h2>
      <div class="service-list">
        <div class="service-card">
          <h3>編寫及保存法定記錄</h3>
        </div>
        <div class="service-card">
          <h3>安排及出席董事和股東會議</h3>
        </div>
        <div class="service-card">
          <h3>預備及呈交法定文件</h3>
        </div>
        <div class="service-card">
          <h3>協助開設銀行賬戶</h3>
        </div>
        <div class="service-card">
          <h3>協助申請香港工作簽證</h3>
        </div>
        <div class="service-card">
          <h3>公司註銷及暫停活動申請</h3>
        </div>
      </div>
  
      <h2 class="sub-header">開戶方式及流程</h2>
      <p>開戶方式:</p>
      <ul>
        <li>親臨開戶: 公司董事親臨香港銀行開戶，一般情况下，當天可完成開戶所需簽名文件，預計20個工作日完成。</li>
        <li>視頻開戶: 約需30個工作日。</li>
        <li>律師公證: 由兩地律師公證文件，再由律師代表到銀行開戶。</li>
      </ul>
  
      <h2 class="sub-header">會計服務</h2>
      <p>會計要素:</p>
      <ul>
        <li>靜態要素: 資產、負債、所有者權益</li>
        <li>動態要素: 收入、費用、利潤</li>
      </ul>
      <h3>我們的服務包括:</h3>
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
  
      <h2 class="sub-header">稅務支援</h2>
      <p>主要項目:</p>
      <ul>
        <li>利得稅、薪俸稅、物業稅</li>
        <li>海外收入稅務豁免</li>
        <li>避免雙重徵稅</li>
      </ul>
      <h3>服務包括:</h3>
      <div class="service-list">
        <div class="service-card">
          <h3>稅務諮詢</h3>
        </div>
        <div class="service-card">
          <h3>稅務申報</h3>
        </div>
        <div class="service-card">
          <h3>稅務實地審核及調查</h3>
        </div>
        <div class="service-card">
          <h3>薪俸稅電報</h3>
        </div>
        <div class="service-card">
          <h3>稅務訴訟</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompanyRegistrationServices',
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
  
  .sub-header {
    margin-top: 30px;
    font-size: 2em;
    color: #2c3e50;
  }
  
  .requirements, .registration-options, .required-documents {
    margin-left: 20px;
    margin-bottom: 20px;
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
  </style>
  