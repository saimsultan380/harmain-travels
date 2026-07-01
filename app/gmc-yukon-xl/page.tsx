import type { Metadata } from "next";
import { GMCYukonXLClient } from "./GMCYukonXLClient";

export const metadata: Metadata = {
  title: "Reserve GMC Yukon SUV XL Taxi in KSA for Umrah, Ziyarat & Tourism",
  description:
    "Need Luxury GMC Yukon XL Taxi in Saudia, Madinah, and Makkah for Umrah, Hajj, Ziyarat, Airport, Private use? Choose Our GMC taxi in KSA at cheap prices.",
  keywords: [
    "GMC Yukon XL taxi",
    "Luxury taxi Saudi Arabia",
    "Private taxi KSA",
    "GMC Ziyarat taxi",
    "GMC Umrah taxi",
    "Makkah to Madinah taxi",
    "Jeddah to Makkah taxi",
    "Airport taxi Saudi Arabia",
    "GMC Yukon XL rental",
  ],
  alternates: {
    canonical: "/gmc-yukon-xl/",
  },
  openGraph: {
    title: "Reserve GMC Yukon SUV XL Taxi in KSA for Umrah, Ziyarat & Tourism",
    description: "Need Luxury GMC Yukon XL Taxi in Saudia, Madinah, and Makkah for Umrah, Hajj, Ziyarat, Airport, Private use? Choose Our GMC taxi in KSA at cheap prices.",
    url: "/gmc-yukon-xl/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve GMC Yukon SUV XL Taxi in KSA for Umrah, Ziyarat & Tourism",
    description: "Need Luxury GMC Yukon XL Taxi in Saudia, Madinah, and Makkah for Umrah, Hajj, Ziyarat, Airport, Private use? Choose Our GMC taxi in KSA at cheap prices.",
  },
};

export default function Page() {
  return <GMCYukonXLClient />;
}
