/// <reference types="vite/client" />
// 用于环境变量的声明 增加无意义的expot让编译器识别为模块而不是脚本
export {}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_API: string
  readonly VITE_APP_TITLE: string
  // readonly VITE_DROP_DEBUGGER: string
  // readonly VITE_DROP_CONSOLE: string
  // readonly VITE_SOURCEMAP: string
  // readonly VITE_OUT_DIR: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
