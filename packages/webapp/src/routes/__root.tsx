import * as React from 'react'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import { Outlet, createRootRoute, ScrollRestoration } from '@tanstack/react-router'
import 'ui/globals.css'

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      title: 'TanStack Start Starter'
    }
  ],
  component: SSRRoot
})

function Root() {
  return <Outlet />
}

function SSRDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  )
}

function SSRRoot() {
  return (
    <SSRDocument>
      <Root />
    </SSRDocument>
  )
}
