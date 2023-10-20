import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  envDir: 'env',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  //   open: true
  // },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/css/var.less";`
      }
    }
  }
})
