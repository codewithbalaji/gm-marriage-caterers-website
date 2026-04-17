import type { Metadata } from "next";
import Menu from '@/components/menu/Menu';

export const metadata: Metadata = {
  title: "Traditional South Indian Brahmin Wedding Menu — Banana Leaf Feast",
  description:
    "Explore our traditional South Indian Brahmin wedding menus — Janavaasam, Muhurtham feast, Kattusatham & custom packages. Authentic recipes served on banana leaf.",
  alternates: { canonical: "https://gmmarriagecaterers.com/menu" },
  openGraph: {
    title: "Traditional South Indian Brahmin Wedding Menu — GM Marriage Caterers",
    description:
      "Traditional banana leaf feast menus for Janavaasam, Muhurtham, Kattusatham & custom events. Authentic Brahmin recipes.",
    url: "https://gmmarriagecaterers.com/menu",
  },
};

export default function MenuPage() {
  return <Menu />;
}
