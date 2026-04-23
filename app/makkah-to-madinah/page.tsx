import type { Metadata } from "next";
import { MakkahToMadinahClient } from "./MakkahToMadinahClient";

export const metadata: Metadata = {
  title: "Makkah to Madinah Taxi and Fare: Book Haramain Umrah Taxi",
  description:
    "Book reliable Makkah to Madinah taxi services with transparent fares. Choose from sedans, Staria, GMC, Coaster, Hiace, and buses for comfortable intercity travel between holy cities.",
  keywords: [
    "Makkah to Madinah taxi",
    "Makkah to Madinah fare",
    "Makkah to Madinah distance",
    "Makkah to Madinah private car",
    "Makkah to Madinah bus",
    "Haramain Umrah Taxi",
    "Makkah Madinah transfer",
    "Intercity taxi Saudi Arabia",
  ],
  alternates: {
    canonical: "/makkah-to-madinah",
  },
};

export default function Page() {
  return <MakkahToMadinahClient />;
}
