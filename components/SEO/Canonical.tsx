"use client";

import { usePathname } from "next/navigation";

export function Canonical() {
  const pathname = usePathname();
  const siteUrl = "https://haramainumrahtaxi.com";
  
  // Ensure proper trailing slash handling for static export
  let canonicalPath = pathname;
  if (pathname !== "/" && !pathname.endsWith("/")) {
    canonicalPath = `${pathname}/`;
  }
  
  const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
