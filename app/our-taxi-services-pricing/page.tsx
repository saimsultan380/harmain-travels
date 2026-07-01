import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { TaxiServicesPricingClient } from "./TaxiServicesPricingClient";

export const metadata: Metadata = createPageMetadata({
  title: "Haramain Umrah Taxi Services Pricing With Routes",
  description:
    "Haramain Umrah Taxi provides the best Taxi and Transport Services in Saudia, Makkah & Madinah. To Check Our Taxi Services Pricing with major routes, Click here!",
  path: "/our-taxi-services-pricing/",
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
});

export default function Page() {
  return <TaxiServicesPricingClient />;
}
