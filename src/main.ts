import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/es/components/message/style/css'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
