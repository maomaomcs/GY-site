<script setup>
import {computed, reactive, ref} from 'vue';
import {MessagePlugin} from 'tdesign-vue-next';
import axios from "axios";

const handleChange = (value) => {
    console.log('handleChange:', value);
};
const value = ref({value: '1', label: '選項一'});

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
});
const rules = {
    account: [
        {required: true, message: '姓名必填', type: 'error', trigger: 'blur'},
        {required: true, message: '姓名必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '姓名不能為空'},
        {min: 3, message: '輸入字數應在3到6之間', type: 'error', trigger: 'blur'},
        {max: 6, message: '輸入字數應在3到6之間', type: 'error', trigger: 'blur'},
    ],
    password: [{required: true, message: '密碼必填', type: 'error'}],
    email: [{required: true, message: '格式必須為郵箱', type: 'warning'}],
    age: [
        {required: true, message: '年齡必填', type: 'error'},
        {number: true, message: '請輸入數字', type: 'warning'},
    ],
    gender: [{required: true, message: '性別必填', type: 'warning'}],
};

const emailSuffix = ['@qq.com', '@163.com', '@gmail.com'];
const emailOptions = computed(() => {
    const emailPrefix = formData.email.split('@')[0];
    if (!emailPrefix) return [];

    return emailSuffix.map((suffix) => emailPrefix + suffix);
});

const login_in_form = ref(null)
const login_formData = reactive({
    account: '',
    password: '',
});
const login_rules = {
    account: [
        {required: true, message: '用戶id必填', type: 'error', trigger: 'blur'},
        {required: true, message: '用戶id必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '用戶id不能為空'},
        {min: 5, message: '輸入字數應在5到11之間', type: 'error', trigger: 'blur'},
        {max: 11, message: '輸入字數應在5到11之間', type: 'error', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '密碼必填', type: 'error', trigger: 'blur'},
        {required: true, message: '密碼必填', type: 'error', trigger: 'change'},
        {whitespace: true, message: '密碼不能為空'},
        {min: 8, message: '輸入字數應在8到16之間', type: 'error', trigger: 'blur'},
        {max: 16, message: '輸入字數應在8到16之間', type: 'error', trigger: 'blur'},
    ],
}

const onReset = () => {
    MessagePlugin.success('重置成功');
};

const onSubmit = ({validateResult, firstError, e}) => {
    e.preventDefault();
    if (validateResult === true) {
        const url = 'http://127.0.0.1:5000/get_login'; // 目標API的URL
        axios.post(url, formData, {
            headers: {},
            withCredentials: true,
        }).then((data) => {
            let result = data['data']
            if (result['code'] === 0) {
                MessagePlugin.success('註冊成功,你的賬號為: ' + result['user_id']);
            } else if (result['code'] === 2) {
                MessagePlugin.success("註冊失敗,因為: " + result['msg'])
            } else {
                MessagePlugin.success("註冊失敗,請重新嘗試")
            }
        });
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};

const onSubmit1 = ({validateResult, firstError, e}) => {
    e.preventDefault();
    if (validateResult === true) {
        const url = 'http://127.0.0.1:5000/get_login_in'; // 目標API的URL
        axios.post(url, login_formData, {
            headers: {}, withCredentials: true,
        }).then((res) => {
            console.log(res);
            if (res['data']['code'] === 200){
                document.cookie = "token=" + res["token"] + "; path=/";
                window.location.href = 'http://localhost:5173/';
            }
            else{
                MessagePlugin.error("登錄失敗,請檢查賬號或密碼")
            }

        });
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};
</script>

<template>
    <div class="login">
        <div class="right" style="padding: 15px">
            <div class="top">
                <div class="_logo">
                    <img src="../../public/logo/Photo.png" alt="" style="width: 60%;font-size: 0">
                    <span style="font-size: 25px">GrandBlossom</span>
                </div>
                <div class="_title">
                </div>
            </div>
            <div class="content" style="padding: 15px;border-radius: 8px;overflow: hidden;border:1px solid rgba(128,128,128,0.6)">
                <t-tabs :value="value_tab" :theme="theme" @change="handlerChange">
                    <t-tab-panel value="first" style="padding: 10px">
                        <template #label>
                            <t-icon name="home" class="tabs-icon-margin"/>
                            登錄
                        </template>
                        <t-form ref="login_in_form" :data="login_formData" :rules="login_rules" @reset="onReset"
                                @submit="onSubmit1">
                            <t-form-item label="用戶名" help="" name="account">
                                <t-input v-model="login_formData.account"></t-input>
                            </t-form-item>
                            <t-form-item label="密碼" help="" name="password">
                                <t-input v-model="login_formData.password" type="password"></t-input>
                            </t-form-item>
                            <t-form-item>
                                <t-button theme="primary" type="submit" class="submit">提交</t-button>
                                <t-button theme="default" variant="base" type="reset">重置</t-button>
                            </t-form-item>
                        </t-form>

                    </t-tab-panel>
                    <t-tab-panel value="second" style="padding: 10px">
                        <template #label>
                            <t-icon name="calendar" class="tabs-icon-margin"/>
                            註冊
                        </template>
                        <t-form ref="form" :data="formData" :rules="rules" @reset="onReset" @submit="onSubmit">
                            <t-form-item label="用戶名" help="這是用戶名字段幫助說明" name="account">
                                <t-input v-model="formData.account"></t-input>
                            </t-form-item>

                            <t-form-item label="個人簡介" help="一句話介紹自己" name="description">
                                <t-input v-model="formData.description"></t-input>
                            </t-form-item>

                            <t-form-item label="密碼" name="password">
                                <t-input v-model="formData.password" type="password"></t-input>
                            </t-form-item>

                            <t-form-item label="郵箱" name="email">
                                <t-auto-complete v-model="formData.email" :options="emailOptions"
                                                 :filterable="false"></t-auto-complete>
                            </t-form-item>

                            <t-form-item label="年齡" name="age">
                                <t-input-number v-model="formData.age"/>
                            </t-form-item>

                            <t-form-item label="性別" name="gender">
                                <t-radio-group v-model="formData.gender">
                                    <t-radio value="male">男</t-radio>
                                    <t-radio value="femal">女</t-radio>
                                </t-radio-group>
                            </t-form-item>
                            <t-form-item>
                                <t-button theme="primary" type="submit" class="submit">提交</t-button>
                                <t-button theme="default" variant="base" type="reset">重置</t-button>
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
.submit{
    background-color: green;
}
.login {
        padding: 20px 10px 54px;
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