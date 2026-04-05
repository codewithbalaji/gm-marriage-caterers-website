"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

const foods = [
  { img: "/food-payasam.jpg", ta: "பால் பாயசம்", en: "Paal Payasam", tag: "Sweet" },
  { img: "/food-kalkandu.jpg", ta: "கல்கண்டு சாதம்", en: "Kalkandu Sadham", tag: "Breakfast" },
  { img: "/food-kosamalli.jpg", ta: "கோசமல்லி", en: "Kosamalli", tag: "Salad" },
  { img: "/food-sambar.jpg", ta: "சாம்பார்", en: "Sambar", tag: "Main" },
  { img: "/food-appalam.jpg", ta: "அப்பளம் & வடை", en: "Appalam & Vadai", tag: "Side" },
  { img: "/food-thali.jpg", ta: "வாழை இலை விருந்து", en: "Banana Leaf Feast", tag: "Full Meal" },
];

export default function MenuTeaser() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tKey="menuTeaser.heading" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, i) => (
            <motion.div
              key={food.en}
              className="rounded-lg overflow-hidden bg-card border border-gold-light/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="overflow-hidden h-48 relative">
                <Image
                  src={food.img}
                  alt={food.en}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-1 bg-saffron/10 text-saffron rounded-full font-lato font-bold">
                  {food.tag}
                </span>
                <h3 className="font-tamil text-forest font-semibold mt-2">{food.ta}</h3>
                <p className="font-garamond text-forest-light text-sm">{food.en}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className={`inline-block px-8 py-3 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("menuTeaser.viewFull")}
          </Link>
        </div>
      </div>
    </section>
  );
}
