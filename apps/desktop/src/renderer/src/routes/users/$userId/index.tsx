import { createFileRoute } from '@tanstack/react-router'

function User(): React.ReactNode {
  const { userId } = Route.useParams()
  return <div>Hello User {userId}!</div>
}

export const Route = createFileRoute('/users/$userId/')({
  component: User
})
