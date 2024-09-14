import router from './router'
import store from './store'
import { getToken } from '@/utils/cookie' // get token from cookie

// router global guard
router.beforeEach((to, from, next) => {
  // layout set
  const whiteRouteList = ['Login', 'Register']
  if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
    store.commit('setLayout', 'auth');
  } else {
    store.commit('setLayout', 'app');
  }
  // determine whether the user has logged in
  const hasToken = getToken()
  console.log('hasToken: ', hasToken)
  console.log('beforeEach: ', to, from)
  if (!whiteRouteList.includes(to.name) && !hasToken) {
    next({ name: 'Login' })
  } else {
   next()
  }
})
router.afterEach(() => {

})
