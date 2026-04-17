import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { WEB_URL } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FoodEstablishment"],
  name: "GM Marriage Caterers",
  url: WEB_URL,
  logo: `${WEB_URL}/logo.png`,
  description:
    "25+ years of authentic South Indian Brahmin wedding catering across Tamil Nadu. Traditional banana leaf feast, ritual precision, and full-service catering.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "31/4 & 31/5, Old Bank of Baroda Street, Secretariat Colony",
    addressLocality: "Ambattur",
    addressRegion: "Chennai",
    postalCode: "600053",
    addressCountry: "IN",
  },
  telephone: "+919282117620",
  email: "ganesan@gmmarriagecaterers.com",
  openingHours: "Mo-Su 08:00-21:00",
  areaServed: {
    "@type": "State",
    name: "Tamil Nadu",
  },
  servesCuisine: "South Indian Brahmin",
  priceRange: "$$",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(WEB_URL),
  title: {
    default: "GM Marriage Caterers - South Indian Brahmin Wedding Catering",
    template: "%s | GM Marriage Caterers",
  },
  description:
    "25+ years of trusted South Indian Brahmin wedding catering across Tamil Nadu. Traditional banana leaf feast, ritual precision, and full-service catering for all auspicious occasions.",
  keywords: [
    "South Indian catering",
    "Brahmin wedding catering",
    "Tamil Nadu catering",
    "marriage caterers Chennai",
    "banana leaf feast",
    "Ambattur catering",
    "wedding catering Tamil Nadu",
  ],
  authors: [{ name: "GM Marriage Caterers" }],
  creator: "GM Marriage Caterers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GM Marriage Caterers",
    title: "GM Marriage Caterers - South Indian Brahmin Wedding Catering",
    description:
      "25+ years of trusted South Indian Brahmin wedding catering across Tamil Nadu. Traditional banana leaf feast, ritual precision, and full-service catering.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GM Marriage Caterers - Traditional South Indian Wedding Feast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GM Marriage Caterers - South Indian Brahmin Wedding Catering",
    description:
      "25+ years of trusted South Indian Brahmin wedding catering across Tamil Nadu.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: WEB_URL,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <JsonLd data={organizationSchema} />
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
