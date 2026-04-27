import type { Metadata } from "next";
import { DammServicesClient } from "./DammServicesClient";

export const metadata: Metadata = {
  title: "Damm| What is Damm? How to Give/Pay Damm for Umrah & Hajj",
  description:
    "We provide economical Damm Services with transparency & proofs. Damm is sacrificial compensation required when rules are violated during Hajj or Umrah.",
  keywords: [
    "Damm",
    "What is Damm",
    "Damm for Umrah",
    "Damm for Hajj",
    "How to pay Damm",
    "Damm services in Makkah",
  ],
  alternates: {
    canonical: "/damm-services",
  },
};

export default function Page() {
  return <DammServicesClient />;
}


