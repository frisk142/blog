import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home_View.vue'

const routes = [
  { path: '/',
    name: 'HomeView',
    component: HomeView
  },

  { path: '/about',
    name: 'AboutView',
    component: () => import('@/views/About_View.vue')
  },

  { path: '/test', 
    name: 'Testviews',
    component: () => import('@/views/Test_view.vue')
  },

  { path: '/postdata',
    name: 'PostdataView', 
    component: () => import('@/views/Postdata_View.vue')
  },

  { path: '/posts/:type/:slug',
    name: 'PostDetail',
    component: () => import('@/views/Postdata_View.vue')
  },

  { path: '/gallery',
    name: 'GalleryView',
    component: () => import('@/views/Gallery_View.vue')
  },

  { path: '/gallery/:id',
    name: 'Gallerydetail',
    component: () => import('@/views/Gallerydetail_view.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router
