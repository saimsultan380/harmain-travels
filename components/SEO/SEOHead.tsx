"use client";

import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
  keywords = [],
}: SEOHeadProps) {
  const siteUrl = "https://haramainumrahtaxi.com";
  const defaultTitle = "Haramain Umrah Taxi — Premium Umrah Taxi Service";
  const defaultDescription = "Your trusted Umrah taxi service across Makkah, Madinah & Jeddah. Fixed fares, licensed drivers, 24/7 availability.";
  const defaultImage = `${siteUrl}/images/logo.png`;

  const pageTitle = title ? `${title} | Haramain Umrah Taxi` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = ogImage || defaultImage;
  const pageCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical */}
      <link rel="canonical" href={pageCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Haramain Umrah Taxi" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Haramain Umrah Taxi" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
    </Head>
  );
}