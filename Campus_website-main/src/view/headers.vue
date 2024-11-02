<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { MessagePlugin } from "tdesign-vue-next";
import axios from "axios";
const router = useRouter();
const visible_message = ref(false);
const options = [
    { content: '个人信息', value: 1 },
    { content: '退出', value: 2 },
];
const redirectToLogin = () => {
    axios.post('http://127.0.0.1:5000/get_shopping_list', {}, { withCredentials: true })
        .then((data) => {
            if (data['data']['code'] !== 400) {
                MessagePlugin.success("你已登录无需重复登录!");
            } else {
                router.push('/login');
            }
        });
};
function newPageFunction() {
            window.location.href = './login';
        }
const clickHandler = (data) => {
    MessagePlugin.success(data.content);
};

</script>

<template>
    <t-drawer v-model:visible="visible_message" header="个人信箱" :on-overlay-click="() => (visible_message = false)" placement="right" @cancel="visible_message = false" size="medium">
        <message></message>
    </t-drawer>
    <div class="box">
        <t-head-menu expand-type="popup">
            <template #logo>
                <img style="height: 28px" src="../../public/logo/Photo.png" alt="logo" />
                <span style="margin: 5px 0 5px 10px;font-size: 18px">GrandBlossom官网</span>
            </template>
            <t-menu-item class="no-color" @click="router.push('/')"> 官网首页 </t-menu-item>
            <t-submenu value="3" title="公司秘書及會計服務">
                <t-menu-item @click="router.push('/company-opened')"> 公司開業 </t-menu-item>
                <t-menu-item @click="router.push('/Zhuce')"> 註冊地址 </t-menu-item>
                <t-menu-item @click="router.push('/Secretarialservices')"> 秘書服務 </t-menu-item>
                <t-menu-item @click="router.push('/Openingabank')"> 銀行開戶 </t-menu-item>
                <t-menu-item @click="router.push('/FinancialAccounting')"> 財務會計 </t-menu-item>
                <t-menu-item @click="router.push('/Payrollmanagement')"> 薪酬管理 </t-menu-item>
                <t-menu-item @click="router.push('/CompanySupport')"> 離岸公司支援 </t-menu-item>
            </t-submenu>
            <t-submenu value="4" title="審計及稅務服務">
                <t-menu-item @click="router.push('/statutory-audit')"> 法定審計 </t-menu-item>
                <t-menu-item @click="router.push('/businessvaluation')"> 商業估值 </t-menu-item>
                <t-menu-item @click="router.push('/PerformProcedures')"> 執行商定程序 </t-menu-item>
                <t-menu-item @click="router.push('/TaxConsultation')"> 稅務諮詢 </t-menu-item>
                <t-menu-item @click="router.push('/CPA')"> 鑑證會計 </t-menu-item>
                <t-menu-item @click="router.push('/duediligence')"> 盡職調查 </t-menu-item>
                <t-menu-item @click="router.push('/Corporate')"> 企業併購 </t-menu-item>
                <t-menu-item @click="router.push('/Immigrationaudit')"> 香港移民審計 </t-menu-item>
                <t-menu-item @click="router.push('/Macaucompany')"> 澳門子公司審計 </t-menu-item>
            </t-submenu>
            <t-submenu value="5" title="上市公司服務">
                <t-menu-item @click="router.push('/Listingplanning')"> 上市策劃 </t-menu-item>
                <t-menu-item @click="router.push('/Financialaudit')"> 財務審計 </t-menu-item>
                <t-menu-item @click="router.push('/Environmental')"> 環境社會及管治報告 </t-menu-item>
                <t-menu-item @click="router.push('/nternalreview')"> 內部控制審閱 </t-menu-item>
                <t-menu-item @click="router.push('/Enterpriseriskmanagement')"> 企業風險管理 </t-menu-item>
                <t-menu-item @click="router.push('/Listedcompanyservices')"> 上市公司秘書 </t-menu-item>
                <t-menu-item @click="router.push('/AppointedDirector')"> 任職董事 </t-menu-item>
            </t-submenu>
            <t-submenu value="6" title="其他服務">
                <t-menu-item @click="router.push('/shangbiaozhuce')"> 註冊商標 </t-menu-item>
                <t-menu-item @click="router.push('/zizhushenbao')"> 資助申報 </t-menu-item>
                <t-menu-item @click="router.push('/shouzizhuxiangmu')"> 受資助項目查驗 </t-menu-item>
                <t-menu-item @click="router.push('/chepaishenbao')"> 港澳車牌申請 </t-menu-item>
                <t-menu-item @click="router.push('/zichanguanli')"> 資產管理 </t-menu-item>
                <t-menu-item @click="router.push('/equityinvestment')"> 股權投融 </t-menu-item>
                <t-menu-item @click="router.push('/creditsupport')"> 信貸支援 </t-menu-item>
                <t-menu-item @click="router.push('/equityunderwriting')"> 股權包銷 </t-menu-item>
                <t-menu-item @click="router.push('/majorinvestment')"> 重大投資移民 </t-menu-item>
            </t-submenu>
            <template #operations>
               
                <t-button variant="text" shape="square" @click="redirectToLogin();newPageFunction()">
                    <template #icon><t-icon name="user" /></template>
                </t-button>
                
            </template>
        </t-head-menu>
    </div>
    <router-view></router-view>
</template>

<style lang="less" scoped>
.no-color {
    color: inherit; /* Use inherited color */
    background-color: transparent; /* No background */
    border: none; /* Remove border */
}

.t-menu__operations {
    .t-button {
        margin-left: 8px;
    }
}
.t-demo-menu--dark {
    .t-button {
        color: #fff;
        &:hover {
            background-color: #4b4b4b;
            border-color: transparent;
            --ripple-color: #383838;
        }
    }
}
</style>
