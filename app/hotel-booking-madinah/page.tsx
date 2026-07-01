import type { Metadata } from "next";
import { HotelBookingMadinahClient } from "./HotelBookingMadinahClient";

export const metadata: Metadata = {
  title: "Hotel Booking in Madinah, Saudi Arabia | Contact Us to Book",
  description:
    "Book hotels in Madinah near Masjid Al Nabawi with Haramain Umrah Taxi. Driver-recommended 3, 4, and 5-star hotels with exclusive rates. Bundle hotel + taxi services for extra savings.",
  keywords: [
    "Hotel booking Madinah",
    "Hotels near Masjid Al Nabawi",
    "Madinah hotel booking",
    "Hotels near Prophet's Mosque",
    "3 star hotels Madinah",
    "4 star hotels Madinah",
    "5 star hotels Madinah",
    "Umrah hotel booking Madinah",
  ],
  alternates: {
    canonical: "/hotel-booking-madinah/",
  },
  openGraph: {
    title: "Hotel Booking in Madinah, Saudi Arabia | Contact Us to Book",
    description: "Book hotels in Madinah near Masjid Al Nabawi with Haramain Umrah Taxi. Driver-recommended 3, 4, and 5-star hotels with exclusive rates. Bundle hotel + taxi services for extra savings.",
    url: "/hotel-booking-madinah/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking in Madinah, Saudi Arabia | Contact Us to Book",
    description: "Book hotels in Madinah near Masjid Al Nabawi with Haramain Umrah Taxi. Driver-recommended 3, 4, and 5-star hotels with exclusive rates. Bundle hotel + taxi services for extra savings.",
  },
};

export default function Page() {
  return <HotelBookingMadinahClient />;
}
