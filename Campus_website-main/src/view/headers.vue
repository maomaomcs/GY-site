<script setup>
import {ref} from "vue";
import notFound from "@/components/not-found.vue";
import index from '@/components/index.vue'
import community from '@/components/community_classification.vue'
import Show from "@/components/show.vue";
import Opend from "@/components/Secretarial accounting services/CompanyOpened.vue";
import Zhu from "@/components/Secretarial accounting services/Zhuce.vue";
import SecretarialServices from "@/components/Secretarial accounting services/Secretarial services.vue";
import OpeningABank from "@/components/Secretarial accounting services/Opening a bank.vue";
import FinancialAccounting from "@/components/Secretarial accounting services/Financial Accounting.vue";
import PayrollManagement from "@/components/Secretarial accounting services/Payroll management.vue";
import CompanySupport from "@/components/Secretarial accounting services/Company support.vue";
import adite from "@/components/Audit_and_tax_services/statutory-audit.vue";
import imadite from "@/components/Audit_and_tax_services/Immigration audit.vue";
import acquisitions from "@/components/Audit_and_tax_services/Corporate mergers and acquisitions.vue";
import valuation from "@/components/Audit_and_tax_services/business valuation.vue";
import tax from "@/components/Audit_and_tax_services/Tax Consultation.vue";
import procedures from "@/components/Audit_and_tax_services/Perform Agreed - upon Procedures.vue";
import CPA from "@/components/Audit_and_tax_services/CPA.vue";
import due from "@/components/Audit_and_tax_services/due diligence.vue";
import Macau from "@/components/Audit_and_tax_services/Macau subsidiary company.vue";
import Kong from "@/components/Audit_and_tax_services/Listing planning.vue";
import Faudit from "@/components/Audit_and_tax_services/Financial audit.vue";
import ESG from "@/components/Audit_and_tax_services/Environmental, social and governance (ESG) report.vue";
import review from "@/components/Audit_and_tax_services/nternal control review.vue";
import {MessagePlugin} from "tdesign-vue-next";
import axios from "axios";
import Message from "@/components/message.vue";
import shangbiao from "@/components/other/shangbiaozhuce.vue";
import zizhu from "@/components/other/zizhushenbao.vue";
import shouzi from "@/components/other/shouzizhuxiangmu.vue";
import chepai from "@/components/other/chepaishenbao.vue";
import zichan from "@/components/other/zichanguanli.vue";
import sifs from "@/components/other/equity-investment-and-financing-service-container.vue";
import xdzy from "@/components/other/credit-support-service-container.vue";
import gqbx from "@/components/other/equity-underwriting-service-container.vue";
import ym from "@/components/other/major-investment-immigration-service-container.vue";

let menu_value = ref('1')
const changeHandler = (active) => {
    console.log('change', active);
    menu_value.value = active
};

function redirectToLogin() {
    axios.post('http://127.0.0.1:5000/get_shopping_list', {

    }, {
        headers: {},
        withCredentials: true,
    }).then((data) => {
        if(data['data']['code'] !== 400){
            MessagePlugin.success("你已登录无需重复登录!")
        }
        else{
            window.location.href = 'http://localhost:5173/login';
        }
    });

}

const visible_message = ref(false);
const options = [
    { content: '个人信息', value: 1 },
    { content: '退出', value: 2 },
];
const clickHandler = (data) => {
    MessagePlugin.success(data.content);

};

</script>

