import type { Metadata } from "next";
import { Quicksand, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
import { Canonical } from "@/components/SEO/Canonical";
import { StructuredData } from "@/components/SEO/StructuredData";
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
  metadataBase: new URL("https://haramainumrahtaxi.com"),
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
  authors: [{ name: "Haramain Umrah Taxi" }],
  creator: "Haramain Umrah Taxi",
  publisher: "Haramain Umrah Taxi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Haramain Umrah Taxi — Premium Umrah Taxi Service",
    description: "Your trusted Umrah taxi service across Makkah, Madinah & Jeddah. Fixed fares, licensed drivers, 24/7 availability.",
    url: "https://haramainumrahtaxi.com",
    siteName: "Haramain Umrah Taxi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://haramainumrahtaxi.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Haramain Umrah Taxi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haramain Umrah Taxi — Premium Umrah Taxi Service",
    description: "Your trusted Umrah taxi service across Makkah, Madinah & Jeddah. Fixed fares, licensed drivers, 24/7 availability.",
    images: ["https://haramainumrahtaxi.com/images/logo.png"],
  },
  verification: {
    google: "u1nnFwDYb7fZptzp1l7aMAF12JjK5qAAg2kPLciGXgA",
  },
  alternates: {
    canonical: "https://haramainumrahtaxi.com",
  },
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
      className={`${quicksand.variable} ${poppins.variable} antialiased scroll-smooth`}
    >
      <head>
        <Canonical />
        <StructuredData type="organization" />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GQCK7SSSMS" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GQCK7SSSMS');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden font-body bg-[var(--bg)] text-[var(--text-1)]" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
