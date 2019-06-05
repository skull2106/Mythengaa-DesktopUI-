
const routes = [
  {
    path: '/studentcorner',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/studentcorner.vue') }
    ]
  },
  {
    path: '/subcategory1',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/subcategory1.vue') }
    ]
  },
  {
    path: '/registration',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/registration.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
