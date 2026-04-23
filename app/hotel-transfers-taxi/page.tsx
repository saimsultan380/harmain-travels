import { Metadata } from "next";
import { HotelTransfersClient } from "./HotelTransfersClient";

export const metadata: Metadata = {
  title: "Hotel Transfer Services in Makkah, Madinah & Jeddah Book Now",
  description: "Book smooth and comfortable hotel transfer taxi services in Makkah, Madinah, and Jeddah. We pick you up right at the airport and drop you at your hotel door.",
  alternates: {
    canonical: "/hotel-transfers-taxi",
  }
};

export default function HotelTransfersPage() {
  return <HotelTransfersClient />;
}
