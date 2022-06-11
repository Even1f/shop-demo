import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')

const routes = [
  // 一级路由布局容器
  {
    paht: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
