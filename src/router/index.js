import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'view-logo' }
    },
    {
      path: '/logo',
      name: 'view-logo',
      component: () => import('@/view/Logo.vue')
    },
    {
      path: '/logo-app',
      name: 'view-logo-app',
      component: () => import('@/view/LogoApp.vue')
    },
    {
      path: '/icons',
      name: 'view-icons',
      component: () => import('@/view/Icons.vue')
    },
    {
      path: '/view-buttons',
      name: 'view-buttons',
      component: () => import('@/view/Buttons.vue')
    },
    {
      path: '/view-colors',
      name: 'view-colors',
      component: () => import('@/view/Colors.vue')
    },
    {
      path: '/view-common',
      name: 'view-common',
      component: () => import('@/view/Common.vue')
    },
    {
      path: '/view-depths',
      name: 'view-depths',
      component: () => import('@/view/Depths.vue')
    },
    {
      path: '/view-form',
      name: 'view-form',
      component: () => import('@/view/Form.vue')
    },
    {
      path: '/view-grids',
      name: 'view-grids',
      component: () => import('@/view/Grids.vue')
    },
    {
      path: '/view-modals',
      name: 'view-modals',
      component: () => import('@/view/Modals.vue')
    },
    {
      path: '/view-pagination',
      name: 'view-pagination',
      component: () => import('@/view/Pagination.vue')
    },
    {
      path: '/view-typography',
      name: 'view-typography',
      component: () => import('@/view/Typography.vue')
    }
  ]
})