import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
    console.log(env)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    base: env.VITE_BASE_URL,
    plugins: [react()],
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },
    server: {
      port: 8013,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/assets/css/var.less";`
        }
      }
    }
  }
}
