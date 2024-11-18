<template>
  <div class="advisory-banner">
    <div class="banner-image">
      <img src="../../img/image.png" alt="Cityscape" class="cityscape-image" />
    </div>
    <div class="banner-content">
      <p class="tagline animate-float">For a successful business</p>
      <h1 class="title animate-float">
        Grand <span class="highlight">Blossom</span>
      </h1>
      <p class="subtitle animate-float">Advisory ltd.</p>
      <p class="description animate-float">
        Risk Advisory | Accounting | Audit | Tax <br />
        Due Diligence ESG | Comp Sec | Valuation | IPO | Compliance
      </p>
      <a href="#learn-more" class="learn-more-button animate-float">Learn More</a>
    </div>
  </div>
  <div class="business-planning">
    <h2 id="learn-more" style="color: green;">公司介紹</h2>
    <div class="content-wrapper">
      </div>
      <div class="description-text">
        <p>
          公司專注於提供多元化的專業服務，在公司秘書及會計服務方面，涵蓋公司開業協助、註冊地址提供、秘書服務、銀行開戶指導、財務會計管理、薪酬管理以及離岸公司支援(包括 BV、Cayman 等地)同時，會計及稅務服務也十分全面，包含法定審計、商業估值、執行商定程序、稅務諮詢、鑑證會計、盡職調查、企業併購審計等，無論是香港移民審計還是澳門子公司審計，我們都能以專業的水準完成 此外，我們還提供豐富的其他服務，如上市公司服務，包括美國、香港等地的上市策劃以及財務審計在知識產領域，可進行註冊商標;在資助中報方面，提供資助中報和受资助項目查驗服務港澳車牌中請、資產管理、股投資、信貸支持、股權包銷、重大投資移民等服務也一應俱全同時，我們還致力於環境社會及管治報告的編制、内部控制審閱、企業風險管理以及為上市公司提供秘書服務和任職董事推薦
        </p>
    </div>
  </div>
  <div id="app" class="main-container">
    <section class="business-partner">
      <h2 style="color: green; font-size: 30px;">公司資源</h2>
      <div class="partner-cards">
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img src="../../img/join-bg.jpg" alt="Business Partner Image 1">
          </div>
          <h3 style="color: green;">合作推廣</h3>
          <p>合作推廣,可持續發展
            與客戶合作推廣可持續實踐
          打造可持續發展之路</p>
        </div>
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img src="../../img/flx-1-1.jpg" alt="Business Partner Image 2">
          </div>
          <h3 style="color: green;">GBA</h3>
          <p>為客戶提供全面服務
            開業、公司秘書、會計、審計、稅務、ESG報告、投融資及IPO等專業服務，團隊遍佈澳門、香港及內地，為客戶量身訂製解決方案</p>
        </div>
        <div class="card">
          <div class="image-placeholder-business-partner">
            <img src="../../img/flx-2-1.jpg" alt="Business Partner Image 3">
          </div>
          <h3 style="color: green;">成員資格</h3>
          <p>成員擁有多項專業資格，包括：Macau CPA、HKICPA、AICPA、ACG(CS, CGP)、CIA、CFE、CMA、CRMA、CAMS、CISA、CISM、CRISC、 CBP、PMP、CESGA 以及香港、澳門及美國律師資格
            成員為曾擔任或現任美國及香港上市公司董事、金融公司高管和重要社會職務</p>
        </div>
      </div>
    </section>

    <!-- Business Planning Section -->


    <div>
            <div style="position: relative">
                <a href="" style="display: block;width: 80%;margin: 0 auto;">
                    <img src="../../temp/image.png" alt="" width="100%"
                        style="overflow: hidden;border-radius: 8px">
                </a>
                <div class="mess">
                    <a href="">
                        <h2 class="join">加入我們</h2>
                        <p class="desc"></p>
                        <div class="go-link">
                            <i class="go-icon"><p>→GrandBlossom</p></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.mess .join{
  font-family: 宋体;
  color: green;
}
.mess {
    position: absolute;
    left: 15%;
    top: 132px;
}

.mess:hover {
    cursor: pointer;
}

.mess h2 {
    font-family: serif;
    font-size: 30px;
    color: #2a2e2e;
}

.mess .desc {
    font-size: 20px;
    line-height: 36px;
    color: #2a2e2e;
    margin: 4px 0 0 0;
}

.mess .go-link {
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    color: #0052d9;
    margin-top: 16px;
}

.mess .go-link p {
    float: left;
    margin-right: 9px;
}

.mess .go-icon {
  color: green;
    float: left;
    height: 36px;
}

.mess .go-icon img {
    width: 19px;
    float: left;
    margin-top: 10px;
}

.t-flx {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h2, h3, p {
  margin: 0;
  padding: 0;
}

/* Advisory Banner Section */
.advisory-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: #2c3e50;
  overflow: hidden;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.cityscape-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0.5; 
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.tagline, .title, .subtitle, .description, .learn-more-button {
  opacity: 0;
  animation: float-in 1.5s ease-out forwards;
}

.tagline {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  animation-delay: 0.2s;
}

.title {
  font-size: 3.5rem;
  margin: 0.5rem 0;
  font-weight: bold;
  animation-delay: 0.4s;
}

.highlight {
  color: green;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  animation-delay: 0.6s;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #ecf0f1;
  animation-delay: 0.8s;
}

.learn-more-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: green;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;
  animation: float-in 1.5s ease-out forwards;
  animation-delay: 0.51s; /* Adjust this delay for synchronization */
}

.learn-more-button:hover {
  background-color: #2ecc71;
  color: #fff; /* Keep text white */
}

@keyframes float-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


/* Business Partner Section */
.business-partner {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #ecf0f1;
}

.partner-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #2980b9;
  margin-top: 1rem;
  font-size: 1.5rem;
}

.card p {
  color: #7f8c8d;
  margin-top: 1rem;
}

.image-placeholder-business-partner {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 1rem;
  background-color: #27ae60;
  transition: opacity 0.3s ease;
}

.image-placeholder-business-partner img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.image-placeholder-business-partner:hover img {
  opacity: 0.8;
}
/* Company Introduction Section */
.business-planning {
  background: linear-gradient(135deg, #f0f3f4 0%, #dfe6e9 100%);
  padding: 6rem 2rem;
  text-align: center;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  max-width: 1200px;
}

/* Heading for Company Introduction */
.business-planning h2 {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Description Text */
.description-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #7f8c8d;
  max-width: 850px;
  margin: 0 auto 3rem;
  text-align: left;
  font-family: 'Arial', sans-serif;
}

.description-text p {
  margin-bottom: 1.5rem;
  text-align: justify;
  font-weight: 300;
}

/* Content Wrapper for Cards */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.content-wrapper .card {
  background-color: #fff;
  width: 30%;
  padding: 2.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  overflow: hidden;
  font-family: 'Helvetica Neue', sans-serif;
}

.content-wrapper .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.content-wrapper .card h3 {
  color: #2980b9;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.content-wrapper .card p {
  color: #7f8c8d;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content-wrapper .card img {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.content-wrapper .card img:hover {
  transform: scale(1.05);
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .content-wrapper .card {
    width: 80%;
  }
}
</style>