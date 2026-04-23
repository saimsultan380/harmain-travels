import type { Metadata } from "next";
import { HotelBookingMakkahClient } from "./HotelBookingMakkahClient";

export const metadata: Metadata = {
  title: "Online Hotel Booking in Makkah | Hotels Near Haram | Call Us",
  description:
    "Book hotels in Makkah near Haram with Haramain Umrah Taxi. Driver-recommended 3, 4, and 5-star hotels with exclusive rates. Bundle hotel + taxi services for extra savings.",
  keywords: [
    "Hotel booking Makkah",
    "Hotels near Haram",
    "Makkah hotel booking",
    "Hotels near Masjid al-Haram",
    "3 star hotels Makkah",
    "4 star hotels Makkah",
    "5 star hotels Makkah",
    "Umrah hotel booking",
  ],
  alternates: {
    canonical: "/hotel-booking-makkah",
  },
};

export default function Page() {
  return <HotelBookingMakkahClient />;
}
