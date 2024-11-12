<template>
  <div class="company-opening-page">
    <h1 class="header">公司开业相关服务</h1>
    <p class="description">
      以下是公司开业所需办理的各项事务以及相关地区的适用情况等信息
    </p>
    <div class="service-list">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="service-card"
        @click="openModal(service)"
      >
      <img :src="service.icon" alt="Service Icon" class="service-icon"/>
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
          title: "公司名稱許可申請",
          shortDescription: "辦理公司名稱的許可申請流程相關服務",
          description: "詳細介紹公司名稱許可申請的具體步驟、所需材料以及注意事項等",
          icon: "../../img/Agreement.png"
        },
        {
          title: "开业申请",
          shortDescription: "协助完成公司开业申请的各项事宜",
          description: "包括开业申请的填写规范、提交渠道以及审核流程等内容的详细说明",
          icon: "../../img/公文包.png"
        },
        {
          title: "法律公证文件准备",
          shortDescription: "负责准备公司开业所需的各类法律公证文件",
          description: "明确各类法律公证文件的具体要求、办理地点以及办理时长等情况",
          icon: "../../img/合伙伙伴.png"
        },
        {
          title: "公司章程撰写与递交",
          shortDescription: "撰写符合要求的公司章程并完成递交工作",
          description: "阐述公司章程撰写的规范格式、内容要点以及递交的相关部门和流程",
          icon: "../../img/passive income.png"
        },
        {
          title: "公司印章及银行印章办理",
          shortDescription: "办理公司及银行相关印章的制作等事宜",
          description: "说明公司印章和银行印章办理的流程、所需材料以及印章的使用规范等",
          icon: "../../img/企业.png"
        },
        {
          title: "股东架构确认",
          shortDescription: "对公司股东架构进行确认与梳理",
          description: "讲解如何准确确认股东架构，包括股东身份核实、股权比例确定等方面",
          icon: "../../img/Insurance.png"
        },
        {
          title: "刊登政府公告",
          shortDescription: "按照规定完成在政府相关平台刊登公告的操作",
          description: "具体说明刊登政府公告的平台选择、公告内容要求以及发布时间等规定",
          icon: "../../img/Business solutions .png"
        },
        {
          title: "法定记录册管理",
          shortDescription: "负责公司法定记录册的管理维护工作",
          description: "涵盖法定记录册应记录的内容、更新频率以及保管要求等内容",
          icon: "../../img/Business analytics.png"
        },
        {
          title: "申领开业文件及证明",
          shortDescription: "帮助申领公司开业所需的各类文件及证明",
          description: "详细列出开业文件及证明的种类、申领地点、所需材料以及申领流程等",
          icon: "../../img/Files and folders.png"
        },
        {
          title: "开立多币种户口",
          shortDescription: "协助公司开立多币种的银行户口",
          description: "介绍开立多币种户口的银行选择、开户流程、所需文件以及相关注意事项等",
          icon: "../../img/Insurance.png"
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
.company-opening-page {
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
  margin: 10px 100px;
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
  position: relative;
}

.service-card:hover {
  transform: scale(1.05);
}
.service-icon {
  width: 50px; /* 根据需要调整大小 */
  height: 50px; /* 根据需要调整大小 */
  margin-bottom: 10px; /* 添加一些间距 */
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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