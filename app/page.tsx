import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseGM from "@/components/home/WhyChooseGM";
import MenuTeaser from "@/components/home/MenuTeaser";
import Testimonials from "@/components/home/Testimonials";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseGM />
      <MenuTeaser />
      <Testimonials />
      <GalleryTeaser />
      <CTABanner />
    </>
  );
}
