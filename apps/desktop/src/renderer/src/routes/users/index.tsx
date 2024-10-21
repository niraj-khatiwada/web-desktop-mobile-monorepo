import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { Button } from 'ui/src/components/button'

function User(): React.ReactNode {
  const randomId = Math.round(Math.random() * 100)
  return (
    <div>
      Hello /users/!
      <br />
      <Button as={Link} href={`/users/${randomId}`}>
        User {randomId}
      </Button>
    </div>
  )
}

export const Route = createFileRoute('/users/')({
  component: User
})
