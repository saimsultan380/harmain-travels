import { headers } from "next/headers";
import { absoluteUrl, normalizePath } from "@/lib/seo";

export async function PageJsonLd() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
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
