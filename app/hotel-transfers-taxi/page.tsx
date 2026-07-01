import { Metadata } from "next";
import { HotelTransfersClient } from "./HotelTransfersClient";

export const metadata: Metadata = {
  title: "Hotel Transfer Services in Makkah, Madinah & Jeddah Book Now",
  description: "Book reliable hotel transfer services in Makkah, Madinah & Jeddah. Haramain Umrah Taxi offer 24/7 airport to hotel taxi, professional drivers, fixed rates.",
  alternates: {
    canonical: "/hotel-transfers-taxi/",
  },
  openGraph: {
    title: "Hotel Transfer Services in Makkah, Madinah & Jeddah Book Now",
    description: "Book reliable hotel transfer services in Makkah, Madinah & Jeddah. Haramain Umrah Taxi offer 24/7 airport to hotel taxi, professional drivers, fixed rates.",
    url: "/hotel-transfers-taxi/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Transfer Services in Makkah, Madinah & Jeddah Book Now",
    description: "Book reliable hotel transfer services in Makkah, Madinah & Jeddah. Haramain Umrah Taxi offer 24/7 airport to hotel taxi, professional drivers, fixed rates.",
  },
};

export default function HotelTransfersPage() {
  return <HotelTransfersClient />;
}
