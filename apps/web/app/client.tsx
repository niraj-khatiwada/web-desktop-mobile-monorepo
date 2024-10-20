import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'

import { createRouter } from 'webapp/src/router'

const router = createRouter()

hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
