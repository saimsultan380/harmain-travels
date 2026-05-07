import type { Metadata } from "next";
import { FleetTaxisRoutesClient } from "./FleetTaxisRoutesClient";

export const metadata: Metadata = {
  title: "Our Fleet and Routes - Haramain Umrah Taxi",
  description: "Haramain Umrah Taxi has Luxurious & Affordable Fleet: Sedans (Camry+Sonata), SUVs (GMC), Sataria Microbus, Hiace, Coaster & Bus covering major routes in Saudia",
  keywords: [
    "Umrah taxi fleet",
    "Saudi Arabia taxi routes",
    "Makkah taxi services",
    "Madinah taxi services",
    "Jeddah airport transfer",
    "Ziyarat taxi services",
    "Haramain taxi fleet",
    "Umrah transportation",
    "Pilgrimage taxi services",
    "Saudi taxi booking"
  ],
  alternates: {
    canonical: "/fleet-taxis-routes/",
  },
};

export default function Page() {
  return <FleetTaxisRoutesClient />;
}