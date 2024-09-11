import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

// routes list
const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/auth/register',
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
  history: createWebHistory(import.meta.env.BASE_URL),
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
  if (to.meta && to.meta.layout && to.meta.layout === 'auth') {
    store.commit('app/setLayout', 'auth');
  } else {
    store.commit('app/setLayout', 'app');
  }
  next(true);
});

export default router
