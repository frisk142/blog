import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home_Views.vue'
import AboutView from '../views/About_Views.vue'


const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
