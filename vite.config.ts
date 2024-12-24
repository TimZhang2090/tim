import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 构建产物平铺
  build: {
    rollupOptions: {
      output: {
        // 让所有 JS 和 CSS 文件平铺在 dist 目录下
        entryFileNames: '[name].js', // 入口文件 JS 使用文件名作为文件名
        chunkFileNames: '[name].js', // 代码拆分生成的 chunk 也平铺
        assetFileNames: '[name].[ext]', // 其他资源（例如图片、字体等）直接放在 dist 目录下，保持原有文件名
      },
    },
  },
})
