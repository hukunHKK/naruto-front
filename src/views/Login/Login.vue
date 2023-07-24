<template>
  <div class="center">
    <el-input v-model="userName" placeholder="请输入你的大名" style="margin-bottom: 10px;">
      <template #append>
        <el-button :icon="Right" @click="handlelogin" :loading="isLogining" />
      </template>
    </el-input>
    <el-input v-model="code" placeholder="请输入邮箱验证码" v-if="showCode" @input="handleloginFinally"></el-input>
  </div>
</template>
<script setup lang="tsx">
import { ref } from 'vue';
import { Right } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import gif from '@/assets/640.gif'
import { login, loginCode } from '_a/login'
import { useRouter } from 'vue-router'
import { useUser } from '@/store/user'

const { setUserInfo } = useUser()
const router = useRouter()

const userName = ref('')
const isLogining = ref(false)
const showCode = ref(false)
const handlelogin = async () => {
  if (userName.value === '') {
    showGif()
    return
  }
  isLogining.value = true
  const res: any = await login({ name: userName.value })
  isLogining.value = false
  if (res.code === 1) {
    showCode.value = true
  } else {
    ElMessage({
      duration: 5000,
      message: res.message,
      type: 'error'
    })
  }
}

const code = ref('')
const handleloginFinally = async () => {
  if (code.value.length === 4) {
    if (userName.value === '' || code.value === '') {
      showGif()
      return
    }
    const res: any = await loginCode({ name: userName.value, code: code.value })
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
  flex-direction: column;
  justify-content: center;
}
</style>