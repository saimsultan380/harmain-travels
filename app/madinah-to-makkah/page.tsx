import type { Metadata } from "next";
import { MadinahToMakkahClient } from "./MadinahToMakkahClient";

export const metadata: Metadata = {
  title: "Madinah to Makkah Taxi, Car, Bus| Madinah to Mecca Taxi Fare",
  description:
    "Haramain Umrah Taxi provides the best Madinah to Makkah taxi services. Our taxi fare from Madinah to Makkah is affordable with 24/7 availability. Call Now!",
  keywords: [
    "Madinah to Makkah taxi",
    "Madinah to Makkah fare",
    "Madinah to Makkah bus",
    "Madinah to Makkah car",
    "Madinah to Mecca taxi",
    "Madinah to Makkah distance",
    "Haramain Umrah Taxi",
    "Intercity taxi Saudi Arabia",
  ],
  alternates: {
    canonical: "/madinah-to-makkah",
  },
};

export default function Page() {
  return <MadinahToMakkahClient />;
}
