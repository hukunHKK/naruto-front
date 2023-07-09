import * as VueRouter from 'vue-router'
import permissions from '../permission'

const routes = [
  { path: '/', component: ()=>import('_v/Home/Home.vue'),name:'home' },
  { path: '/healthy-website', component: ()=>import('_v/ShareWebsite/ShareWebsite.vue'),name:'healthyWebsite' },
  { path: '/login', component: ()=>import('_v/Login/Login.vue'),name:'login' },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

router.beforeEach(permissions)

export default router