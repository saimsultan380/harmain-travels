import type { Metadata } from "next";
import { CoasterClient } from "./CoasterClient";

export const metadata: Metadata = {
  title: "Group Coaster for Umrah & Ziyarat in Makkah & Madinah, KSA",
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
  openGraph: {
    title: "Group Coaster for Umrah & Ziyarat in Makkah & Madinah, KSA",
    description: "Are you a big group and want to book 18-seater Ziyarat, Airport & Umrah Coaster Taxi in Makkah, Madinah, and Saudia? Book Our Coaster at affordable prices!",
    url: "/coaster/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Coaster for Umrah & Ziyarat in Makkah & Madinah, KSA",
    description: "Are you a big group and want to book 18-seater Ziyarat, Airport & Umrah Coaster Taxi in Makkah, Madinah, and Saudia? Book Our Coaster at affordable prices!",
  },
};

export default function Page() {
  return <CoasterClient />;
}
