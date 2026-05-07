import type { Metadata } from "next";
import { CoasterClient } from "./CoasterClient";

export const metadata: Metadata = {
  title: "Book Coaster Taxi for Hajj, Umrah, Ziyarat in Saudia, Makkah, Madina",
  description:
    "Are you a big group and want to book 18-seater Ziyarat, Airport & Umrah Coaster Taxi in Makkah, Madinah, and Saudia? Book Our Coaster at affordable prices!",
  keywords: [
    "Coaster taxi Saudi Arabia",
    "18 seater Coaster",
    "Coaster Umrah taxi",
    "Coaster Ziyarat taxi",
    "Makkah to Madinah Coaster",
    "Jeddah to Makkah Coaster",
    "Airport Coaster transfer",
    "Group travel Coaster",
  ],
  alternates: {
    canonical: "/coaster/",
  },
};

export default function Page() {
  return <CoasterClient />;
}
