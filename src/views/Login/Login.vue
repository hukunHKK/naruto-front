<template>
  <div class="center">
    <el-input v-model="userName" placeholder="请输入你的大名">
      <template #append>
        <el-button :icon="Right" @click="handlelogin" />
      </template>
    </el-input>
  </div>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import { Right } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import gif from '@/assets/640.gif'
import { login } from '_a/login'
import { useRouter } from 'vue-router'
import { useUser } from '@/store/user'

const { setUserInfo } = useUser()
const router = useRouter()

const userName = ref('')
const handlelogin = async () => {
  if (userName.value === '') {
    showGif()
    return
  }
  const res: any = await login({ name: userName.value })
  if (res.code === 1) {
    setUserInfo({ name: userName.value })
    router.push('/')
  } else {
    ElMessage({
      duration: 5000,
      message: res.message,
      type: 'error'
    })
  }
}
const showGif = () => {
  ElMessage({
    duration: 5000,
    message: <img src={gif}></img>,
    type: 'error'
  })
}
</script>
<style scoped>
.center {
  margin: auto;
  width: 80%;
  height: 100%;
  display: flex;
  place-items: center;
}
</style>