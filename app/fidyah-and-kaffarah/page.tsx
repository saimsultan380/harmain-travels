import type { Metadata } from "next";
import { FidyahAndKaffarahClient } from "./FidyahAndKaffarahClient";

export const metadata: Metadata = {
  title: "Fidyah and Kaffarah Services| Meaning| Differences| Who Pay?",
  description:
    "We offer Fidyah and Kaffarah services by feeding the poor for your missed fasts (Fidyah) & by feeding 60 people or fasting for your broken fasts (Kaffarah)",
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
