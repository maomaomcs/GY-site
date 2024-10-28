<template>
    <div id="c" style="position: relative;width: 80%;margin: 0 auto;border-radius: 8px;overflow: hidden;border: 1px solid rgba(128,128,128,0.4);height: 90vh;overflow-y: auto">
        <t-tabs :value="value" :placement="placement" @change="handlerChange" size="large">
            <t-tab-panel value="first">
                <template #label>
                    <div style="" class="tabs-hover">
                        <span style="margin: 0 15px">全部社团</span>
                    </div>
                </template>
                <p style="padding: 25px;display: flex;flex-wrap: wrap;justify-content: center" class="tab-content-1">
                    <t-back-top id="content_shop_content" container="#c" :visible-height="0" :offset="[20, 0]" style="position: absolute; right: 5px; top: 75vh"></t-back-top>

                    <template v-for="item in cover_list">
                        <t-card :cover="item[1]" theme="poster2" :style="{ width: '400px' }" :hover-shadow="true">
                            <template #footer>
                                <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" :author="item[0]" :content="item[2]" />
                            </template>
                            <template #actions>
                                <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
                                    <t-button variant="text" shape="square">
                                        <more-icon />
                                    </t-button>
                                </t-dropdown>
                            </template>
                        </t-card>
                    </template>
                </p>
            </t-tab-panel>
            <t-tab-panel value="second">
                <template #label>
                    <div style="" class="tabs-hover">
                        <span style="margin: 0 15px">学术类社团</span>
                    </div>
                </template>
                <p style="padding: 25px">
                    <not-found></not-found>
                </p>
            </t-tab-panel>
        </t-tabs>
    </div>

</template>

<style scoped>
.tab-content-1>*{
    margin: 10px;
}
#c::-webkit-scrollbar{
    display: none;
}
</style>

<script setup>
import {onMounted, ref} from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { MoreIcon } from 'tdesign-icons-vue-next';
import NotFound from "@/components/not-found.vue";
// import NotFound from "@/components/not-found.vue";

const value = ref('first');
const placement = ref('left');


const handlerChange = (newValue) => {
    value.value = newValue;
};

const clickHandler = (data) => {
    MessagePlugin.success(`选中【${data.content}】`);
};
const options = [
    {
        content: '查看',
        value: 1,
    },
    {
        content: '不感兴趣',
        value: 2,
    },
];
// const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';

