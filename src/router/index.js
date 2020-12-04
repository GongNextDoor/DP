import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/sbjj',
    children: [
      {
        path: 'fund',
        component: () => import('@/views/fund/index'),
        name: 'fund',
        meta: { title: '社保基金' }
      },
      {
        path: 'sbjj',
        component: () => import('@/views/sbjj/index'),
        name: 'sbjj',
        meta: { title: '社保基金' }
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
