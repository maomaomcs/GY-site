<template>
  <div class="company-registration-page">
    <h1 class="header">公司开业及银行开户指南</h1>
    <p class="description">帮助您在澳门顺利开设公司，遵循各项法律和注册流程。</p>

    <!-- Step 1: Company Name Application -->
    <section class="step-card">
      <div class="step-icon">
        <i class="fas fa-building"></i>
      </div>
      <div class="step-content">
        <h2>公司名称申请</h2>
        <p>在开始注册流程前，您需要申请并获得拟用公司名称的批准。请确保名称符合澳门的法律规定。</p>
        <button class="btn-primary">查看名称申请要求</button>
      </div>
    </section>

    <!-- Step 2: Company Registration Process -->
    <section class="step-card">
      <div class="step-icon">
        <i class="fas fa-file-alt"></i>
      </div>
      <div class="step-content">
        <h2>公司注册流程</h2>
        <ul class="list">
          <li>撰写并递交公司章程</li>
          <li>确认并递交股东架构</li>
          <li>制作公司印章和银行印章</li>
          <li>刊登政府公告</li>
          <li>领取开业文件及证书</li>
          <li>准备法定记录册</li>
        </ul>
        <button class="btn-primary">了解更多</button>
      </div>
    </section>

    <!-- Step 3: Bank Account Opening -->
    <section class="step-card">
      <div class="step-icon">
        <i class="fas fa-university"></i>
      </div>
      <div class="step-content">
        <h2>银行开户步骤</h2>
        <ol class="list">
          <li>准备公司注册资料（如公司注册证书、商业登记证等）</li>
          <li>提供股东、董事身份证明和地址证明</li>
          <li>递交开户申请，银行进行尽职调查</li>
          <li>完成调查后银行发放账号和支票本</li>
          <li>激活网上银行并首次存入启动资金</li>
        </ol>
        <button class="btn-primary">银行开户细节</button>
      </div>
    </section>

    <!-- Step 4: Additional Services -->
    <section class="step-card">
      <div class="step-icon">
        <i class="fas fa-cogs"></i>
      </div>
      <div class="step-content">
        <h2>额外服务</h2>
        <ul class="list">
          <li>法律公证文件准备</li>
          <li>多币种银行账户支持</li>
          <li>公司秘书服务</li>
          <li>商标注册与许可申请</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyRegistrationPage',
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
