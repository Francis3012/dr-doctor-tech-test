import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/LandingView.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/AccountView.vue')
    },
    {
        path: '/account/selection',
        name: 'selection',
        component: () => import('../views/AccountSelection.vue')
    },
    {
        path: '/account/:otp',
        name: 'otp',
        component: () => import('../views/AccountOTP.vue')
    },
    {
        path: '/account/user-account',
        name: 'user-account',
        component: () => import('../views/UserAccountPage.vue')
    },
  ]
})

export default router
