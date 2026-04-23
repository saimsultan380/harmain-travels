import type { Metadata } from "next";
import { MadinahToMakkahClient } from "./MadinahToMakkahClient";

export const metadata: Metadata = {
  title: "Madinah to Makkah Taxi, Car, Bus | Madinah to Mecca Taxi Fare",
  description:
    "Book reliable Madinah to Makkah taxi services with transparent fares. Choose from sedans, Staria, GMC, Coaster, Hiace, and buses for comfortable intercity travel between holy cities.",
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
