import { Metadata } from "next";
import { HotelTransfersClient } from "./HotelTransfersClient";

export const metadata: Metadata = {
  title: "Hotel Transfer Services in Makkah, Madinah & Jeddah Book Now",
  description: "Book reliable hotel transfer services in Makkah, Madinah & Jeddah. Haramain Umrah Taxi offer 24/7 airport to hotel taxi, professional drivers, fixed rates.",
  alternates: {
    canonical: "/hotel-transfers-taxi",
  }
};

export default function HotelTransfersPage() {
  return <HotelTransfersClient />;
}
