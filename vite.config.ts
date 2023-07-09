import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0',
    proxy:{
      '/naruto':{
        target: 'http://localhost:3000',
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      '_v':resolve(__dirname,'src/views'),
      '_c':resolve(__dirname,'src/components'),
      '_a':resolve(__dirname,'src/api'),
    }
  }
})
