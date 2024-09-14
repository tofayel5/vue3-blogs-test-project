import { createRouter, createWebHistory } from 'vue-router'

// routes list
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { layout: 'app' },
  },
    // Tag related route
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('@/views/pages/tags/Tags.vue'),
    meta: { layout: 'app' },
  },
    // Post related route
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('@/views/pages/post/Posts.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/new-post',
    name: 'NewPost',
    component: () => import('@/views/pages/post/PostAction.vue'),
    meta: { layout: 'app' },
  },
  {
    path: '/edit-post/:id',
    name: 'EditPost',
    component: () => import('@/views/pages/post/PostAction.vue'),
    meta: { layout: 'app' },
  },
    // Auth related route
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Registration.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: () => import( '@/views/pages/Error404.vue'),
    meta: { layout: 'auth' },
  }
]

const router = createRouter({
  history: createWebHistory(),
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
export default router
