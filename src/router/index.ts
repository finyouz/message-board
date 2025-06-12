import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const mode: string = import.meta.env.VITE_ROUTER_MODE

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history: mode === 'history' ? createWebHistory() : createWebHashHistory(),
  routes
})

export default router
