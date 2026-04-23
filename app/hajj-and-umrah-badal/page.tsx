import type { Metadata } from "next";
import { HajjAndUmrahBadalClient } from "./HajjAndUmrahBadalClient";

export const metadata: Metadata = {
  title: "Umrah & Hajj e Badal Services- We Perform Umrah/Hajj For You",
  description:
    "Cannot travel for Umrah or Hajj? Our Umrah & Hajj e Badal services arrange a Shariah-compliant proxy pilgrimage performed with devotion on your behalf, with confirmation and documentation.",
  keywords: [
    "Umrah Badal",
    "Hajj Badal",
    "Hajj e Badal",
    "Proxy Hajj",
    "Badal Hajj",
    "Umrah and Hajj Badal services",
  ],
  alternates: {
    canonical: "/hajj-and-umrah-badal",
  },
};

export default function Page() {
  return <HajjAndUmrahBadalClient />;
}
