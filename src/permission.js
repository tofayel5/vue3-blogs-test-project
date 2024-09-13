import router from './router'
import { getToken } from '@/utils/cookie' // get token from cookie


const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {

  // determine whether the user has logged in
  const hasToken = getToken()
  console.log('hasToken: ', hasToken)
  console.log('beforeEach: ', to, from)
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {

})
