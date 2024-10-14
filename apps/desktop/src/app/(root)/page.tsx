"use client";

import { useRouter } from "next/navigation";
import { Button } from "ui/src/components";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <p className="animate-pulse text-red-400 text-3xl">ALaknskjnasnas</p>
      <Button
        className="animate-bounce"
        onClick={() => {
          router.push("/user");
        }}
      >
        Hello World
      </Button>
    </>
  );
}
