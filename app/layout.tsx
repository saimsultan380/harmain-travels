import type { Metadata } from "next";
import { Quicksand, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Haramain Umrah Taxi — Premium Umrah Taxi Service",
  description:
    "Your trusted Umrah taxi service across Makkah, Madinah & Jeddah. Fixed fares, licensed drivers, 24/7 availability.",
  keywords: [
    "Umrah taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Jeddah airport transfer",
    "Haramain taxi",
    "Saudi Arabia taxi service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${quicksand.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-[var(--bg)] text-[var(--text-1)]" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
