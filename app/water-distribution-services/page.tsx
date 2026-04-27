import type { Metadata } from "next";
import { WaterDistributionServicesClient } from "./WaterDistributionServicesClient";

export const metadata: Metadata = {
  title: "Zamzam Water & Water Bottles Distribution Services in Saudia",
  description:
    "We provide Zamzam water, water bottles & gallons distribution services in Makkah, Madinah, Haram, and Saudi Arab with proper transparency. Visit & Book!",
  keywords: [
    "Zamzam water distribution",
    "Water bottles distribution Saudi Arabia",
    "Zamzam water Makkah",
    "Zamzam water Madinah",
    "Water charity in Saudi Arabia",
    "Ramadan water distribution",
  ],
  alternates: {
    canonical: "/water-distribution-services",
  },
};

export default function Page() {
  return <WaterDistributionServicesClient />;
}
