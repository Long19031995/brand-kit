import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: { name: 'view-button' },
      component: () => import('@/view/Index.vue'),
      children: [
        {
          path: '/view-button',
          name: 'view-button',
          component: () => import('@/view/components/Button.vue')
        },
        {
          path: '/view-color',
          name: 'view-color',
          component: () => import('@/view/components/Color.vue')
        },
        {
          path: '/view-common',
          name: 'view-common',
          component: () => import('@/view/components/Common.vue')
        },
        {
          path: '/view-depths',
          name: 'view-depths',
          component: () => import('@/view/components/Depths.vue')
        },
        {
          path: '/view-form',
          name: 'view-form',
          component: () => import('@/view/components/Form.vue')
        },
        {
          path: '/view-grids',
          name: 'view-grids',
          component: () => import('@/view/components/Grids.vue')
        },
        {
          path: '/view-modals',
          name: 'view-modals',
          component: () => import('@/view/components/Modals.vue')
        },
        {
          path: '/view-pagination',
          name: 'view-pagination',
          component: () => import('@/view/components/Pagination.vue')
        },
        {
          path: '/view-typography',
          name: 'view-typography',
          component: () => import('@/view/components/Typography.vue')
        }
      ]
    }
  ]
})