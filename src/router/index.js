import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home_View.vue'
import AboutView from '../views/About_View.vue'
import Testviews from '../views/Test_view.vue'
import PostdataView from '../views/Postdata_View.vue'
import GalleryView from '../views/Gallery_View.vue'


const routes = [
  {path: '/', component: HomeView},

  {path: '/about', component: AboutView},

  {path: '/test', component: Testviews},

  {path: '/postdata', component: PostdataView},

  {
    path: '/posts/:type/:slug',
    name: 'PostDetail',
    component: PostdataView
  },

  {path: '/gallery',
   name: 'GalleryView',
   component: GalleryView
  },

  {path: '/gallery/:id',
   name: 'Gallerydetail',
   component: () => import('@/views/Gallerydetail_view.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router