const cover_list = [
    ['校外导师学生执行委员会','https://tse2-mm.cn.bing.net/th/id/OIP-C.KXn2w783zcWDAioxjXKXZQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',' 西交利物浦校外导师这个特殊的团队由一群具备爱心、智慧、责任的社会各界成功人士组成，他们是自身素养、知识、能力、智慧、拼搏与外部机遇的结晶，拥有成功的事业基础和丰富的人生阅历，他们是西浦学子的领路人，更是人生标杆。更难能可贵的是，他们积极主动地通过这个项目将自己的职场经验和行业知识传授给学生，指导学生进行职业生涯规划，为他们开启一扇通向社会的窗口。除此之外，他们还会为优秀的学生提供企业实习和就业的机会。对于西浦学生而言，校外导师是不可多得的资源，只等你来挖掘！   校外导师学生执行委员会旨在辅助四大导师体系之一的校外导师项目，通过举办讲座，企业参访等方式帮助学生有效的与校外导师沟通，获取准确的职业定位，从而提升学生的综合素质和职业竞争能力，让学生成长为更具国际视野的年轻的成年人。 校外导师执行委员会组织架构及各自职责如下：会长一名，副会长两名，共同负责组织的人事管理，日常运营；活动部部长四名，分别负责讲座沙龙，企业参访，校外导师采访，校外导师工作坊四项活动；部员若干，组织管理层会根据每学期的实际情况将部员分为若干小组，每次活动抽调其中一组，由相应的活动部部长指挥完成任务。 加入EMSEC，您可以：提前且深入地了解校外导师体系，为大三选择校外导师做充分的准备；更多与优秀校外导师认识及交流的机会；锻炼自己的社交能力，提升自己的管理及活动把控能力，定期获得一些技能培训（如ps，新媒体运营等）；与更多学长学姐进行交流，聆听他们与校外导师的故事，根据他们的建议，选择更加适合自己的校外导师。 EMSEC欢迎你的加入！'],
    ['心理协会','https://tse3-mm.cn.bing.net/th/id/OIP-C.df_PxkwMNyk1JNW3T9hLHgHaFj?w=199&h=180&c=7&r=0&o=5&dpr=2&pid=1.7','西浦心协（PSYA）全称西交利物浦大学心理协会，成立于2013年，是一个旨在传播心理学知识并且帮助在校学生解决心理问题的功能性组织。协会通过讲座、研讨会和心理游戏等形式为会员们提供一个温暖、有趣、健康的学习生活环境。'],
    ['西交利物浦大学青年志愿者协会','https://www.pku.edu.cn/Uploads/Picture/2019/12/02/u5de5346046c0d.jpg','西交利物浦青年志愿者协会成立于2008年6月，是由志愿从事公益事业的青年学生组成的全校性社会团体。青协是西浦目前最大公益组织，其旨在组织和指导全校青年学生志愿者的社会公益服务活动。协会奉行“奉献、友爱、团结、互助”的准则，使志愿者精神成为西浦精神的一部分。'],
    ['国际商务语言文化协会','https://tse2-mm.cn.bing.net/th/id/OIP-C.5c4UAoKrwFnb3yEwpVU8UgHaEq?rs=1&pid=ImgDetMain','我们是一个全球化的大家庭! ILCA 西交利物浦 (国际商务语言文化协会)ILCA 西交利物浦成立于2016年.这是第一个，也是最大的由国际学生和中国学生一起创建的组织。其团队旨在成为中国学生和国际生的桥梁，让国际生和中国学生有更多的交流。同时让学生在全球化的背景下更好的了解实际的商业管理策略。  ILCA分工清晰，组织严密。不同部门的人员在活动中发挥着不同作用。我们共有7个部门：   综合管理部门语言教育部              人事部               财务部          文化部          外联部.          市场部.国际生服务中心 (ISC)  【组织形象】我们是ILCA GLOBAL 在中国的总部和分支机构ILCA 中国愿景: 以爱，理解和尊重可持续全球化，成为世界的桥梁。使命: 我们的使命是增强可持续的全球化，实现彼此爱护以及通过教育和举办活动向周围的人和下一代传递全球化信息。 我们相信人类有一种潜在的利他主义，并期盼着未来一个互相理解和尊重彼此的全球大家庭。           '],
    ['学生新闻中心','https://tse4-mm.cn.bing.net/th/id/OIP-C.iMEWexzfP7ZJE5Ay76WshAHaE8?rs=1&pid=ImgDetMain','西交利物浦大学学生新闻中心成立于2009年，是西交利物浦大学内的一个校园学生媒体组织，同时也是江苏省高校传媒联盟的会员媒体之一。我们致力于用独特的视角和开放的思维展现西浦校园的精彩生活和西浦师生的别样风采，以微信公众号“西浦在线”发布了大量原创文章。学生新闻中心下设新闻、视频、图片三部门。日常职能包括新闻采写、新媒体运营、视频制作、美编拍摄、外联策划等。自由，前卫，创新，即时，已经成为了学生新闻中心的标签和特色。 '],
    ['学生宿舍委员会','https://tse3-mm.cn.bing.net/th/id/OIP-C.UYW1OAwdzFxNUx0tJLiNkgHaFj?w=193&h=180&c=7&r=0&o=5&dpr=2&pid=1.7','西交利物浦学生宿舍委员会成立于2009年，是一个学生自治组织。宿委希望能够通过一系列的活动帮助学生养成良好的生活习惯，营造健康的宿舍文化，同时帮助学生解决一些日常生活遇到的困难。同时，学生宿舍委员会作为连接学生、学校以及高教区物业公司的桥梁，我们也会收集学生们在生活中遇到的问题并反应给物业公司并通过沟通和协调督促他们尽快解决问题。学生宿舍委员会是个年轻而积极的组织，致力于打造更完善、更独特的大学宿舍体验。我们欢迎有奉献精神以及冒险精神的同学加入我们。'],
    ['学生大使联合会','https://tse2-mm.cn.bing.net/th/id/OIP-C.RciNR27HkkGTexOxLxk0uAHaE8?w=258&h=180&c=7&r=0&o=5&dpr=2&pid=1.7','西交利物浦大学学生大使联合会（Student Ambassador Union简称SAU）是西交利物浦大学招生与就业发展办公室领导的学生自治组织。在任何部门里，每个人都有属于自己的那一份气质，他们各不相同，有些人表现的是外在的那一份行云流水的谈吐，有些人表现的是内里的那一份宠辱不惊的从容。于此同时，我们也表现在内心的那一份自信、亲切与耐心。每一次寒假母校行，每一次校园开放日，每一次暑期高招会，我们的学生大使都以自己最最本真的特质向外界展现出一个很真实也很精彩的西浦。学生大使联合会----和西浦一起成长！'],
    ['学友计划执行委员会','https://www.pku.edu.cn/Uploads/Picture/2019/12/02/u5de5346adbaf2.jpg',' 学友执委会是负责学友计划组织与活动的学生组织目的是服务于全体学友并通过有效的管理来实现学友和学生之间的互相学习和良好交流，为全体学友的工作提供服务和支持。学友执委会的文化是家文化。职责支持、引导、推动全体学友工作，把握学友工作导向并引导学友。为学友制定工作计划和相关政策，并管理学友官方网站的运行。整合学友收集的意见和反馈，总结并评估学友的工作负责学友计划和其他导师制的协调工作，与相关老师反应交流。负责招募国内生学友、海外生学友、2+2学友并负责组织其培训工作推广并弘扬泛爱众学友文化，使其代代相传并逐渐丰富.  内部职务简介  组织部 承担学友执委会人力资源管理，管理活动流程，细心谨慎。  国际部 负责海外生、海外生学友相关的工作（需要一定英语基础）。  外联部 负责联系学友与导师、学校重要执行部门，以及和校外一些企业建立良好的合作关系。 宣传部负责设计制作各种宣传资料宣传学友文化及各类活动。文化发展中心 学友执委会的创意部门。负责管理网络平台，同时负责线上学友文化的推广及各类活动的宣传。策划部 承办活动，同时负责撰写各类活动的策划，脑中有较多创新的想法，思路清晰。  财政部 对内部门，主要负责学友执委会秘书和财务两大部分。 '],
    ['科技创新委员会','https://tse3-mm.cn.bing.net/th/id/OIP-C.WkMjDSdoXuBBaWaqeOaoJAHaFj?w=236&h=180&c=7&r=0&o=5&dpr=2&pid=1.7','西交利物浦大学科技创新协会成立于2009年，由热爱科技创新及科技实践事业的西交利物浦大学青年学生组成，是学校最早成立的组织类社团之一，也是目前最大的科技创新方向组织类社团。它立足本校，面向社会，负责我校学生课外学术科技活动的组织管理工作，主要专注于科研与科普。科技创新协会设有创意部，外联部，媒体部，综管部，课题研发部，科研中心六大部门，同时设有单片机活动组、VEX活动组、3D打印活动组和微信小程序活动组。举办的部分精彩活动有密室逃脱、玩家之夜、创客马拉松、知识分享官，以及诸多科技公司Workshop，期待同样热爱创新的你加入。'],
    ['青年合伙人协会','https://tse3-mm.cn.bing.net/th/id/OIP-C.ZEAfTLD41f7Dh-DLvClA0gHaE8?w=253&h=180&c=7&r=0&o=5&dpr=2&pid=1.7','YSPA青年合伙人协会是一个职业发展类组织，隶属于西浦就业中心。YSPA旨在连接西浦校园与校外职场, 引领西浦学子提高求职竞争力，成长为企业所需的职场精英。凭借丰富的企业雇主资源，协会日常开展简历书写及面试指导、职场经验分享、实习项目整合与推荐、校园招聘等活动，为社员提供与业界大佬面对面接触的机会，以及获取前沿实习信息与行业资讯的渠道。'],
]

onMounted(()=>{
    let num = document.getElementById('content_shop_content').offsetTop
    document.getElementById('c').addEventListener('scroll', function() {
        document.getElementById('content_shop_content').style.top = (document.getElementById('c').scrollTop + num).toString() + 'px'
    });
})
</script>
