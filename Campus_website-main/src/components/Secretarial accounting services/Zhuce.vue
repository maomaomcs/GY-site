<template>
  <div class="company-intro">
    <h1>{{ companyName }}</h1>
    <p class="slogan">{{ companySlogan }}</p>
    <h2>关于我们</h2>
    <p>{{ companyDescription }}</p>
    <h2>我们的服务</h2>
    <ul>
      <li v-for="service in services" :key="service">{{ service }}</li>
    </ul>
    <h2>团队资格</h2>
    <p>{{ teamQualifications }}</p>
    <h2>地址</h2>
    <p>{{ address }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'Grand Blossom GBA1',
      companySlogan: '与客户合作推广可持续实践造可持续发展之路',
      companyDescription: '我们为客户提供全面的开业、公司秘书、会计、审计、税务、ESG报告、投融资及IPO等专业服务，遍布澳门、香港及内地，量身定制解决方案。',
      services: [
        '开业咨询',
        '公司秘书服务',
        '会计和审计',
        '税务服务',
        'ESG报告',
        '投资与融资',
        'IPO服务'
      ],
      teamQualifications: '我们的团队成员拥有多项专业资格，包括: MacaU CPA、HKICPA、AICPA、ACG(CS, CGP)、CIA、CFE、CMA、CRMA、CAMS、CISA、CISM、CRISC、CBP、PMP、CESGA以及香港、澳门及美国律师资格。成员曾担任或现任美国及香港上市公司董事、金融公司高管和重要社会角色。',
      address: '澳门宋玉生广场258号建兴龙广场5楼O座'
    };
  }
};
</script>

<style scoped>
.company-intro {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.slogan {
  font-size: 1.2em;
  color: #7f8c8d;
  font-style: italic;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #2980b9;
  margin-top: 20px;
}

p {
  font-size: 1em;
  line-height: 1.6;
  color: #34495e;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  font-size: 1em;
  color: #34495e;
}
</style>
