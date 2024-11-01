<template>
    <div id="foot">
        <div class="footer">
            <div class="about">
                <div>
                    <ul>
                        <li>公司秘書及會計服務</li>
                        <li><router-link to="/company-opened">公司開業</router-link></li>
                        <li><router-link to="/Zhuce">註冊地址</router-link></li>
                        <li><router-link to="/Secretarialservices">秘書服務</router-link></li>
                        <li><router-link to="/Openingabank">銀行開戶</router-link></li>
                        <li><router-link to="/Payrollmanagement">財務會計</router-link></li>
                        <li><router-link to="/FinancialAccounting">薪酬管理</router-link></li>
                        <li><router-link to="/CompanySupport">離岸公司支援(英屬維爾京群島、開曼群島)</router-link></li>
                    </ul>
                    <ul>
                        <li>稅務及審計服務</li>
                        <li><router-link to="/statutory-audit">法定審計</router-link></li>
                        <li><router-link to="/businessvaluation">商業估值</router-link></li>
                        <li><router-link to="/PerformProcedures">執行商定程序</router-link></li>
                        <li><router-link to="/TaxConsultation">稅務諮詢</router-link></li>
                        <li><router-link to="/CPA">鑑證會計</router-link></li>
                        <li><router-link to="/duediligence">盡職調查</router-link></li>
                        <li><router-link to="/Corporate">企業併購</router-link></li>
                        <li><router-link to="/Immigrationaudit">香港移民審計</router-link></li>
                        <li><router-link to="/Macaucompany">澳門子公司密計</router-link></li>
                    </ul>
                    <ul>
                        <li>上市公司服務</li>
                        <li><router-link to="/Listingplanning">上市策劃(美國、香港)</router-link></li>
                        <li><router-link to="/Financialaudit">財務審計</router-link></li>
                        <li><router-link to="/Environmental">環境社會及管治報告</router-link></li>
                        <li><router-link to="/nternalreview">內部控制審閱</router-link></li>
                        <li><router-link to="/">企業風險管理</router-link></li>
                        <li><router-link to="/">上市公司秘書</router-link></li>
                        <li><router-link to="/">任職董事</router-link></li>
                    </ul>
                    <ul>
                        <li>其他服務</li>
                        <li><router-link to="/shangbiaozhuce">註冊商標</router-link></li>
                        <li><router-link to="/zizhushenbao">資助申報</router-link></li>
                        <li><router-link to="/shouzizhuxiangmu">受資助項目查驗</router-link></li>
                        <li><router-link to="/chepaishenbao">港澳車牌申請</router-link></li>
                        <li><router-link to="/zichanguanli">資產管理</router-link></li>
                        <li><router-link to="/equityinvestment">股權投融</router-link></li>
                        <li><router-link to="/creditsupport">信貸支援</router-link></li>
                        <li><router-link to="/equityunderwriting">股權包銷</router-link></li>
                        <li><router-link to="/majorinvestment">重大投資移民</router-link></li>
                    </ul>
                </div>
                <div>
                    <div class="phone_">
                        <h3>0532-12345678</h3>
                        <p>8:00-18:00（仅收市话费）</p>
                        <t-button :ghost="true">
                            <em class="iconfont-message2"></em>
                            <p>联系我们</p>
                        </t-button>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%; margin: 10px 0 auto; background-color: #fafafa; padding: 10px 0; text-align: center;">
            <div class="call">
                <span>GrandBlossom官网</span>
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
    //background-color: orange;
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
    width: 80%;
}

#foot .about>div:nth-of-type(2) {
    width: 20%;
    text-align: center;
    //border-left: 1px solid rgb(128, 128, 128);
}

#foot .about>div:nth-of-type(1)>ul {
    width: 20%;
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