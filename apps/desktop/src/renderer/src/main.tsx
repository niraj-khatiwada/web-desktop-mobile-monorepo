import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router'

import 'ui/global.css'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from 'ui/src/providers/ThemeProvider'
import { UIProvider } from 'ui/src/providers/UIProvider'

const memoryHistory = createHashHistory()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  ...(window.electron ? { history: memoryHistory } : {})
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)

function App(): React.ReactNode {
  return (
    <ThemeProvider>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </ThemeProvider>
  )
}
