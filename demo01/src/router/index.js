import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApiView from '../views/ApiView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CommentView from '../views/CommentView.vue'
import SearchView from '../views/SearchView.vue'
import ScoreView from '../views/ScoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: ApiView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/comment',
      name: 'comment',
      component: CommentView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
    ,
    {
      path: '/score/:id',
      name: 'professorscore',
      component: ScoreView
    }
  ]
})

export default router
