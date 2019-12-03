import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/views/content/index'
import About from '@/views/about/index'
import Index from '@/views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/Index/content',
        name: 'content',
        component: Content
      },
      {
        path: '/Index/about',
        name: 'about',
        component: About
      },
      
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
