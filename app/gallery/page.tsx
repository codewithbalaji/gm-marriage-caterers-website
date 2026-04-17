import type { Metadata } from "next";
import { WEB_URL } from "@/lib/siteConfig";
import Gallery from '@/components/gallery/Gallery';

export const metadata: Metadata = {
  title: "Wedding Catering Photos — Events, Food & Ceremony Gallery",
  description:
    "Browse GM Marriage Caterers' gallery — traditional banana leaf feasts, wedding ceremony setup, food presentation, and serving photos from events across Tamil Nadu.",
  alternates: { canonical: `${WEB_URL}/gallery` },
  openGraph: {
    title: "South Indian Wedding Catering Gallery — GM Marriage Caterers",
    description:
      "Photos of our banana leaf feasts, event setups, food, and ceremonies from weddings across Tamil Nadu.",
    url: `${WEB_URL}/gallery`,
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
