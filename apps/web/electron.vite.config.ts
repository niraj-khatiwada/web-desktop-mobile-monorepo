import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [TanStackRouterVite(), react()],
    build: {
      minify: 'terser'
    },
    clearScreen: false
  }
})
