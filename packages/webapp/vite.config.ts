import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: path.resolve('./src/routes'),
      generatedRouteTree: path.resolve('./src/routeTree.gen.ts')
    }),
    react()
  ]
})
