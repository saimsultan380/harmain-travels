"use client";

import { usePathname } from "next/navigation";
import { absoluteUrl, normalizePath } from "@/lib/seo";

export function PageJsonLd() {
  const pathname = usePathname();
  const pageUrl = absoluteUrl(normalizePath(pathname));

  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
