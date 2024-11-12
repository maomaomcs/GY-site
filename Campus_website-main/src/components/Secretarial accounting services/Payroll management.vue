<template>
  <div class="compensation-management-page">
    <h1 class="header">薪酬管理相关服务</h1>
    <p class="description">
      依据澳门法律，以下是雇主在薪酬管理方面需要履行的责任和相关操作。
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
          title: "雇员入职及离职登记申报",
          shortDescription: "按照澳门法律，为雇员申报入职及离职信息。",
          description: "详细介绍申报的途径、所需材料以及申报的时间要求等。"
        },
        {
          title: "员工薪金等财务信息申报",
          shortDescription: "申报员工薪金等相关财务数据。",
          description: "包括薪金信息的具体内容、申报格式以及与财务系统的对接等内容。"
        },
        {
          title: "提供粮单",
          shortDescription: "为员工提供粮单。",
          description: "阐述粮单的内容、格式、发放周期以及保存要求等。"
        },
        {
          title: "申报职业税",
          shortDescription: "负责申报职业税相关事宜。",
          description: "说明职业税的计算方法、申报时间、申报表格填写等细节。"
        },
        {
          title: "按季度提交社会保障基金费用",
          shortDescription: "按季度向相关部门提交社会保障基金费用。",
          description: "包括费用计算依据、提交方式和逾期处理等情况。"
        },
        {
          title: "提交雇主年度申报表（M3/M4）",
          shortDescription: "提交雇主年度申报表M3/M4。",
          description: "详细讲解M3/M4申报表的填写内容、提交时间和审核要点等。"
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
.compensation-management-page {
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