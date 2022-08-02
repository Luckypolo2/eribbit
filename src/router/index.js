import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/home/index'
import Layout from '@/views/Layout'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: HomePage }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
