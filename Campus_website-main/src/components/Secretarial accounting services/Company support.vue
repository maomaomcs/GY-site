<template>
  <div class="offshore-support-page">
    <h1 class="header">離岸公司支援</h1>
    <p class="description">提供全面的離岸公司支援服務，讓您的業務穩步發展。</p>

    <div class="step-card">
      <div class="step-icon">1</div>
      <div class="step-content">
        <h2>會計及稅務支拨</h2>
        <p>納稅人應具備完善的會計帳册，並由在「會計師專業委員會」註册的會計師核對帳冊及簽署有關申報檔。</p>
        <h3>主要項目:</h3>
        <ul class="list">
          <li>利得稅、薪俸稅、物業稅申報</li>
          <li>海外收入稅務豁免</li>
          <li>避免雙重徵稅</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">2</div>
      <div class="step-content">
        <h2>職業稅及薪酬申報</h2>
        <p>根據澳門法律，企業必須履行以下義務：</p>
        <ul class="list">
          <li>員工入職及離職登記</li>
          <li>薪金、加班費、假期工作補償及費用報銷</li>
          <li>按季度提交社會保障基金費用</li>
          <li>年度申報表(M3/M4)</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">3</div>
      <div class="step-content">
        <h2>虛擬辦公室服務</h2>
        <ul class="list">
          <li>提供公司註册地址及聯絡地址</li>
          <li>專人代收信件並寄回指定地址</li>
          <li>會議室借用（需提前預約）</li>
          <li>接待政府部門稽查</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">4</div>
      <div class="step-content">
        <h2>專業會計服務</h2>
        <p>我們提供清晰、準確的財務信息，幫助企業做出明智的決策，提升管理水平和盈利能力。</p>
        <h3>服務包括:</h3>
        <ul class="list">
          <li>帳目整理</li>
          <li>編制財報</li>
          <li>存貨管理</li>
          <li>成本管理</li>
          <li>建立內部會計稽核制度</li>
        </ul>
      </div>
    </div>

    <div class="step-card">
      <div class="step-icon">5</div>
      <div class="step-content">
        <h2>秘書服務</h2>
        <p>我們提供一站式多元化的秘書服務，支持企業的發展需求。</p>
        <h3>服務包括:</h3>
        <ul class="list">
          <li>安排董事和股東會議，並草擬會議記錄</li>
          <li>更新公司章程及政府部門登记资料</li>
          <li>協助開設銀行賬戶</li>
          <li>預備及提交法定文件，如周年申報表和商業登記</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffshoreSupportServices',
};
</script>

<style scoped>
.offshore-support-page {
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
}

.btn-primary {
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
