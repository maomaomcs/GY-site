<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";
const router = useRouter();
const visible_message = ref(false);

// 下拉菜單選項
const options = [
    { content: '個人信息', value: 1 },
    { content: '退出', value: 2 },
];

// 重定向到登錄頁
const redirectToLogin = () => {
    axios.post('http://127.0.0.1:5000/get_shopping_list', {}, { withCredentials: true })
        .then((data) => {
            if (data['data']['code'] !== 400) {
                MessagePlugin.success("你已登錄無需重複登錄!");
            } else {
                router.push('/login');
            }
        });
};

// 跳轉到登錄頁面
function newPageFunction() {
    window.location.href = './login';
}

// 菜單項點擊事件
const clickHandler = (data) => {
    MessagePlugin.success(data.content);
};
</script>

<template>
    <t-drawer v-model:visible="visible_message" header="個人信箱" :on-overlay-click="() => (visible_message = false)" placement="right" @cancel="visible_message = false" size="medium">
        <message></message>
    </t-drawer>

    <div class="box">
        <t-head-menu expand-type="popup">
            <!-- Logo區域 -->
            <template #logo>
                <img style="height: 60px; margin-left: 110px;" src="../../public/logo/Photo.png" alt="logo" />
                <span class="logo-text">GrandBlossom官網</span>
            </template>

            <!-- 主菜單項 -->
            <t-menu-item class="no-color" @click="router.push('/')"> 官網首頁 </t-menu-item>

            <!-- 公司秘書及會計服務 子菜單 -->
            <t-submenu  value="3" title="秘書會計服務">
                <t-menu-item class="no-color"  @click="router.push('/company-opened')"> 公司開業 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/Zhuce')"> 虛擬辦公室服務 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/Secretarialservices')"> 秘書服務 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/Openingabank')"> 銀行開戶 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/FinancialAccounting')"> 財務會計 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/Payrollmanagement')"> 薪酬管理 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/CompanySupport')"> 離岸公司支援 </t-menu-item>
            </t-submenu>

            <!-- 審計及稅務服務 子菜單 -->
            <t-submenu value="4" title="審計及稅務服務">
                <t-menu-item class="no-color" @click="router.push('/statutory-audit')"> 法定審計 </t-menu-item>
                <t-menu-item class="no-color" @click="router.push('/businessvaluation')"> 商業估值 </t-menu-item>
                <t-menu-item class="no-color"  @click="router.push('/PerformProcedures')"> 執行商定程序 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/TaxConsultation')"> 稅務諮詢 </t-menu-item>
                <!-- <t-menu-item  class="no-color" @click="router.push('/CPA')"> 鑑證會計 </t-menu-item> -->
                <t-menu-item  class="no-color" @click="router.push('/duediligence')"> 盡職調查 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/Corporate')"> 企業併購 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/Immigrationaudit')"> 香港移民審計 </t-menu-item>
                <!-- <t-menu-item  class="no-color" @click="router.push('/Macaucompany')"> 澳門子公司審計 </t-menu-item> -->
            </t-submenu>

            <!-- 上市公司服務 子菜單 -->
            <t-submenu value="5" title="上市公司服務">
                <t-menu-item class="no-color"  @click="router.push('/Listingplanning')"> 上市策劃 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/Financialaudit')"> 財務審計 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/Environmental')"> 環境社會及管治報告 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/nternalreview')"> 內部控制審閱 </t-menu-item>
                <t-menu-item class="no-color"  @click="router.push('/Enterpriseriskmanagement')"> 企業風險管理 </t-menu-item>
                <t-menu-item  class="no-color" @click="router.push('/Listedcompanyservices')"> 上市公司秘書 </t-menu-item>
                <!-- <t-menu-item  class="no-color" @click="router.push('/AppointedDirector')"> 任職董事 </t-menu-item> -->
            </t-submenu>
            <t-menu-item  class="no-color" @click="router.push('/qitafuwu')"> 其他服务 </t-menu-item>
                        <!-- 其他服務 子菜單 -->
            <!-- <router-link :to="{ path: '/qitafuwu' }">
            <t-menu-item class="no-color">其他服務</t-menu-item> -->
            <t-submenu value="6" title="語言切換">
            <t-menu-item class="no-color"  @click="router.push('/')"> 简体中文 </t-menu-item>
            <t-menu-item  class="no-color" @click="router.push('/')"> 繁體中文 </t-menu-item>
            <t-menu-item  class="no-color" @click="router.push('/')"> English </t-menu-item>
            </t-submenu>

            <t-submenu value="7" title="联系我们">
            <t-menu-item class="no-color" > 85328550660 </t-menu-item>
            <t-menu-item class="no-color" > 8:00-18:00（僅收市話費） </t-menu-item>
            </t-submenu>
            <!-- 用戶登錄操作 -->
            <template #operations>
                <t-button variant="text" shape="square" @click="redirectToLogin(); newPageFunction()">
                    <template #icon><t-icon name="user" /></template>
                </t-button>
            </template>
        </t-head-menu>
    </div>

    <!-- 頁面路由展示 -->
    <router-view></router-view>
</template>

<style lang="less" scoped>
/* 樣式重置 */

/* 樣式重置 */
/* 樣式重置 */
.no-color {
    color: inherit;
    background-color: transparent;
    border: none;
    transition: color 0.3s ease, font-weight 0.3s ease; /* 平滑過渡 */
}

/* 鼠標懸停時顏色加深並加粗文字 */
.no-color:hover {
    color: #000000; /* 設置你想要的顏色 */
    font-weight: bold; /* 加粗文字 */
}



/* Header Styling */
.t-head-menu {
    background-color: #ffffff;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
}

.t-menu-item {
    color: #fff;
    font-size: 16px;
}

.t-menu-item:hover {
    font-weight: bold;
    background-color: #005C8D;
}

.t-submenu-title {
    color: #fff;
    font-weight: 500;
}

.t-submenu-title:hover {
    background-color: #005C8D;
}

.t-menu__operations {
    .t-button {
        margin-left: 8px;
        background-color: #fff;
        color: #003366;
        border-radius: 4px;
        &:hover {
            background-color: #f0f0f0;
        }
    }
}

/* Logo Styling */
img {
    height: 50px;
    margin-right: 10px;
}

.logo-text {
    font-size: 15px;
    color: #000000;
}

/* Dropdown Styling */
.t-menu__submenu {
    background-color: #ffffff;
    color: #003366;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.t-menu__submenu .t-menu-item {
    text-align: center;
    padding: 10px 20px;
}

.t-menu__submenu .t-menu-item:hover {
    background-color: #f0f0f0;
    font-weight: bold;
}

.t-menu-item-active {
    background-color: #005C8D !important;
    color: #fff;
}

/* Adjust padding for better alignment */
.t-head-menu .t-menu-item,
.t-head-menu .t-submenu-title {
    padding: 10px 15px;
}
</style>
