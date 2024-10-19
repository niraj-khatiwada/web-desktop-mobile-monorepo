import { createFileRoute } from '@tanstack/react-router'

function Home(): React.ReactNode {
  return <div>Home</div>
}

export const Route = createFileRoute('/')({
  component: Home
})
