import type { Metadata } from "next";
import Services from '@/components/services/Services';

export const metadata: Metadata = {
  title: "Wedding Catering Services — Marriage, Seemantham, Betrothal & More",
  description:
    "Full-service South Indian Brahmin catering for marriages, betrothal, Seemantham, Sashtiapthapoorthi, and all auspicious functions. Serving Tamil Nadu for 25+ years.",
  alternates: { canonical: "https://gmmarriagecaterers.com/services" },
  openGraph: {
    title: "South Indian Wedding Catering Services — GM Marriage Caterers",
    description:
      "Catering for marriages, Seemantham, betrothal, Sashtiapthapoorthi & more. Traditional Brahmin menus across Tamil Nadu.",
    url: "https://gmmarriagecaterers.com/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}
