import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'

// @ts-ignore: Vite does not allow importing like this "webapp/vite.config.ts", so this is the work around.
import webappConfig from '../../packages/webapp/vite.config'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  renderer: {
    plugins: webappConfig.plugins,
    clearScreen: false
  }
})
