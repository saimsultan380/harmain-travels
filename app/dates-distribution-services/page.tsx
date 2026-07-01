import type { Metadata } from "next";
import { DatesDistributionServicesClient } from "./DatesDistributionServicesClient";

export const metadata: Metadata = {
  title: "Khajoor & Dates Distribution Services in KSA Makkah & Madina",
  description:
    "Looking for Khajoor & Dates Distribution Services in Makkah & Madinah? Trust Our Services as we ensure your generosity reaches those in need. Book Now!",
  keywords: [
    "Dates distribution in Makkah",
    "Khajoor distribution in Madinah",
    "Ajwa dates donation",
    "Dates charity in Saudi Arabia",
    "Ramadan dates distribution",
    "Sadaqah Jariyah dates",
  ],
  alternates: {
    canonical: "/dates-distribution-services/",
  },
  openGraph: {
    title: "Khajoor & Dates Distribution Services in KSA Makkah & Madina",
    description: "Looking for Khajoor & Dates Distribution Services in Makkah & Madinah? Trust Our Services as we ensure your generosity reaches those in need. Book Now!",
    url: "/dates-distribution-services/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khajoor & Dates Distribution Services in KSA Makkah & Madina",
    description: "Looking for Khajoor & Dates Distribution Services in Makkah & Madinah? Trust Our Services as we ensure your generosity reaches those in need. Book Now!",
  },
};

export default function Page() {
  return <DatesDistributionServicesClient />;
}
