<template>
  <div class="home-wrapper center">
    <span class="logout" @click="logout">注销</span>
    <RouterLink to="/healthy-website">你懂的</RouterLink>
    <template v-if="userInfo.role === 'admin'">
      <RouterLink to="/user-manage">用户管理</RouterLink>
      <RouterLink to="/login-record">登录记录</RouterLink>
      <RouterLink to="/visit-record">网站访问记录</RouterLink>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useUser } from '@/store/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const { userInfo, rmUserInfo } = useUser()
const logout = () => {
  rmUserInfo()
  router.push('/login')
}
</script>
<style scoped>
.home-wrapper {
  text-align: center;
  height: 100%;
}

.logout {
  position: absolute;
  top: 10px;
  right: 10px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>