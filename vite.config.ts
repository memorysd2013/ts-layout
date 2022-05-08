import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/**
 * @ElementPlus 自動引入 Element Plus 的 style
 * @Components 自動引入 components 插件 https://github.com/antfu/unplugin-vue-components
 * @ElementPlusResolver 自動引入 Element Plus components
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // setting 要最先載入, 否則 public 使用到變數時會報錯
        additionalData: `
          @use "src/scss/setting.scss" as *;
          @use "src/scss/elPlusRewrite.scss" as *;
          @use "src/scss/initial.scss" as *;
          @use "src/scss/public.scss" as *;
        `
      }
    }
  }
})