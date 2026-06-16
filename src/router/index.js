import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home_View.vue'
import AboutView from '../views/About_View.vue'
import Testviews from '../views/Test_view.vue'


const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {path:'/test', component: Testviews}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
