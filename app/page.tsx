import type { Metadata } from "next";
import { WEB_URL } from "@/lib/siteConfig";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseGM from "@/components/home/WhyChooseGM";
import MenuTeaser from "@/components/home/MenuTeaser";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Authentic South Indian Brahmin Wedding Caterers in Chennai",
  description:
    "GM Marriage Caterers — 25+ years serving traditional banana leaf feasts for weddings, betrothal, Seemantham & all auspicious occasions across Tamil Nadu. Call 9282117620.",
  alternates: { canonical: WEB_URL },
  openGraph: {
    title: "Authentic South Indian Brahmin Wedding Caterers in Chennai",
    description:
      "25+ years of trusted Brahmin wedding catering across Tamil Nadu. Traditional banana leaf feast, ritual precision, and full-service catering.",
    url: WEB_URL,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseGM />
      <MenuTeaser />
      <Testimonials />
      <FAQ />
      <GalleryTeaser />
      <CTABanner />
    </>
  );
}
