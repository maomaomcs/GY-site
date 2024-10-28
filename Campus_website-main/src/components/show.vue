<script setup>
import {ref} from "vue";

let show_list = ref([
    'https://xdxy.qdgw.edu.cn/images/list_tu5.png',
    'https://xdxy.qdgw.edu.cn/images/list_tu4.png',
    'https://xdxy.qdgw.edu.cn/images/list_tu3.png',
    'https://xdxy.qdgw.edu.cn/images/list_tu2.png',
    'https://xdxy.qdgw.edu.cn/images/list_tu1.png'
])

const currentItem = ref([]);
const handlePanelChange = (val) => {
    console.log(val);
};

</script>

<template>
<div style="width: 80%;margin: 0 auto;display: flex;justify-content: space-around;align-items: flex-start;border: 1px solid rgba(128,128,128,0.4);border-radius: 8px;overflow: hidden;padding: 15px">
    <div style="width: 25%">
        <div style="box-sizing: border-box;width: 100%;padding: 10px;background-color: #0c80dc;border-radius: 8px;overflow: hidden">
            <div style="font-size: 25px;color: white">
                <span>学校风光</span>
            </div>
        </div>
        <div :style="{ width: '100%' }" style="box-sizing: border-box;border-radius: 8px;overflow: hidden;margin: 5px auto">
            <t-swiper class="tdesign-demo-block--swiper" :duration="300" :interval="2000">
                <t-swiper-item v-for="item in show_list" :key="item">
                    <img :src="item" alt="" style="width: 100%;border-radius: 8px;overflow: hidden">
                </t-swiper-item>
            </t-swiper>
        </div>

        <div style="width: 100%">
            <div style="display: flex;justify-content: space-between;align-items: flex-end">
                <h2>最新动态</h2>
                <span><a href="">查看更多</a></span>
            </div>
            <hr/>
            <div style="margin: 5px auto">
                <t-collapse v-model="currentItem" :expand-mutex="true" @change="handlePanelChange" style="border-radius: 8px">
                    <t-collapse-panel value="0">
                        <template #header>
                            <span class="hidden">信电学院召开专业人才培养方案论证会</span>
                        </template>
                        为进一步优化专业人才培养方案，深化教育教学改革，全面提高人才培养质量，6月4日，信息与电气工程学院在学院图文信息楼A606会议室召开专业人才培养方案论证会，对建筑消防技术、应急救援技术、无人机应用技术等三个新增专业人才培养方案进行了研讨论证。会议邀请了中国人民警察大学防火工程学院李孝斌副院长、涉外安保学院辛晶教授，北京航空航天大学直升机研究所副所长王放博士，山东工业职业学院机电工程学院常生德院长 <a href="https://xdxy.qdgw.edu.cn/info/1073/1694.htm"><i style="color: #0c80dc">点击查看更多</i></a>
                    </t-collapse-panel>
                    <t-collapse-panel value="1">
                        <template #header>
                            <span class="hidden">学校资助诚信教育校园行演讲比赛圆满完成</span>
                        </template>
                        经过初赛的角逐，共有10位选手脱颖而出进入决赛。决赛现场，围绕“资助诚信教育”的主题，他们根据自身经历，讲述国家资助政策对自己的帮助和自己对励志自强、诚信感恩的理解，最后呼吁广大同学要讲诚信、懂感恩，不负期望，勇于担当，精彩的演讲博得了观众的阵阵掌声与喝彩<a href="https://xdxy.qdgw.edu.cn/info/1073/1691.htm"><i style="color: #0c80dc">点击查看更多</i></a>
                    </t-collapse-panel>
                    <t-collapse-panel value="2">
                        <template #header>
                            <span class="hidden">学校资助诚信教育校园行演讲比赛圆满完成</span>
                        </template>
                        5月29日，新时代职业教育提质培优、协同育人研讨会暨无人机职业教育教学资源建设委员会2021年工作会议在南京科技职业学院召开，信电学院负责人王浩、无人机应用技术专业带头人刘隆吉参加会议。<a href="https://xdxy.qdgw.edu.cn/info/1073/1689.htm"><i style="color: #0c80dc">点击查看更多</i></a>
                    </t-collapse-panel>
                    <t-collapse-panel value="3">
                        <template #header>
                            <span class="hidden">信电学院赴日照航海工程职业学院调研</span>
                        </template>
                        近日，信电学院负责人王浩、副院长盖延亮一行四人赴日照航海工程职业学院调研。日照航海工程职业学院工程学院宫晓楠院长接待调研。双方围绕建筑消防技术专业，就专业建设、人才培养方案制订、师资队伍建设、实验实训条件建设等进行了交流。<a href="https://xdxy.qdgw.edu.cn/info/1073/1688.htm"><i style="color: #0c80dc">点击查看更多</i></a>
                    </t-collapse-panel>
                    <t-collapse-panel value="4">
                        <template #header>
                            <span class="hidden">信电学院召开就业工作汇报会</span>
                        </template>
                        5月27日，信电学院在B6-316召开2021届毕业生就业工作汇报会， 党支部副书记杜元贞主持会议，全体2021届辅导员、班主任参加。
                        会上，每位辅导员、班主任汇报了各自班级现阶段的就业状况，对班级就业数据进行归类和分析，重点汇报了下一阶段的工作重点。随后，杜元贞根据每个班级的实际情况，结合专业特点，给予了分析和指导。他指出，本学期就业工作的重点依然是确保毕业生就业工作落到实处，各辅导员、班主任要加强就业工作政策学习，强化学生就业创业工作指导，强化“一对一指导、点对点服务”，关注班级重点群体，分类型个性化指导，严格遵守教育部关于就业工作的“四不准”要求，倒排工期逐一落实就业指导和帮助；呼吁各位辅导员、班主任在就业工作面前要讲政治、讲奉献、讲责任，确保工作按期达标。<a href="https://xdxy.qdgw.edu.cn/info/1073/1686.htm"><i style="color: #0c80dc">点击查看更多</i></a>
                    </t-collapse-panel>

                </t-collapse>
            </div>
        </div>
    </div>
    <div style="width: 75%;padding: 0 15px 15px 15px">
        <div style="display: flex;justify-content: space-between;align-items: flex-end">
            <h2>最新动态</h2>
            <span><a href="">查看更多</a></span>
        </div>
        <hr/>
        <div style="text-align: center;padding: 20px 0">
            <h3 style="font-size: 30px">信息与电气工程学院简介</h3>
            <p>编辑：<span>院办</span> 作者：<span>信息与电气工程学院</span> 来源：<span>信息与电气工程学院</span>发布时间：<span>2021年01月26日</span></p>
        </div>
        <hr style="border: 1px dashed rgba(128,128,128,0.4)">
        <div class="article_" style="padding: 10px 0">
            <p>信息与电气工程学院成立于2019年，是由原信息工程系、电气工程系主干专业整合而成，是学校重点发展的二级学院。学院现有电气自动化技术等9个专业，教职工82人，在校生3250人。</p>
            <p>会上，每位辅导员、班主任汇报了各自班级现阶段的就业状况，对班级就业数据进行归类和分析，重点汇报了下一阶段的工作重点。随后，杜元贞根据每个班级的实际情况，结合专业特点，给予了分析和指导。他指出，本学期就业工作的重点依然是确保毕业生就业工作落到实处，各辅导员、班主任要加强就业工作政策学习，强化学生就业创业工作指导，强化“一对一指导、点对点服务”，关注班级重点群体，分类型个性化指导，严格遵守教育部关于就业工作的“四不准”要求，倒排工期逐一落实就业指导和帮助；呼吁各位辅导员、班主任在就业工作面前要讲政治、讲奉献、讲责任，确保工作按期达标</p>
            <p>本次会议，统一了学院就业工作的方向，有利于后续就业工作的稳定、有序开展。 </p>
            <div style="width: 100%;text-align: center">
                <img src="https://xdxy.qdgw.edu.cn/__local/4/C3/51/A16E583625A47950949C05F952E_A187EFEF_12360.jpg" alt="" style="width: 80%;margin: 0 auto;overflow: hidden;border-radius: 8px">
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.article_{
    box-sizing: border-box;
}
.article_ p{
    text-indent:2em
}
.article_>*{
    margin: 15px 20px;
}
</style>