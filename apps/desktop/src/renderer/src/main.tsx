import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import 'ui/globals.css'
import { ThemeProvider } from 'ui/src/providers/ThemeProvider'
import { UIProvider } from 'ui/src/providers/UIProvider'
import { createRouter } from 'webapp/src/router'

// The TSR will throw an error saying couldn't find `routes` folder for this app. We can ignore that since router is shared as a package
const router = createRouter()

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
