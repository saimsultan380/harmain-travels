import type { Metadata } from "next";
import { AirportTaxiPageClient } from "./AirportTaxiPageClient";

export const metadata: Metadata = {
  title: "Airport Transfers| Madinah Airport & Jeddah Airport Taxi!",
  description: "Book our reliable airport transfers at Jeddah & Madinah airports. Haramain Umrah Taxi offers 24/7 fixed-rate Madinah airport taxi and Jeddah airport taxi.",
  keywords: ["Jeddah Airport Taxi", "Madinah Airport Taxi", "Makkah Transfer", "Saudi Airport Taxi", "Haramain Taxi"],
  alternates: {
    canonical: "/airport-taxi-services",
  },
};

export default function Page() {
  return <AirportTaxiPageClient />;
}
