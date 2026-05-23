"use client";

interface StructuredDataProps {
  type?: 'website' | 'article' | 'service' | 'organization';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function StructuredData({
  type = 'website',
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = 'Haramain Umrah Taxi'
}: StructuredDataProps) {
  const siteUrl = 'https://haramainumrahtaxi.com';
  const defaultTitle = 'Haramain Umrah Taxi — Premium Umrah Taxi Service';
  const defaultDescription = 'Your trusted Umrah taxi service across Makkah, Madinah & Jeddah. Fixed fares, licensed drivers, 24/7 availability.';
  const defaultImage = `${siteUrl}/images/logo.png`;

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Haramain Umrah Taxi",
    "url": siteUrl,
    "logo": defaultImage,
    "description": defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966598401594",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "Urdu"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Makkah Province"
    },
    "sameAs": [
      "https://wa.me/966598401594"
    ]
  };

  let structuredData: any = organizationData;

  if (type === 'website') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": title || defaultTitle,
      "description": description || defaultDescription,
      "url": url || siteUrl,
      "publisher": organizationData,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === 'article') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title || defaultTitle,
      "description": description || defaultDescription,
      "image": image || defaultImage,
      "url": url || siteUrl,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": organizationData
    };
  } else if (type === 'service') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title || "Umrah Taxi Service",
      "description": description || defaultDescription,
      "provider": organizationData,
      "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      "serviceType": "Transportation Service",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "SAR 200-800"
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}