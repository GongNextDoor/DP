import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/security-fund',
    children: [
      {
        path: 'security-fund',
        component: () => import('@/views/sbjj/index'),
        name: 'sbjj',
        meta: { title: '社保基金' }
      },
      {
        path: 'public-employment',
        component: () => import('@/views/publicEmployment/index'),
        name: 'PublicEmployment',
        meta: { title: '公共就业服务' }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
