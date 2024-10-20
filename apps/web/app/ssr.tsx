import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/start/server'
import { getRouterManifest } from '@tanstack/start/router-manifest'

import { createRouter } from 'webapp/src/router'

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler)
