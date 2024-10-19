import { createFileRoute } from '@tanstack/react-router'

function Home(): React.ReactNode {
  return <div className="text-primary">Home</div>
}

export const Route = createFileRoute('/')({
  component: Home
})
