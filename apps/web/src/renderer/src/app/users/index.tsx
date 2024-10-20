import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/')({
  component: User
})

function User(): React.ReactNode {
  return <div>Users</div>
}
