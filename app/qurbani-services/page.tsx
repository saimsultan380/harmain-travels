import type { Metadata } from "next";
import { QurbaniServicesClient } from "./QurbaniServicesClient";

export const metadata: Metadata = {
  title: "Qurbani| Sadaqah, Aqeeqah, Hajj Qurbani Services in  Makkah",
  description:
    "Book Shariah-compliant Qurbani services in Makkah including Hajj Qurbani (Hady), Eid ul Adha, Aqeeqah, and Sadaqah. Verified process with proof.",
  keywords: [
    "Qurbani services in Makkah",
    "Hajj Qurbani",
    "Hady services",
    "Eid ul Adha Qurbani",
    "Aqeeqah Qurbani",
    "Sadaqah Qurbani",
  ],
  alternates: {
    canonical: "/qurbani-services",
  },
};

export default function Page() {
  return <QurbaniServicesClient />;
}
