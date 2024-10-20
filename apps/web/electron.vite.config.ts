import { resolve } from 'path'
import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { compression } from 'vite-plugin-compression2'

const isDesktop =
  process.argv
    .slice(2)
    .find((arg) => arg.startsWith('--platform='))
    ?.slice('--platform='.length) === 'desktop'

console.log(`\x1b[33m🚀 Building for ${isDesktop ? 'DESKTOP' : 'WEB'} \x1b[0m`)

const plugins: PluginOption[] = [
  TanStackRouterVite({ routesDirectory: resolve('src/renderer/src/app') }), // tsr.config.json works only when it is placed in the renderer folder
  react()
]
if (!isDesktop) {
  plugins.push(compression({ algorithm: 'brotliCompress' }))
}

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
    plugins,
    build: {
      minify: 'terser'
    },
    clearScreen: false
  }
})
