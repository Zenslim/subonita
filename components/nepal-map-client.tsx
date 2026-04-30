"use client";

import dynamic from "next/dynamic";

const NepalMap = dynamic(
  () => import("@/components/nepal-map").then((mod) => mod.NepalMap),
  { ssr: false }
);

export function NepalMapClient() {
  return <NepalMap />;
}