import Vue from 'vue'
import VueRouter from 'vue-router'
import link from '@/views/link/index'
import Index from '@/views/Index'
import exceptionPage from './exception/index'

Vue.use(VueRouter)

const routes = [{
    path: '/exception',
    // component: exception,
    children: [...exceptionPage]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/index')
  },
  {
    path: '/',
    component: Index,
    children: [{
        path: '/Index/content',
        name: 'content',
        component: () => import('@/views/article/index')
      },
      {
        path: '/Index/article',
        name: 'article',
        component: () => import('../components/content/article'),

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
        path: '/Index/plan',
        name: 'plan',
        component: () => import('@/views/plan/index'),

      },
      {
        path: '/Index/play',
        component: () => import('@/views/play/index'),
        children: [{
          path: '/Index/play',
          name: 'nav',
          component: () => import('@/views/play/nav')
        }, {
          path: '/Index/play/randomColor',
          name: 'randomColor',
          component: () => import('@/views/play/randomColor')
        }]
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