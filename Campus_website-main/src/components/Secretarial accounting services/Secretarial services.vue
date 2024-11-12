<template>
  <div class="secretary-service-page">
    <h1 class="header">秘书服务相关内容</h1>
    <p class="description">
      以下是我们为企业提供的全面秘书服务相关事项介绍。
    </p>
    <div class="service-list">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="service-card"
        @click="openModal(service)"
      >
        <h2>{{ service.title }}</h2>
        <p>{{ service.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedService" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">×</span>
        <h2>{{ selectedService.title }}</h2>
        <p>{{ selectedService.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "为上市企业撰写ESG报告",
          shortDescription: "针对上市企业，撰写环境、社会和公司治理（ESG）相关报告。",
          description: "详细阐述如何依据相关标准和企业实际情况，撰写全面且准确的ESG报告。"
        },
        {
          title: "担任公司秘书及公司授权代表",
          shortDescription: "承担公司秘书职责以及作为公司授权代表开展相关工作。",
          description: "说明在担任这两个角色过程中所涉及的具体工作内容、责任和权限等。"
        },
        {
          title: "安排董事和股东会议",
          shortDescription: "负责组织安排公司董事和股东会议的相关事宜。",
          description: "包括确定会议时间、地点、议程，通知参会人员等详细流程。"
        },
        {
          title: "草拟会议记录",
          shortDescription: "在董事和股东会议后，起草相关会议记录文件。",
          description: "明确会议记录应涵盖的内容要点、格式规范以及审核流程等。"
        },
        {
          title: "更新公司章程及政府部门登记资料",
          shortDescription: "处理公司各类变更情况下的公司章程更新以及向政府部门提交相关登记资料的工作，如公司增资、增加营业范围、更换管理层成员、更改公司地址、名称及商号、股权转让、公司注销及暂停业务活动申请等相关变更事项对应的资料更新与提交。",
          description: "详细描述针对不同变更事项，如何准确更新公司章程及按要求向政府部门提交登记资料的具体步骤和注意事项。"
        },
        {
          title: "协助开设银行账户",
          shortDescription: "辅助公司完成开设银行账户的相关流程。",
          description: "介绍开设银行账户所需准备的文件、与银行沟通协调的要点以及整个开户流程的具体环节。"
        },
        {
          title: "预备及提交法定文件（如周年申报表）",
          shortDescription: "负责准备并向相关部门提交法定文件，例如周年申报表等。",
          description: "具体说明各类法定文件的准备要求、填写规范以及提交的时间节点和方式等。"
        },
        {
          title: "申请商业登记",
          shortDescription: "办理公司商业登记的申请手续。",
          description: "阐述商业登记申请的流程、所需材料以及审核流程等相关内容。"
        }
      ],
      selectedService: null
    };
  },
  methods: {
    openModal(service) {
      this.selectedService = service;
    },
    closeModal() {
      this.selectedService = null;
    }
  }
};
</script>

<style scoped>
.secretary-service-page {
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

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: scale(1.05);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 10pt rgba(0, 0, 0, 0.3);
}

.close {
  float: right;
  font-size: 1.5em;
  cursor: pointer;
  color: #ff7675;
}

.close:hover {
  color: #d63031;
}
</style>