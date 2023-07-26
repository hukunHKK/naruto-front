import * as VueRouter from 'vue-router'
import permissions from '../permission'

const routes = [
  { path: '/', component: () => import('_v/Home/Home.vue'), name: 'home' },
  { path: '/healthy-website', component: () => import('_v/ShareWebsite/ShareWebsite.vue'), name: 'healthyWebsite' },
  { path: '/login', component: () => import('_v/Login/Login.vue'), name: 'login' },
  { path: '/user-manage', component: () => import('_v/UserManage/UserManage.vue'), name: 'userManage' },
  { path: '/login-record', component: () => import('_v/Login/LoginRecord.vue'), name: 'loginRecord' },
  { path: '/visit-record', component: () => import('_v/ShareWebsite/VisitRecord.vue'), name: 'visitRecord' },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

router.beforeEach(permissions)

export default router