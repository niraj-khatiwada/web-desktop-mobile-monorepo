import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="text-primary text-4xl w-full h-screen flex items-center justify-center">
      Hello from Meta Web
    </div>
  )
}

export default Home
