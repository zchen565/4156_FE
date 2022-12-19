import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ApplyView from '../views/ApplyView.vue'
import GetSenderView from '../views/GetSenderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      // path: '/page/:id',
      path: '/apply',
      name: 'apply',
      component: ApplyView
    },
    {
      // path: '/page/:id',
      path: '/get_by_sender',
      name: 'get_by_sender',
      component: GetSenderView
    }
  ]
})

export default router
