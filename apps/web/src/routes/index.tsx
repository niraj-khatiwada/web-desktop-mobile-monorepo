import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { Button } from 'ui/src/components/button'

type BearState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useBearStore = create<BearState>()(
  subscribeWithSelector((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  })),
)

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)

  const handleClick = () => {
    console.log('Current state', useBearStore.getState()) // we can get previous current state in callback without passing in state dependency
    increasePopulation()
  }
  return (
    <>
      <div className="text-primary text-4xl w-full h-screen flex flex-col items-center justify-center">
        <p>Hello from Meta Web</p>
        <br />
        <p>{bears}</p>
        <Button onClick={handleClick}>Increase</Button>
        <Two />
      </div>
    </>
  )
}

function Two() {
  useEffect(() => {
    const unsub = useBearStore.subscribe(
      (state) => state.bears,
      (state, prevState) => {
        console.log('RECEIVED', state, prevState)
      },
    )
    return () => {
      unsub()
    }
  }, [])
  return null
}

export default Home
