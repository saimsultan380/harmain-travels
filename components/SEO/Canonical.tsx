"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export function Canonical() {
  const pathname = usePathname();
  const siteUrl = "https://haramainumrahtaxi.com";
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
