// app.config.ts
import { defineConfig } from '@tanstack/start/config'
import path from 'path'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  tsr: {
    appDirectory: path.resolve('./src'),
    routesDirectory: path.resolve('./src/routes'),
    generatedRouteTree: path.resolve('./src/routeTree.gen.ts'),
  },
  routers: {
    client: {
      entry: path.resolve('./src/client.entry.tsx'),
    },
    ssr: {
      entry: path.resolve('./src/ssr.entry.tsx'),
    },
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
