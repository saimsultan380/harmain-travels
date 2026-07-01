import type { Metadata } from "next";

export const SITE_URL = "https://haramainumrahtaxi.com";

/** Normalize an internal path to trailing-slash form (homepage stays `/`). */
export function normalizePath(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

/** Single source of truth for per-page SEO metadata (canonical, OG, Twitter). */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = normalizePath(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(robots ? { robots } : {}),
  };
}