<template>
    <t-drawer v-model:visible="visible_message" header="个人信箱" :on-overlay-click="() => (visible_message = false)" placement="right" @cancel="visible_message = false" size="medium">
        <message></message>
    </t-drawer>
    <div class="box">
        <t-head-menu default-value="1" expand-type="popup" @change="changeHandler">
            <template #logo>
                <img style="height: 28px" src="../../public/logo/Photo.png" alt="logo" />
                <span style="margin: 5px 0 5px 10px;font-size: 18px">GrandBlossom官网</span>
            </template>
            <t-menu-item value="1"> 官网首页 </t-menu-item>
            <t-submenu value="2" title="公司概况">
                <t-menu-item value="2-1"> 学校社团 </t-menu-item>
                <t-menu-item value="2-2"> 办学理念 </t-menu-item>
                <t-menu-item value="2-3"> 院系介绍 </t-menu-item>
                <t-menu-item value="2-4"> 院系介绍 </t-menu-item>
            </t-submenu>
            <t-submenu value="3" title="公司秘書及會計服務">
                <t-menu-item value="3-1"> 公司開業 </t-menu-item>
                <t-menu-item value="3-2"> 註冊地址 </t-menu-item>
                <t-menu-item value="3-3"> 秘書服務 </t-menu-item>
                <t-menu-item value="3-4"> 銀行開戶 </t-menu-item>
                <t-menu-item value="3-5"> 財務會計 </t-menu-item>
                <t-menu-item value="3-6"> 薪酬管理 </t-menu-item>
                <t-menu-item value="3-7"> 離岸公司支援（英屬維爾京群島、開曼群島） </t-menu-item>
            </t-submenu> 
            <t-submenu value="4" title="審計及稅務服務">
                <t-menu-item value="4-1"> 法定審計 </t-menu-item>
                <t-menu-item value="4-2"> 商業估值 </t-menu-item>
                <t-menu-item value="4-3"> 執行商定程序 </t-menu-item>
                <t-menu-item value="4-4"> 稅務諮詢 </t-menu-item>
                <t-menu-item value="4-5"> 鑑證會計 </t-menu-item>
                <t-menu-item value="4-6"> 盡職調查 </t-menu-item>
                <t-menu-item value="4-7"> 企業併購 </t-menu-item>
                <t-menu-item value="4-8"> 香港移民審計 </t-menu-item>
                <t-menu-item value="4-9"> 澳門子公司審計 </t-menu-item>
            </t-submenu>
            <t-submenu value="5" title="上市公司服務">
                <t-menu-item value="5-1"> 上市策劃（美國、香港） </t-menu-item>
                <t-menu-item value="5-2"> 財務審計 </t-menu-item>
                <t-menu-item value="5-3"> 環境社會及管治報告 </t-menu-item>
                <t-menu-item value="5-4"> 內部控制審閱 </t-menu-item>
                <t-menu-item value="5-5"> 企業風險管理 </t-menu-item>
                <t-menu-item value="5-6"> 上市公司秘書 </t-menu-item>
                <t-menu-item value="5-6"> 任職董事 </t-menu-item>
            </t-submenu> 
            <t-submenu value="6" title="其他服務">
                <t-menu-item value="6-1"> 註冊商標 </t-menu-item>
                <t-menu-item value="6-2"> 資助申報 </t-menu-item>
                <t-menu-item value="6-3"> 受資助項目查驗 </t-menu-item>
                <t-menu-item value="6-4"> 港澳車牌申請 </t-menu-item>
                <t-menu-item value="6-5"> 資產管理 </t-menu-item>
                <t-menu-item value="6-6"> 股權投融 </t-menu-item>
                <t-menu-item value="6-7"> 信貸支援 </t-menu-item>
                <t-menu-item value="6-8"> 股權包銷 </t-menu-item>
                <t-menu-item value="6-9"> 重大投資移民 </t-menu-item>
            </t-submenu> 
            <template #operations>
                <t-button variant="text" shape="square" @click="MessagePlugin.success('这个功能还没有写哦')">
                    <template #icon><t-icon name="search" /></template>
                </t-button>
                <t-button variant="text" shape="square"  @click="visible_message = true">
                    <template #icon><t-icon name="mail" /></template>
                </t-button>
                <t-button variant="text" shape="square" @click="redirectToLogin">
                    <template #icon><t-icon name="user" /></template>
                </t-button>
                <t-dropdown :options="options" @click="clickHandler">
                    <t-button  style="border: none" theme="default" variant="outline" shape="square"> <t-icon name="ellipsis" size="16" /></t-button>
                </t-dropdown>
            </template>
        </t-head-menu>
    </div>
    <div class="content_school">
        <div v-if="menu_value === '1'">
            <index></index>
        </div>
        <div v-else-if="menu_value === '2-1'">
            <community></community>
        </div>
        <div v-else-if="menu_value === '2-2'">
            <div style="padding: 20px 0;width: 60%;border-radius: 8px;border: 1px solid rgba(128,128,128,0.4);overflow: hidden;margin: 0 auto">
                <h2  style="width: 100%;margin: 0 auto; text-align: center;font-size: 30px">学院办学理念</h2>
                <div style="width: 100%;margin: 10px auto; text-align: center;font-size: 20px">
                    <h4>校训</h4>
                    <p>以德立身、自强不息；</p>
                    <p>人才培养目标：培养蓝领中的骨干；</p>
                    <p>办学定位：融入海洋战略，服务港航物流，培养优秀人才；</p>
                    <p>学院愿景：建特色名校，育港航人才；</p>
                </div>
            </div>
        </div>
        <div v-else-if="menu_value === '2-3'">
            <show></show>
        </div>
        <div v-else-if="menu_value === '3-1'">
            <Opend></Opend>
        </div>
        <div v-else-if="menu_value === '3-2'">
            <Zhu></Zhu>
        </div>
        <div v-else-if="menu_value === '3-3'">
            <SecretarialServices></SecretarialServices>
        </div>
        <div v-else-if="menu_value === '3-4'">
            <OpeningABank></OpeningABank>
        </div>
        <div v-else-if="menu_value === '3-5'">
            <FinancialAccounting></FinancialAccounting>
        </div>
        <div v-else-if="menu_value === '3-6'">
            <PayrollManagement></PayrollManagement>
        </div>
        <div v-else-if="menu_value === '3-7'">
            <CompanySupport></CompanySupport>
        </div>
        <div v-else-if="menu_value === '4-1'">
            <adite></adite>
        </div>
        <div v-else-if="menu_value === '4-2'">
            <valuation></valuation>
        </div>
        <div v-else-if="menu_value === '4-3'">
            <procedures></procedures>
        </div>
        <div v-else-if="menu_value === '4-4'">
            <tax></tax>
        </div>
        <div v-else-if="menu_value === '4-5'">
            <CPA></CPA>
        </div>
        <div v-else-if="menu_value === '4-6'">
            <due></due>
        </div>
        <div v-else-if="menu_value === '4-7'">
            <acquisitions></acquisitions>
        </div>
        <div v-else-if="menu_value === '4-8'">
            <imadite></imadite>
        </div>
        <div v-else-if="menu_value === '4-9'">
            <Macau></Macau>
        </div>
        <div v-else-if="menu_value === '6-1'">
            <shangbiao></shangbiao>
        </div>
        <div v-else-if="menu_value === '6-2'">
            <zizhu></zizhu>
        </div>
         <div v-else-if="menu_value === '6-3'">
            <shouzi></shouzi>   
        </div>       
         <div v-else-if="menu_value === '6-4'">
            <chepai></chepai>   
        </div>
        <div v-else-if="menu_value === '6-5'">
            <zichan></zichan>   
        </div>
        <div v-else-if="menu_value === '6-6'">
            <sifs></sifs>   
        </div>
        <div v-else-if="menu_value === '6-7'">
            <xdzy></xdzy>   
        </div>
        <div v-else-if="menu_value === '6-8'">
            <gqbx></gqbx>   
        </div>
        <div v-else-if="menu_value === '6-9'">
            <ym></ym>   
        </div>              
        <div v-else>
            <not-found></not-found>
        </div>
    </div>
</template>
<style lang="less" scoped>
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
