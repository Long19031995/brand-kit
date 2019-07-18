import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'view-button' }
    },
    {
      path: '/view-button',
      name: 'view-button',
      component: () => import('@/view/Button.vue')
    },
    {
      path: '/view-color',
      name: 'view-color',
      component: () => import('@/view/Color.vue')
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