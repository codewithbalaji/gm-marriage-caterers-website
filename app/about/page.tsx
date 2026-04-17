import type { Metadata } from "next";
import { WEB_URL } from "@/lib/siteConfig";
import About from '@/components/about/About';

export const metadata: Metadata = {
  title: "About Us — 25+ Years of Brahmin Wedding Catering",
  description:
    "Learn about GM Marriage Caterers — founded in Ambattur, Chennai with 25+ years of experience in authentic South Indian Brahmin wedding and event catering across Tamil Nadu.",
  alternates: { canonical: `${WEB_URL}/about` },
  openGraph: {
    title: "About GM Marriage Caterers — 25+ Years of Brahmin Wedding Catering",
    description:
      "25+ years of authentic South Indian Brahmin wedding catering. Rooted in tradition, committed to quality.",
    url: `${WEB_URL}/about`,
  },
};

export default function AboutPage() {
  return <About />;
}
