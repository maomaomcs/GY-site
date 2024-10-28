<script setup>
import {computed, reactive, ref} from 'vue';
import {MessagePlugin} from 'tdesign-vue-next';
import axios from "axios";
// import {token} from '@/token'
// const options = [
//     {label: '选项一', value: '1'},
//     {label: '选项二', value: '2'},
//     {label: '选项三', value: '3'},
// ];

const handleChange = (value) => {
    console.log('handleChange:', value);
};
const value = ref({value: '1', label: '选项一'});

const value_tab = ref('first');
const theme = ref('normal');

const handlerChange = (newValue) => {
    value_tab.value = newValue;
};

const form = ref(null);
const formData = reactive({
    account: '',
    password: '',
    email: '',
    age: undefined,
    gender: '',
    course: [],
    college: '',
    date: '',
    content: {
        url: '',
    },
});
const rules = {
    account: [
        {required: true, message: '姓名必填', type: 'error', trigger: 'blur'},
        {required: true, message: '姓名必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '姓名不能为空'},
        {min: 3, message: '输入字数应在3到6之间', type: 'error', trigger: 'blur'},
        {max: 6, message: '输入字数应在3到6之间', type: 'error', trigger: 'blur'},
    ],
    password: [{required: true, message: '密码必填', type: 'error'}],
    email: [{required: true, message: '格式必须为邮箱', type: 'warning'}],
    age: [
        {required: true, message: '年龄必填', type: 'error'},
        {number: true, message: '请输入数字', type: 'warning'},
    ],
    gender: [{required: true, message: '性别必填', type: 'warning'}],
    course: [{required: true, message: '身份必填', type: 'warning'}],
    college: [
        // 注意：trigger: blur 仅在输入框或选择框失去焦点时触发，需要注意配合 trigger: change 使用
        {required: true, message: '学院必选', type: 'warning', trigger: 'blur'},
        {required: true, message: '学院必选', type: 'warning', trigger: 'change'},
    ],
    'content.url': [
        {required: true, message: '个人网站必填', type: 'warning'},
        {
            url: {
                protocols: ['http', 'https', 'ftp'],
                require_protocol: true,
            },
            message: '请输入正确的个人主页',
        },
    ],
};
const courseOptions = [
    {label: '教师', value: '1'},
    {label: '学生', value: '2'},
    {label: '其他', value: '3'},
];
const emailSuffix = ['@qq.com', '@163.com', '@gmail.com'];
const emailOptions = computed(() => {
    const emailPrefix = formData.email.split('@')[0];
    if (!emailPrefix) return [];

    return emailSuffix.map((suffix) => emailPrefix + suffix);
});
const options = [
    {label: '计算机学院', value: '1'},
    {label: '软件学院', value: '2'},
    {label: '物联网学院', value: '3'},
];

const login_in_form = ref(null)
const login_formData = reactive({
    account: '',
    password: '',
    agreed: []
});
const login_rules = {
    account: [
        {required: true, message: '用户id必填', type: 'error', trigger: 'blur'},
        {required: true, message: '用户id必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '用户id不能为空'},
        {min: 5, message: '输入字数应在5到11之间', type: 'error', trigger: 'blur'},
        {max: 11, message: '输入字数应在5到11之间', type: 'error', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '密码必填', type: 'error', trigger: 'blur'},
        {required: true, message: '密码必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '密码不能为空'},
        {min: 8, message: '输入字数应在8到16之间', type: 'error', trigger: 'blur'},
        {max: 16, message: '输入字数应在8到16之间', type: 'error', trigger: 'blur'},
    ],
    agreed: [
        {required: false, message: '', type: 'warning'}
    ]
}

const loginOptions = [
    {label: '已阅读并同意我校 用户协议 和 隐私政策', value: true},
];

const onReset = () => {
    MessagePlugin.success('重置成功');
};

const onSubmit = ({validateResult, firstError, e}) => {
    e.preventDefault();
    if (validateResult === true) {
        const url = 'http://127.0.0.1:5000/get_login'; // 目标API的URL
        axios.post(url, formData, {
            headers: {},
            withCredentials: true,
        }).then((data) => {
            let result = data['data']
            if (result ['code'] === 0) {
                MessagePlugin.success('注册成功,你的账号为: ' + result['user_id']);
            } else if (result['code'] === 2) {
                MessagePlugin.success("注册失败,因为: " + result['msg'])
            } else {
                MessagePlugin.success("注册失败,请重新尝试")
            }
        });
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};

const onSubmit1 = ({validateResult, firstError, e}) => {
    e.preventDefault();
    console.log(login_formData.agreed[0])
    if (login_formData.agreed[0] === undefined) {
        MessagePlugin.warning("请先同意协议");
        return;
    }
    if (validateResult === true) {
        const url = 'http://127.0.0.1:5000/get_login_in'; // 目标API的URL
        axios.post(url, login_formData, {
            headers: {}, withCredentials: true,
        }).then((res) => {
            console.log(res);
            if (res['data']['code'] === 200){
                document.cookie = "token=" + res["token"] + "; path=/";
                window.location.href = 'http://localhost:5173/';
            }
            else{
                MessagePlugin.error("登录失败,请检查账号或密码")
            }

        });
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};

const handleClear = () => {
    form.value.clearValidate();
};

const handleClear1 = () => {
    login_in_form.value.clearValidate();
};

</script>

<template>
    <div class="login">
        <div class="right" style="padding: 15px">
            <div class="top">
                <div class="_logo">
                    <img src="../../public/logo/school.jpg" alt="" style="width: 20%;font-size: 0">
                    <span style="font-size: 25px">校园账号</span>
                </div>
                <div class="_title">
                    <div>
                        <a href="">用户协议</a>
                        <a href="">隐私政策</a>
                        <a href="">帮助中心</a>
                    </div>
                    <div>
                        <t-select v-model="value" value-type="object" :clearable="true" placeholder="-请选择-"
                                  :options="options" style="width: 200px; display: inline-block; margin-right: 20px"
                                  @change="handleChange"/>
                    </div>
                </div>
            </div>
            <div class="content" style="padding: 15px;border-radius: 8px;overflow: hidden;border:1px solid rgba(128,128,128,0.6)">
                <t-tabs :value="value_tab" :theme="theme" @change="handlerChange">
                    <t-tab-panel value="first" style="padding: 10px">
                        <template #label>
                            <t-icon name="home" class="tabs-icon-margin"/>
                            登录
                        </template>
                        <t-form ref="login_in_form" :data="login_formData" :rules="login_rules" @reset="onReset"
                                @submit="onSubmit1">
                            <t-form-item label="用户名" help="" name="account">
                                <t-input v-model="login_formData.account"></t-input>
                            </t-form-item>
                            <t-form-item label="密码" help="" name="password">
                                <t-input v-model="login_formData.password"></t-input>
                            </t-form-item>
                            <t-form-item label="" help="" name="agreed">
                                <t-checkbox-group v-model="login_formData.agreed"
                                                  :options="loginOptions"></t-checkbox-group>
                            </t-form-item>
                            <t-form-item>
                                <t-space size="small">
                                    <t-button theme="primary" type="submit">提交</t-button>
                                    <t-button theme="default" variant="base" type="reset">重置</t-button>
                                    <t-button theme="default" variant="base" @click="handleClear1">清空校验结果
                                    </t-button>
                                </t-space>
                            </t-form-item>
                        </t-form>

                    </t-tab-panel>
                    <t-tab-panel value="second" style="padding: 10px">
                        <template #label>
                            <t-icon name="calendar" class="tabs-icon-margin"/>
                            注册
                        </template>
                        <t-form ref="form" :data="formData" :rules="rules" @reset="onReset" @submit="onSubmit">
                            <t-form-item label="用户名" help="这是用户名字段帮助说明" name="account">
                                <t-input v-model="formData.account"></t-input>
                            </t-form-item>

                            <t-form-item label="个人简介" help="一句话介绍自己" name="description">
                                <t-input v-model="formData.description"></t-input>
                            </t-form-item>

                            <t-form-item label="密码" name="password">
                                <t-input v-model="formData.password" type="password"></t-input>
                            </t-form-item>

                            <t-form-item label="邮箱" name="email">
                                <t-auto-complete v-model="formData.email" :options="emailOptions"
                                                 :filterable="false"></t-auto-complete>
                            </t-form-item>

                            <t-form-item label="年龄" name="age">
                                <t-input-number v-model="formData.age"/>
                            </t-form-item>

                            <t-form-item label="性别" name="gender">
                                <t-radio-group v-model="formData.gender">
                                    <t-radio value="male">男</t-radio>
                                    <t-radio value="femal">女</t-radio>
                                </t-radio-group>
                            </t-form-item>

                            <t-form-item label="身份" name="course">
                                <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
                            </t-form-item>

                            <t-form-item label="学院" name="college">
                                <t-select v-model="formData.college" class="demo-select-base" :clearable="true"
                                          :filterable="false">
                                    <t-option v-for="(item, index) in options" :key="index" :value="item.value"
                                              :label="item.label">
                                        {{ item.label }}
                                    </t-option>
                                </t-select>
                            </t-form-item>

                            <t-form-item
                                label="入学时间"
                                name="date"
                                :rules="[
        { required: true, message: '此项必填' },
        { date: { delimiters: ['/', '-', '.'] }, message: '日期格式有误' },
      ]"
                            >
                                <t-input v-model="formData.date"></t-input>
                            </t-form-item>

                            <t-form-item label="个人网站" name="content.url">
                                <t-input v-model="formData.content.url"></t-input>
                            </t-form-item>

                            <t-form-item>
                                <t-space size="small">
                                    <t-button theme="primary" type="submit">提交</t-button>
                                    <t-button theme="default" variant="base" type="reset">重置</t-button>
                                    <t-button theme="default" variant="base" @click="handleClear">清空校验结果
                                    </t-button>
                                </t-space>
                            </t-form-item>
                        </t-form>
                    </t-tab-panel>
                </t-tabs>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../../web/main.css";
@import "../../web/DHome.css";

.login {
    width: 100%;
    display: flex;
}

.login .left {
    width: 30%;
    font-size: 0;
}

.login .right {
    width: 70%;
    margin: 10px auto;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(128,128,128,0.4);
}

.login .right .top {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login ._logo {
    width: 20%;
    display: flex;
    align-items: center;
}

.login ._title {
    display: flex;
    align-items: center;
}

.login .top a {
    margin: 0 10px;
}

.login .content {
    width: 60%;
    margin: 0 auto;
}
</style>

<style lang="less">
.tabs-icon-margin {
    margin-right: 4px;
}
</style>