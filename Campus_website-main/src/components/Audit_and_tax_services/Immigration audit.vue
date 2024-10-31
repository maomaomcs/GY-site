<template>
    <div>
      <table style="margin-bottom: 50px ;">
        <caption>香港移民审计</caption>
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- 净资产审查 -->
          <tr>
            <td rowspan="3">净资产审查</td>
            <td>银行存款（即储蓄及定期存款）</td>
            <td>银行账户月结单/银行存摺 银行发出的证明信，银行发出的存款证明</td>
          </tr>
          <tr>
            <td>证券、债券及基金</td>
            <td>证券账户月结单、证券公司发出的证明信。 契约合同</td>
          </tr>
          <tr>
            <td>房地产</td>
            <td>
              证明申请人在申请前两年内绝对 对权益拥有3,000万港元净资产 购房合同/产权证明 房产所在地有产权的土地注册记录 房产地权证明（城市物业） 国有土地使用证（乡郊土地） 按揭契约（如有）
            </td>
          </tr>
          <!-- 公司股份 -->
          <tr>
            <td rowspan="2">公司股份</td>
            <td>公司</td>
            <td>
              企业法人营业执照 验资报告（如有） 工商行政管理局列印的最新公司资料 股票、股权证明，公司注册证明书及公司章程大纲或章程细则 审计师报告
            </td>
          </tr>
          <tr>
            <td>股票、债券、后偿债项及 合资格集体投资计划</td>
            <td>
              注明申请人投资金额，由金融机构发出的成交单/收据/结单 金融机构发出的证明信
            </td>
          </tr>
          <!-- 投资规定审查 -->
          <tr>
            <td rowspan="2">投资规定审查</td>
            <td>存款</td>
            <td>银行发出的存款证明</td>
          </tr>
          <tr>
            <td>有限合伙基金的拥股权益</td>
            <td>
              合夥协议 审计师报告 可证明申请人投资金额的文件
            </td>
          </tr>
          <!-- 投资管理规定审查 -->
          <tr>
            <td rowspan="2">投资管理规定审查</td>
            <td>非住宅房产</td>
            <td>
              注明房产拥有权及买入价的土地注册处记录 按揭契约（如有） 商业登记册内资料的摘录（如房产由申请人名下的独资企业拥有）
            </td>
          </tr>
          <tr>
            <td>资本投资者入境计划投资组合</td>
            <td>
              已递交至公司注册处的周年申报表/官方机构发出有申请人的公司拥股权证明（如房产由申请人担任唯一股东的公司拥有） 可证明申请人投资额的文件（如申请人向资本投资者入境计划投资组合投入港币三百万元） 银行账户月结单/银行存摺（申请人可将港币三百万元现金存於他所聘的金融中介机构开立的指定帐户）
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: ["审查阶段及规定要求", "申请人资产的类别", "所需资料"]
      };
    }
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    background-color: #007BFF;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  tr:hover {
    background-color: #e0e0e0;
  }
  div {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  caption {
     font-size: 50px;
     font-family: Arial, sans-serif;
     color: #333;
     text-align: center;
     background-color: #f0f0f0;
     border: 1px solid #ccc;
     padding: 10px;
   }
  </style>