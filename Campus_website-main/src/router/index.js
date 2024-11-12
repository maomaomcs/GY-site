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
    {
      path: '/businessvaluation',
      name: 'businessvaluation',
      component: () => import('../components/Audit_and_tax_services/business valuation.vue') 
    },
    {
      path: '/statutory-audit',
      name: 'statutory-audit',
      component: () => import('../components/Audit_and_tax_services/statutory-audit.vue') 
    },
    {
      path: '/PerformProcedures',
      name: 'PerformProcedures',
      component: () => import('../components/Audit_and_tax_services/Perform Agreed - upon Procedures.vue') 
    },
    {
      path: '/TaxConsultation',
      name: 'TaxConsultation',
      component: () => import('../components/Audit_and_tax_services/Tax Consultation.vue') 
    },
    {
      path: '/CPA',
      name: 'CPA',
      component: () => import('../components/Audit_and_tax_services/CPA.vue') 
    },
    {
      path: '/duediligence',
      name: 'duediligence',
      component: () => import('../components/Audit_and_tax_services/due diligence.vue') 
    },
    {
      path: '/Corporate',
      name: 'Corporate',
      component: () => import('../components/Audit_and_tax_services/Corporate mergers and acquisitions.vue') 
    },
    {
      path: '/Immigrationaudit',
      name: 'Immigrationaudit',
      component: () => import('../components/Audit_and_tax_services/Immigration audit.vue') 
    },
    {
      path: '/Listingplanning',
      name: 'Listingplanning',
      component: () => import('../components/Audit_and_tax_services/Listing planning.vue') 
    },
    {
      path: '/Financialaudit',
      name: 'Financialaudit',
      component: () => import('../components/Audit_and_tax_services/Financial audit.vue') 
    },
    {
      path: '/Environmental',
      name: 'Environmental',
      component: () => import('../components/Audit_and_tax_services/Environmental, social and governance (ESG) report.vue') 
    },
    {
      path: '/nternalreview',
      name: 'nternalreview',
      component: () => import('../components/Audit_and_tax_services/nternal control review.vue') 
    },
    {
      path: '/AppointedDirector',
      name: 'AppointedDirector',
      component: () => import('../components/Audit_and_tax_services/Appointed Director.vue') 
    },
    {
      path: '/Macaucompany',
      name: 'Macaucompany',
      component: () => import('../components/Audit_and_tax_services/Macau subsidiary company.vue') 
    },
    {
      path: '/Listedcompanyservices',
      name: 'Listedcompanyservices',
      component: () => import('../components/Audit_and_tax_services/Listed company services.vue') 
    },
    {
      path: '/Enterpriseriskmanagement',
      name: 'Enterpriseriskmanagement',
      component: () => import('../components/Audit_and_tax_services/Enterprise risk management.vue') 
    },
    {
      path: '/qitafuwu',
      name: '/qitafuwu',
      component: () => import('../components/other/qitafuwu.vue') 
    }
  ]
})

export default router
