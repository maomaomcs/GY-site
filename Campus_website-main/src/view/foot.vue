<template>
    <div id="foot">
      <div class="footer">
        <div class="about">
          <div>
            <ul>
              <li>公司秘書及會計服務</li>
              <li><a href="/company-opened" target="_self">公司開業</a></li>
              <li><a href="/Zhuce" target="_self">虛擬辦公室服務</a></li>
              <li><a href="/Secretarialservices" target="_self">秘書服務</a></li>
              <li><a href="/Openingabank" target="_self">銀行開戶</a></li>
              <li><a href="/Payrollmanagement" target="_self">財務會計</a></li>
              <li><a href="/FinancialAccounting" target="_self">薪酬管理</a></li>
              <li><a href="/CompanySupport" target="_self">離岸公司支援(英屬維爾京群島、開曼群島)</a></li>
            </ul>
            <ul>
              <li>稅務及審計服務</li>
              <li><a href="/statutory-audit" target="_self">法定審計</a></li>
              <li><a href="/businessvaluation" target="_self">商業估值</a></li>
              <li><a href="/PerformProcedures" target="_self">執行商定程序</a></li>
              <li><a href="/TaxConsultation" target="_self">稅務諮詢</a></li>
              <!-- <li><a href="/CPA" target="_self">鑑證會計</a></li> -->
              <li><a href="/duediligence" target="_self">盡職調查</a></li>
              <li><a href="/Corporate" target="_self">企業併購</a></li>
              <li><a href="/Immigrationaudit" target="_self">香港移民審計</a></li>
              <!-- <li><a href="/Macaucompany" target="_self">澳門子公司密計</a></li> -->
            </ul>
            <ul>
              <li>上市公司服務</li>
              <li><a href="/Listingplanning" target="_self">上市策劃(美國、香港)</a></li>
              <li><a href="/Financialaudit" target="_self">財務審計</a></li>
              <li><a href="/Environmental" target="_self">環境社會及管治報告</a></li>
              <li><a href="/nternalreview" target="_self">內部控制審閱</a></li>
              <li><a href="/Enterpriseriskmanagement" target="_self">企業風險管理</a></li>
              <li><a href="/Listedcompanyservices" target="_self">上市公司秘書</a></li>
            </ul>
            <ul>
              <li><a href="/qitafuwu" target="_self">其他服務</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div style="width: 100%; margin: 10px 0 auto; background-color: #fafafa; padding: 10px 0; text-align: center;">
        <div class="call">
          <span>GrandBlossom官網</span>
        </div>
      </div>
    </div>
  </template>
<style src="../../src/assets/home.css"></style>
<style scoped>

#foot {
    margin-top: 50px;
    text-align: center;
    user-select: none;
}

#foot .server {
    margin: 15px 0;
    background-color: orange;
}

#foot .server ul {
    display: flex;
    
}

#foot .footer {
    width: 80%;
    margin: 0 auto;
    
    font-family: iconfont, system-ui !important;
}

#foot .server li {
    flex: 1;
    list-style: none;
    text-align: center;
    border-left: 1px solid rgb(128, 128, 128);
    padding: 5px;
}

#foot .first {
    border-left: none !important;
}

#foot .about {
    display: flex;
}

#foot .about>div:nth-of-type(1) {
    display: flex;
    width: 100%;
}

#foot .about>div:nth-of-type(2) {
    width: 25%;
    text-align: center;
    border-left: 1px solid rgb(128, 128, 128);
}

#foot .about>div:nth-of-type(1)>ul {
    width: 25%;
    flex: 1;
}

#foot .about>div:nth-of-type(1)>ul>li {
    list-style: none;
    text-align: center;
}

#foot .about>div:nth-of-type(1)>ul>li:nth-of-type(1) {
    margin-bottom: 10px;
}

#foot .about>div:nth-of-type(1)>ul>li:not(:nth-of-type(1)) {
    margin: 5px 0;
    font-size: 13px;
}

#foot .about>div:nth-of-type(2)>div {
    padding-left: 10px;
    border-left: 1px solid rgba(128, 128, 128, 0.9);
}

#foot .about>div:nth-of-type(2)>div>p {
    font-size: 11px;
}


#foot .call {
    text-align: center;
    opacity: 0.4;
    font-size: 20px;
    user-select: none;
    margin-top: 10px;
}


#foot .info-text {
    font-size: 13px;
    display: flex;
}

#foot .logo {
    width: 5%;
    margin: 10px auto;
}

#foot .logo img {
    width: 100%;
}

#foot .info_content {
    color: rgb(128, 128, 128);
}

#foot .info_content a {
    color: rgb(128, 128, 128);
}

#foot .phone_>* {
    margin: 5px 0;
}
</style>