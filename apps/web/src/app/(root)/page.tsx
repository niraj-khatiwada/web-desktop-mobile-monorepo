"use client";
import dynamic from "next/dynamic";

function Home() {
  const platformInfo =
    typeof window !== "undefined" && "__platform__" in window
      ? window.__platform__
      : undefined;
  return (
    <>
      <p className="animate-pulse text-red-400 text-3xl">
        Hello from {platformInfo ? "Desktop" : "Web"}
      </p>
      {platformInfo ? <pre>{JSON.stringify(platformInfo, null, 1)}</pre> : null}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
