import type { Metadata } from "next";
import { UmrahTaxiPageClient } from "./UmrahTaxiPageClient";

export const metadata: Metadata = {
  title: "Umrah Taxi Services in Makkah & Madinah, Saudi Arabia",
  description: "Haramain Umrah Taxi offers best Umrah taxi services in Makkah & Madinah. Book private taxi for Umrah pilgrims with fixed rates & licensed drivers.",
  keywords: ["Umrah Taxi Services", "Makkah Taxi", "Madinah Taxi", "Online Umrah Taxi", "Umrah Transportation", "Haramain Umrah Taxi"],
  alternates: {
    canonical: "/umrah-taxi-services/",
  },
  openGraph: {
    title: "Umrah Taxi Services in Makkah & Madinah, Saudi Arabia",
    description: "Haramain Umrah Taxi offers best Umrah taxi services in Makkah & Madinah. Book private taxi for Umrah pilgrims with fixed rates & licensed drivers.",
    url: "/umrah-taxi-services/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Taxi Services in Makkah & Madinah, Saudi Arabia",
    description: "Haramain Umrah Taxi offers best Umrah taxi services in Makkah & Madinah. Book private taxi for Umrah pilgrims with fixed rates & licensed drivers.",
  },
};

export default function Page() {
  return <UmrahTaxiPageClient />;
}
