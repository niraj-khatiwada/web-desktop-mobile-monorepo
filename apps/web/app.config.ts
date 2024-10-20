import path from 'path'
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  tsr: {
    appDirectory: path.resolve('./app'),
    routesDirectory: path.resolve('../../packages/webapp/src/routes'),
    generatedRouteTree: path.resolve(
      '../../packages/webapp/src/routeTree.gen.ts',
    ),
  },
})
