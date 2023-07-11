import { NavigationGuardWithThis } from 'vue-router'

const userInfo = localStorage.getItem('userInfo')
const guard: NavigationGuardWithThis<undefined> = (to, _from, next) => {
  if (!userInfo) {
    if (to.name === 'login') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}
export default guard