import type { Metadata } from "next";
import { WaterDistributionServicesClient } from "./WaterDistributionServicesClient";

export const metadata: Metadata = {
  title: "Zamzam Water & Water Bottles Distribution Services in Saudia",
  description:
    "Reliable Zamzam water and drinking water distribution services in Saudi Arabia. Delivery in Makkah, Madinah, Riyadh—with charitable options, proof of distribution, and Ramadan special services.",
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
