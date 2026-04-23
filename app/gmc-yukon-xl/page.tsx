import type { Metadata } from "next";
import { GMCYukonXLClient } from "./GMCYukonXLClient";

export const metadata: Metadata = {
  title: "Reserve Private GMC Taxi in KSA | GMC Ziyarat & Umrah Taxi",
  description:
    "Book GMC Yukon XL private taxi for Umrah, Ziyarat, and airport transfers in KSA. Luxury SUV taxi service in Makkah, Madinah, Jeddah with premium comfort and transparent fares.",
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
    canonical: "/gmc-yukon-xl",
  },
};

export default function Page() {
  return <GMCYukonXLClient />;
}
