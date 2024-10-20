import { createFileRoute } from '@tanstack/react-router'

function Home() {
  return <div className="text-primary text-4xl">Home</div>
}

export const Route = createFileRoute('/')({
  component: Home
})
