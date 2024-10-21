import { createFileRoute } from '@tanstack/react-router'

function Home() {
  return <div className="text-primary text-4xl">Hello from {typeof window!=="undefined"&& window.electron?"Desktop":"Web"}</div>
}

export const Route = createFileRoute('/')({
  component: Home
})
