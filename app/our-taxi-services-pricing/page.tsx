import type { Metadata } from "next";
import { TaxiServicesPricingClient } from "./TaxiServicesPricingClient";

export const metadata: Metadata = {
  title: "Haramain Umrah Taxi Major Routes Pricing With Variety of Fleet Options",
  description:
    "View our comprehensive taxi pricing for all major routes in Saudi Arabia. Compare fares for Sedan, Minivan, GMC, Hiace, Coaster, and Bus across Makkah, Madinah, Jeddah, and more.",
  keywords: [
    "Taxi pricing Saudi Arabia",
    "Umrah taxi fares",
    "Makkah to Madinah taxi price",
    "Jeddah to Makkah taxi fare",
    "Taxi rates KSA",
    "Fleet pricing",
    "Airport taxi rates",
    "Ziyarat taxi prices",
  ],
  alternates: {
    canonical: "/our-taxi-services-pricing",
  },
};

export default function Page() {
  return <TaxiServicesPricingClient />;
}
