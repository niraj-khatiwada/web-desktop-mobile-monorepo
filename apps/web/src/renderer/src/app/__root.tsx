import * as React from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Button } from 'ui/src/components/button'

const isDev = import.meta.env.DEV

function Root(): React.ReactNode {
  return (
    <React.Fragment>
      <nav>
        <ul className="flex gap-2">
          <li className="my-2">
            <Button variant="bordered" as={Link} href="/">
              Home
            </Button>{' '}
          </li>
          <li className="my-2">
            <Button variant="bordered" as={Link} href="/users">
              Users
            </Button>
          </li>
        </ul>
      </nav>
      <p className="text-4xl text-primary">Hello From {window.electron ? 'Desktop' : 'Web'}</p>
      {window.electron ? (
        <code>
          <pre>{JSON.stringify(window.api ?? {}, null, 2)}</pre>
        </code>
      ) : null}
      <Outlet />
      {isDev ? <TanStackRouterDevtools position="bottom-right" /> : null}
    </React.Fragment>
  )
}

export const Route = createRootRoute({
  component: Root
})
