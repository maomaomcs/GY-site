import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import App from './app.vue';
// import Login from './app.vue';
import router from './router/index'
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
// import Cookies_vue from 'js-cookie';
import axios from 'axios'
import '@/assets/base1.css'
const app = createApp(App)
app.config.globalProperties.$axios = axios
// app.config.globalProperties.$token = ''
app.use(router).use(TDesign).mount('#app')

