import type { Metadata } from "next";
import { HajjAndUmrahBadalClient } from "./HajjAndUmrahBadalClient";

export const metadata: Metadata = {
  title: "Umrah & Hajj e Badal Services- We Perform Umrah/Hajj For You",
  description:
    "Umrah & Hajj e Badal means when another person performs Hajj or Umrah on behalf of someone else. We offer Umrah and Hajj Badal Services transparently",
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
