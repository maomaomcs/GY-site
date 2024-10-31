<template>
    <div class="audit-container">
      <h2>澳门子公司审计业务</h2>
      <table>
        <tr>
          <th>分类</th>
          <th>详情</th>
        </tr>
        <tr>
          <td rowspan="2">一、审计依据和准则</td>
          <td>遵循澳门会计准则进行财务报表编制，如固定资产折旧、收入确认原则有特定要求。</td>
        </tr>
        <tr>
          <td>依据国际审计准则或澳门本地审计准则开展审计工作，规范审计各环节。</td>
        </tr>
        <tr>
          <td rowspan="8">二、审计重点领域</td>
        </tr>
        <tr>
          <td>    - **资产审计**：货币资金需银行函证、现金盘点；应收账款评估可收回性；存货盘点并检查计价；固定资产和无形资产核实购置、折旧、摊销和减值情况。</td>
        </tr>
        <tr>
          <td>    - **负债审计**：应付账款检查完整性，长期负债审查合同条款和利息计算。</td>
        </tr>
        <tr>
          <td>    - **所有者权益审计**：股本核实出资情况，留存收益审查利润分配。</td>
        </tr>
        <tr>
          <td>    - **收入和成本审计**：按准则检查收入确认时点和金额、成本核算方法。</td>
        </tr>
        <tr>
          <td> - **税务审计**：检查澳门税务合规性、税收优惠利用和关联交易税务处理。</td>
        </tr>
        <tr>
          <td> - **内部控制审计**：评估控制环境、风险评估机制、控制活动、信息与沟通和内部监督机制。</td>
        </tr>
        <tr>
          <td> - **合规性审计**：审查法律法规、公司章程和内部制度遵守情况。</td>
        </tr>
        <tr>
          <td rowspan="3">三、审计流程</td>
          <td> - **审计计划阶段**：了解子公司基本情况，确定审计范围和重点，制定审计计划。</td>
        </tr>
        <tr>
          <td> - **审计实施阶段**：进行内部控制测试、实质性测试，收集审计证据。</td>
        </tr>
        <tr>
          <td> - **审计报告阶段**：整理分析证据，与管理层沟通，出具审计报告。</td>
        </tr>
        <tr>
          <td rowspan="3">四、特殊考虑因素</td>
          <td> - 考虑语言（中文、葡萄牙语）和文化差异。</td>
        </tr>
        <tr>
          <td> - 关注与母公司的关联关系，特别是关联交易审计。</td>
        </tr>
        <tr>
        <td> - 注意跨境业务对审计的影响，如会计准则、税收政策、外汇管理差异。</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "MacauSubsidiaryAudit"
  };
  </script>
  
  <style scoped>
  .audit-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
    font-family: Arial, sans - serif;
    background-color: #ffffff; /* 容器背景色 */
    padding: 20px; /* 容器内边距 */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* 容器阴影 */
  }
  
  h2 {
    border-bottom: 2px solid #007BFF;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #333; /* 调整标题颜色 */
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* 固定表格布局，防止内容过长撑开表格 */
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 15px; /* 增加单元格内边距 */
    word-wrap: break - word; /* 允许文本换行 */
    overflow: hidden; /* 隐藏溢出内容 */
  }
  
  th {
    background-color: #f4f4f4; /* 表头背景色 */
    font-weight: bold;
    color: #666; /* 表头文字颜色 */
  }
  
  tr:hover {
    background-color: #f9f9f9; /* 鼠标悬停行背景色 */
  }
  
  /* 媒体查询，用于响应式设计 */
  @media screen and (max-width: 768px) {
   .audit-container {
      width: 95%;
    }
    table {
      font-size: 14px; /* 手机端减小字体大小 */
    }
  }
  </style>