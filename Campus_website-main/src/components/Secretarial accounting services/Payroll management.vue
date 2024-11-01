<template>
  <div class="container">
    <h1 class="header">職業稅及薪酬申報</h1>
    <p class="description">
      根據澳門法律，以下手續對僱主為必要義務:
    </p>

    <section class="section">
      <h2 class="sub-header">必要手續:</h2>
      <div class="service-list">
        <div class="service-card">
          <h3>倔員申報入職及離職登記</h3>
        </div>
        <div class="service-card">
          <h3>員工的薪金、加班費、假期工作補償及費用報銷</h3>
        </div>
        <div class="service-card">
          <h3>篇員工提供糧單 (紙本或電子文件)</h3>
        </div>
        <div class="service-card">
          <h3>為倔員申報職業稅</h3>
        </div>
        <div class="service-card">
          <h3>按季度提交社會保障基金費用</h3>
        </div>
        <div class="service-card">
          <h3>提交倔主年度申報表 (M3/M4)</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OccupationalTaxAndSalaryDeclaration',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
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

.section {
  margin-bottom: 40px;
}

.sub-header {
  margin-top: 30px;
  font-size: 1.8em;
  color: #2c3e50;
  border-bottom: 2px solid #3aafda;
  padding-bottom: 5px;
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
