import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../index.vue')
    },{
      path:'/login',
      name:'login',
      component: ()=>import('../components/login.vue')
    },{
      path:'/error',
      name:'error',
      component: ()=>import('../components/not-found.vue')
    }
  ]
})

export default router
