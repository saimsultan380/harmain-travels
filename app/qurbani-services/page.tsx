import type { Metadata } from "next";
import { QurbaniServicesClient } from "./QurbaniServicesClient";

export const metadata: Metadata = {
  title: "Qurbani| Sadaqah, Aqeeqah, Hajj Qurbani Services in Makkah",
  description:
    "We provide the best Qurbani Services in Makkah with proofs and transparency. We give Aqeeqah, Sadaqah, Eid ul Adha, Hady/Hajj Qurbani Services in Makkah",
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
