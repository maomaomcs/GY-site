<template>
    <div class="registration-container">
      <h2 style="text-align: center; font-size: 32px; margin-top: 20px;">会计师注册</h2>
      <table>
        <tr>
          <th>业务类型</th>
          <th>业务详情</th>
        </tr>
        <tr>
          <td rowspan="3">注册咨询</td>
          <td>提供注册政策咨询，包括不同地区注册会计师协会的注册要求（如学历、工作经验、考试通过情况等）。</td>
        </tr>
        <tr>
          <td>解答注册流程疑问，给出注册时间安排建议，例如提醒成绩有效期与注册申请时间的关系。</td>
        </tr>
        <tr>
          <td>
            协助整理注册资料，如收集学历证书、考试合格成绩单、工作经验证明等。
          </td>
        </tr>
        <tr>
          <td rowspan="3">资料准备与审核</td>
          <td>对国外学历证书进行认证程序协助。</td>
        </tr>
        <tr>
          <td>
            初步审核提交资料的完整性和准确性，检查工作经验证明文件盖章、工作时长等是否合规。
          </td>
        </tr>
        <tr>
          <td>
            代客户向注册机构提交申请，确保按时、准确提交，并保管提交凭证。
          </td>
        </tr>
        <tr>
          <td rowspan="2">注册申请提交与跟进</td>
          <td>跟进注册进度，及时反馈问题或要求，协助准备补充材料。</td>
        </tr>
        <tr>
          <td>
            提供针对性的培训和辅导服务，包括专业知识不足时的注册会计师考试科目强化培训。
          </td>
        </tr>
        <tr>
          <td rowspan="2">相关增值服务</td>
          <td>开展财务报表分析、审计软件操作等职业技能培训。</td>
        </tr>
        <tr>
          <td>
            根据客户个人背景、特长和目标，制定职业发展路线图，如为企业财务人员提供注册后往内部审计发展的建议。
          </td>
        </tr>
        <tr>
          <td rowspan="2">职业规划与网络服务</td>
          <td>组织交流活动、线上论坛等，帮助建立行业人脉，如举办注册会计师经验分享会。</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccountantRegistration"
  };
  </script>
  
  <style scoped>
  .registration-container {
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