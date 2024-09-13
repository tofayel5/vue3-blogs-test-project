import { createRouter, createMemoryHistory } from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/cookie' // get token from cookie

// routes list
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/pages/tags/Tags.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/views/Dashboard.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/new-post',
    name: 'posts',
    component: () => import('@/views/Dashboard.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Registration.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: () => import( '@/views/pages/Error404.vue'),
    meta: { layout: 'auth' },
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach: ', to, from)
  if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
    store.commit('setLayout', 'auth');
  } else {
    store.commit('setLayout', 'app');
  }
  next(true);
  // const hasToken = getToken()
  // console.log('hasToken: ', hasToken)
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   }
  // } else {
  //   /* has no token*/
  //   next(`/login?redirect=${to.path}`)
  // }
  // next(true);
});

export default router
