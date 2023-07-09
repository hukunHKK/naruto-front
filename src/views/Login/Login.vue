<template>
  <div class="center">
    <el-input v-model="userName" placeholder="请输入你的大名">
      <template #append>
        <el-button :icon="Right" @click="login" />
      </template>
    </el-input>
  </div>
</template>
<script setup lang="tsx">
import { h, ref } from 'vue';
import { Right } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import gif from '@/assets/640.gif'

const userName = ref('')
const login = () => {
  showGif()
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