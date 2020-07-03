export default [
  {
    path: '',
    redirect: '403'
  },
  {
    path: '404',
    name: 'exception404',
    component: () => import('@/views/exception/404'),
    meta: {
      title: '404'
    }
  },
  {
    path: '403',
    name: 'exception403',
    component: () => import('@/views/exception/403'),
    meta: {
      title: '403'
    }
  },
  {
    path: '500',
    name: 'exception500',
    component: () => import('@/views/exception/500'),
    meta: {
      title: '500'
    }
  }
]
