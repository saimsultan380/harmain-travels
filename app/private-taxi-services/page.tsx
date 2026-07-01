import type { Metadata } from "next";
import { PrivateTaxiPageClient } from "./PrivateTaxiPageClient";

export const metadata: Metadata = {
  title: "Private Taxi Services| Private Umrah Taxi Makkah & Madinah",
  description:
    "Book luxury 2-seater & 4-seater private umrah taxi service in Makkah and Madinah from Haramain Umrah Taxi. Get Discounted rates and offers! Limited TIme Offer",
  keywords: [
    "Private taxi services",
    "Private Umrah taxi",
    "Private taxi Makkah",
    "Private taxi Madinah",
    "Private taxi near Haram",
    "Madinah to Makkah private car",
    "Jeddah airport to Makkah private car",
  ],
  alternates: {
    canonical: "/private-taxi-services/",
  },
  openGraph: {
    title: "Private Taxi Services| Private Umrah Taxi Makkah & Madinah",
    description: "Book luxury 2-seater & 4-seater private umrah taxi service in Makkah and Madinah from Haramain Umrah Taxi. Get Discounted rates and offers! Limited TIme Offer",
    url: "/private-taxi-services/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Taxi Services| Private Umrah Taxi Makkah & Madinah",
    description: "Book luxury 2-seater & 4-seater private umrah taxi service in Makkah and Madinah from Haramain Umrah Taxi. Get Discounted rates and offers! Limited TIme Offer",
  },
};

export default function Page() {
  return <PrivateTaxiPageClient />;
}
