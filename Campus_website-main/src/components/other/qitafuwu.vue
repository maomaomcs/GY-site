<template>
  <div class="company-opening-page">
    <h1 class="header">其他服务</h1>

    <div class="service-list">
      <!-- 新增其他服务循环展示 -->
      <div 
        v-for="(otherService, index) in otherServices" 
        :key="index" 
        class="service-card"
        @click="openOtherServiceModal(otherService)"
      >
        <img :src="otherService.icon" alt="Service Icon" class="service-icon"/>
        <h2>{{ otherService.title }}</h2>
        <p>{{ otherService.shortDescription }}</p>
      </div>
    </div>

    <!-- 新增其他服务详情模态框 -->
    <div v-if="selectedOtherService" class="other-service-modal" @click="closeOtherServiceModal">
      <div class="other-service-modal-content" @click.stop>
        <span class="close" @click="closeOtherServiceModal">×</span>
        <h2>{{ selectedOtherService.title }}</h2>
        <p>{{ selectedOtherService.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 新增其他服务数据
      otherServices: [
        {
          title: "注册商標",
          shortDescription: "提供商标注册相关服务",
          description: "更多内容请通过联系方式进行交流",
          icon: "../img/zhuce.png" 
        },
        {
          title: "资助申请",
          shortDescription: "协助进行资助申请相关事务",
          description: "更多内容请通过联系方式进行交流",
          icon: "../../img/shenqing.png"
        },
        {
          title: "受资助项目查验",
          shortDescription: "按照相关指引对受资助项目进行查验",
          description: "根据《受助活助项目查验指引》，对受资助项目进行查验（如受助活动超过澳门100万需会计师制作报告，可视为受资助项目查验的一部分要求，确保资助资金使用合规等）。",
          icon: "../../img/chayan.png"
        },
        {
          title: "港澳车牌申请",
          shortDescription: "负责港澳车牌申请相关事宜",
          description: "更多内容请通过联系方式进行交流",
          icon: "../../img/chaepai.png"
        },
        {
          title: "资产管理",
          shortDescription: "提供资产管理相关服务",
          description: "更多内容请通过联系方式进行交流",
          icon: "../../img/qian.png"
        },
        {
          title: "股权投融资",
          shortDescription: "涵盖在上市统筹及策划中的股权投融资服务",
          description: "上市（IPO）统筹及策划中涵盖股权投融资服务，包括为企业提供股权融资渠道、协助企业进行股权结构设计、开展股权融资相关活动等，帮助企业筹集资金用于发展或扩张业务（例如在上市过程中吸引投资者投资企业股权）。",
          icon: "../../img/rongzi.png"
        },
        {
          title: "信贷支援",
          shortDescription: "提供信贷支援相关服务",
          description: "更多内容请通过联系方式进行交流",
          icon: "../../img/xindai.png"
        },
        {
          title: "股权包销",
          shortDescription: "属于上市统筹及策划服务中的股权包销服务",
          description: "上市（IPO）统筹及策划服务中的一部分，在企业上市过程中，投行或相关机构承担股权包销责任，帮助企业销售股票，确保企业成功上市融资（例如在路演、融资过程中，与承销商合作完成股权包销工作）。",
          icon: "../../img/guquan.png"
        },
        {
          title: "重大投资移民",
          shortDescription: "协助办理重大投资移民相关事务",
          description: "更多内容请通过联系方式进行交流",
          icon: "../../img/yiming.png"
        }
      ],
      selectedOtherService: null
    };
  },
  methods: {
    // 新增打开其他服务详情模态框的方法
    openOtherServiceModal(otherService) {
      this.selectedOtherService = otherService;
    },
    // 新增关闭其他服务详情模态框的方法
    closeOtherServiceModal() {
      this.selectedOtherService = null;
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
  margin-bottom: 10px; 
}
.other-service-modal {
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

.other-service-modal-content {
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