import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../components/not-found.vue')
    },
    {
      path: '/company-opened',
      name: 'CompanyOpened',
      component: () => import('../components/Secretarial accounting services/CompanyOpened.vue') // 公司开业页面
    },
    {
      path: '/CompanySupport',
      name: 'CompanySupport',
      component: () => import('../components/Secretarial accounting services/Company support.vue') // 公司开业页面
    },
    {
      path: '/FinancialAccounting',
      name: 'FinancialAccounting',
      component: () => import('../components/Secretarial accounting services/Financial Accounting.vue') // 公司开业页面
    },
    {
      path: '/Openingabank',
      name: 'Openingabank',
      component: () => import('../components/Secretarial accounting services/Opening a bank.vue') // 公司开业页面
    },
    {
      path: '/Payrollmanagement',
      name: 'Payrollmanagement',
      component: () => import('../components/Secretarial accounting services/Payroll management.vue') // 公司开业页面
    },
    {
      path: '/Secretarialservices',
      name: 'Secretarialservices',
      component: () => import('../components/Secretarial accounting services/Secretarial services.vue') 
    },
    {
      path: '/Zhuce',
      name: 'Zhuce',
      component: () => import('../components/Secretarial accounting services/Zhuce.vue') 
    },
  ]
})

export default router
