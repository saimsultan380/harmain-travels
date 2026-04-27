import type { Metadata } from "next";
import { TaxiServicesPricingClient } from "./TaxiServicesPricingClient";

export const metadata: Metadata = {
  title: "Haramain Umrah Taxi Services Pricing With Routes",
  description:
    "Haramain Umrah Taxi provides the best Taxi and Transport Services in Saudia, Makkah & Madinah. To Check Our Taxi Services Pricing with major routes, Click here!",
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
