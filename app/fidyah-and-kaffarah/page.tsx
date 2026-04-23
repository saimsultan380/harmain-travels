import type { Metadata } from "next";
import { FidyahAndKaffarahClient } from "./FidyahAndKaffarahClient";

export const metadata: Metadata = {
  title: "Fidyah and Kaffarah Services| Meaning| Differences| Who Pays?",
  description:
    "Learn the meaning of Fidyah and Kaffarah, the differences between them, who pays each, and how Haramain Umrah Taxi can help you fulfill these obligations with a Shariah-compliant process.",
  keywords: [
    "Fidyah",
    "Kaffarah",
    "Fidyah meaning",
    "Kaffarah meaning",
    "Fidyah and Kaffarah difference",
    "Fidyah payment",
    "Kaffarah for breaking fast",
  ],
  alternates: {
    canonical: "/fidyah-and-kaffarah",
  },
};

export default function Page() {
  return <FidyahAndKaffarahClient />;
}
