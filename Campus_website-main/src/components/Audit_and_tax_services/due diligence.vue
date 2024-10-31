<template>
    <div class="due-diligence-container">
      <h2 style="margin-top: 30px; text-align: center; font-size: 32px;">尽职调查</h2>
      <table>
        <tr>
          <th>尽职调查类型</th>
          <th>调查内容详情</th>
        </tr>
        <tr>
          <td rowspan="3">商业尽职调查</td>
          <td>
            评估目标公司所处市场规模、增长趋势、竞争格局。
          </td>
        </tr>
        <tr>
          <td>
            研究市场细分领域，确定目标公司在各细分市场定位。如分析电商公司所在电商市场情况及自身在高端或大众消费品类电商中的发展潜力。
          </td>
        </tr>
        <tr>
          <td>
            了解目标公司采购、生产、销售、物流等业务运作环节。如查看制造企业原材料采购、生产流程、销售网络和物流配送情况。
          </td>
        </tr>
        <tr>
          <td rowspan="3">商业尽职调查</td>
          <td>
            分析业务模式独特性和可持续性，判断其竞争优势。如评估共享经济模式企业的长期盈利和发展能力。
          </td>
        </tr>
        <tr>
          <td>
            研究目标公司短、长期战略规划，包括市场拓展、新产品研发计划等。如分析科技公司未来产品推出和国际市场进军计划的合理性。
          </td>
        </tr>
        <tr>
          <td>
            分析战略规划与市场趋势、公司资源匹配程度。如考察公司资源是否能支持其激进战略目标。
          </td>
        </tr>
        <tr>
          <td rowspan="3">财务尽职调查</td>
          <td>
            详细分析目标公司资产负债表、利润表、现金流量表，检查资产质量与构成（如应收账款账龄、存货周转与减值）、负债规模与结构、利润来源与可持续性、现金流充足与稳定性。
          </td>
        </tr>
        <tr>
          <td>
            比较历史财务数据，识别异常变化和趋势。如调查公司销售收入增长但毛利率下降问题。
          </td>
        </tr>
        <tr>
          <td>
            评估偿债、流动性、盈利等财务风险，计算偿债能力（资产负债率等）、流动性（现金流量与债务到期情况）、盈利（净利润率等）指标。
          </td>
        </tr>
        <tr>
          <td rowspan="3">财务尽职调查</td>
          <td>
            识别潜在财务风险因素，如或有负债、关联交易、汇率波动影响。
          </td>
        </tr>
        <tr>
          <td>
            根据历史数据和市场情况进行财务预测，用多种方法（趋势、市场比较、回归分析等）预测未来收入、成本、利润和现金流，并考虑不同情景假设。
          </td>
        </tr>
        <tr>
          <td>
            运用合适估值方法（市盈率、市净率、现金流折现法等）估值，为决策提供依据。
          </td>
        </tr>
        <tr>
          <td rowspan="3">法律尽职调查</td>
          <td>
            核实目标公司注册信息、股权结构、公司章程，检查注册合法性、股权清晰度、潜在纠纷，分析公司章程规定。
          </td>
        </tr>
        <tr>
          <td>
            调查关联企业和子公司情况，包括法律关系、业务和财务关联，排查问题。
          </td>
        </tr>
        <tr>
          <td>
            检查目标公司重大合同（采购、销售、租赁、贷款、知识产权许可等）合法性、有效性和履行情况，评估违约、变更或终止条款影响。
          </td>
        </tr>
        <tr>
          <td rowspan="3">法律尽职调查</td>
          <td>
            关注合同关键条款（价格、付款、质量、保密、争议解决等）对公司财务和运营的影响。
          </td>
        </tr>
        <tr>
          <td>
            调查目标公司对行业监管、税收、劳动、环保等法规的遵守情况。如检查金融机构监管合规性、制造业企业环保和劳动用工合法性。
          </td>
        </tr>
        <tr>
          <td>
            评估公司面临的法律诉讼和潜在法律风险，包括未决诉讼进展、赔偿金额、对声誉和财务的影响。
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "DueDiligence"
  };
  </script>
  
  <style scoped>
 .due-diligence-container {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
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
    font-size: 32px;
    color: #0056b3; /* 改变标题颜色 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影 */
    transition: color 0.3s ease; /* 添加颜色过渡效果 */
  }
  h2:hover {
    color: #007BFF; /* 鼠标悬停时颜色变化 */
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加表格整体阴影 */
    border: 1px solid #ccc; /* 表格外边框 */
  }
  
  th {
    background-color: #f0f0f0; /* 表头背景色 */
    font-weight: bold; /* 加粗表头文字 */
    text-transform: uppercase; /* 表头文字大写 */
    border: 1px solid #ccc; /* 单元格边框 */
    padding: 15px; /* 增加单元格内边距 */
  }
  
  td {
    line-height: 1.6; /* 增加单元格内文本行高，使文本更易读 */
    padding: 15px; /* 增加单元格内边距 */
    border: 1px solid #ccc; /* 单元格边框 */
  }
  
  tr:hover {
    background-color: #f9f9f9; /* 鼠标悬停时行背景色变化 */
  }
  </style> 