import { createFileRoute } from '@tanstack/react-router'

function Posts(): React.ReactNode {
  return <div>Posts</div>
}

export const Route = createFileRoute('/posts/')({
  component: Posts
})
