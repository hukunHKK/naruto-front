import { NavigationGuardWithThis } from 'vue-router'
import { useUser } from './store/user'

const guard: NavigationGuardWithThis<undefined> = (to, _from, next) => {
  const { userInfo } = useUser()
  if (!userInfo) {
    if (to.name === 'login') {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.name === 'login') {
      next('/')
    } else {
      next()
    }
  }
}
export default guard