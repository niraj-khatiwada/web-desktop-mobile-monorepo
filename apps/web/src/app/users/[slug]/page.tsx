import React from "react";
import dn from "next/dynamic";

function User({ params }: { params: { slug: string | null } }) {
  return <div>User {params?.slug}</div>;
}

export function generateStaticParams(): { slug: string | null }[] {
  return [];
}

export const dynamic = "force-static";
export const dynamicParams = true;
export default dn(() => Promise.resolve(User), { ssr: false });
