import Vue from 'vue'
import VueRouter from 'vue-router'
import link from '@/views/link/index'
import Index from '@/views/Index'
import exceptionPage from './exception/index'

Vue.use(VueRouter)

const routes = [{
    path: '/article',
    name: 'article',
    component: () => import('../components/content/article'),

  },
  {
    path: '/exception',
    // component: exception,
    children: [...exceptionPage]
  },
  {
    path: '/',
    component: Index,
    children: [{
        path: '/Index/content',
        name: 'content',
        component: () => import('@/layouts/content/index')
      },
      {
        path: '/Index/about',
        name: 'about',
        component: () => import('@/views/about/index')
      },
      {
        path: '/Index/leaveAMessage',
        name: 'leaveAMessage',
        component: () => import('@/views/leaveAMessage/index')
      },
      {
        path: '/Index/backstage',
        name: 'backstage',
        component: () => import('@/views/backstage/index')
      },
      {
        path: '/Index/login',
        name: 'login',
        component: () => import('@/components/login/index')
      },
      {
        path: '*',
        name: 'link',
        component: link
      },

    ]
  },



]



const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router