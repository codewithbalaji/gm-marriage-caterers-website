import type { Metadata } from "next";
import BookNow from '@/components/booknow/BookNow';

export const metadata: Metadata = {
  title: "Book South Indian Wedding Catering — Get a Free Quote",
  description:
    "Book GM Marriage Caterers for your wedding, betrothal, or event. Contact us at 9282117620 or fill our enquiry form. Serving all of Tamil Nadu for 25+ years.",
  alternates: { canonical: "https://gmmarriagecaterers.com/booknow" },
  openGraph: {
    title: "Book South Indian Wedding Catering — GM Marriage Caterers",
    description:
      "Get a free quote for your wedding or event. Call 9282117620 or enquire online. Serving Tamil Nadu for 25+ years.",
    url: "https://gmmarriagecaterers.com/booknow",
  },
};

export default function BookNowPage() {
  return <BookNow />;
}
