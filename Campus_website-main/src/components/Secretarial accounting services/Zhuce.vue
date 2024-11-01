<template>
  <div class="company-registration-page">
    <h1 class="header">公司註册及專業服務</h1>
    <p class="description">我們提供一站式公司註冊及專業服務，滿足您的業務需求。</p>

    <div class="step-card">
      <div class="step-icon">🏢</div>
      <div class="step-content">
        <h2>成立公司條件</h2>
        <ul class="list">
          <li>至少一名年满18歲的股東和董事</li>
          <li>一名法定秘書（由香港永久居民或香港公司擔任）</li>
          <li>一個香港註册地址</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">📅</div>
      <div class="step-content">
        <h2>註册方式及所需時間</h2>
        <ul class="list">
          <li>註册易!方式註册（需時1天）</li>
          <li>註册全新香港有限公司（需時約5-6天）</li>
          <li>購買現成香港公司（即空殼公司，需時約2天）</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">📝</div>
      <div class="step-content">
        <h2>所需資料</h2>
        <ul class="list">
          <li>公司中英文名稱或單一的中文或英文名稱</li>
          <li>股東、董事身份證或護照複印件</li>
          <li>公司註册地址</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">🗂️</div>
      <div class="step-content">
        <h2>公司秘書服務</h2>
        <ul class="list">
          <li>編寫及保存法定記錄</li>
          <li>安排及出席董事和股東會議</li>
          <li>預備及呈交法定文件</li>
          <li>協助開設銀行賬戶</li>
          <li>協助申請香港工作簽證</li>
          <li>公司註銷及暫停活動申請</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">🏦</div>
      <div class="step-content">
        <h2>開戶方式及流程</h2>
        <p>開戶方式:</p>
        <ul class="list">
          <li>親臨開戶: 公司董事親臨香港銀行開戶，一般情况下，當天可完成開戶所需簽名文件，預計20個工作日完成。</li>
          <li>視頻開戶: 約需30個工作日。</li>
          <li>律師公證: 由兩地律師公證文件，再由律師代表到銀行開戶。</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">📊</div>
      <div class="step-content">
        <h2>會計服務</h2>
        <p>會計要素:</p>
        <ul class="list">
          <li>靜態要素: 資產、負債、所有者權益</li>
          <li>動態要素: 收入、費用、利潤</li>
        </ul>
        <h3>我們的服務包括:</h3>
        <ul class="list">
          <li>代理記賬</li>
          <li>設置會計制度</li>
          <li>財務報表編制</li>
          <li>存貨管理</li>
          <li>成本管理</li>
          <li>建立內部會計稽核制度</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">💼</div>
      <div class="step-content">
        <h2>稅務支援</h2>
        <p>主要項目:</p>
        <ul class="list">
          <li>利得稅、薪俸稅、物業稅</li>
          <li>海外收入稅務豁免</li>
          <li>避免雙重徵稅</li>
        </ul>
        <h3>服務包括:</h3>
        <ul class="list">
          <li>稅務諮詢</li>
          <li>稅務申報</li>
          <li>稅務實地審核及調查</li>
          <li>薪俸稅電報</li>
          <li>稅務訴訟</li>
        </ul>
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
.company-registration-page {
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

.step-card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.step-icon {
  font-size: 3em;
  color: #3498db;
  margin-right: 20px;
}

.step-content {
  flex: 1;
}

.step-content h2 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.step-content p,
.step-content .list {
  font-size: 1.1em;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.list {
  padding-left: 20px;
  list-style-type: disc;
}

.btn-primary {
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px auto;
  display: block;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
