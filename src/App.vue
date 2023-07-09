<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue';
const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="app-wrapper">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<style scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
