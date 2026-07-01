import type { Metadata } from "next";
import { UmrahGuideAndPdfClient } from "./UmrahGuideAndPdfClient";

export const metadata: Metadata = {
  title: "Easy Umrah Guide & Steps| PDF| Umrah Duas| Ihram Rules|",
  description:
    "Click on link to get easy step-by-step Umrah Guide, it's PDF, Umrah Duas, Ihram Rules, Ziyarat Guide, Saee and Tawaf Dua & Guide, Do's and Don'ts of Umrah",
  keywords: [
    "Umrah guide",
    "Umrah steps",
    "Umrah duas",
    "Ihram rules",
    "Umrah PDF",
    "How to perform Umrah",
    "Umrah for beginners",
  ],
  alternates: {
    canonical: "/umrah-guide-and-pdf/",
  },
  openGraph: {
    title: "Easy Umrah Guide & Steps| PDF| Umrah Duas| Ihram Rules|",
    description: "Click on link to get easy step-by-step Umrah Guide, it's PDF, Umrah Duas, Ihram Rules, Ziyarat Guide, Saee and Tawaf Dua & Guide, Do's and Don'ts of Umrah",
    url: "/umrah-guide-and-pdf/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Umrah Guide & Steps| PDF| Umrah Duas| Ihram Rules|",
    description: "Click on link to get easy step-by-step Umrah Guide, it's PDF, Umrah Duas, Ihram Rules, Ziyarat Guide, Saee and Tawaf Dua & Guide, Do's and Don'ts of Umrah",
  },
};

export default function Page() {
  return <UmrahGuideAndPdfClient />;
}
