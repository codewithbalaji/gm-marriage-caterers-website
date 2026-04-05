"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const allImages = [
  { src: "/gallery-1.jpg", cat: "Serving" },
  { src: "/gallery-2.jpg", cat: "Food" },
  { src: "/gallery-3.jpg", cat: "Rituals" },
  { src: "/gallery-4.jpg", cat: "Serving" },
  { src: "/gallery-5.jpg", cat: "Food" },
  { src: "/gallery-6.jpg", cat: "Event Setup" },
  { src: "/food-payasam.jpg", cat: "Food" },
  { src: "/food-sambar.jpg", cat: "Food" },
  { src: "/food-thali.jpg", cat: "Food" },
  { src: "/food-kosamalli.jpg", cat: "Food" },
  { src: "/food-appalam.jpg", cat: "Food" },
  { src: "/food-kalkandu.jpg", cat: "Food" },
];

const filters = ["All", "Food", "Event Setup", "Serving", "Rituals"];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.cat === filter);

  return (
    <>
      <section className="pt-24 pb-8 bg-forest text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
          {t("galleryPage.heading")}
        </h1>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                  filter === f ? "bg-gold text-forest" : "bg-cream text-forest hover:bg-gold-light"
                } font-lato`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
              >
                <div className="relative w-full h-64">
                  <Image src={img.src} alt={img.cat} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-forest-dark/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-full max-h-[85vh] w-auto h-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox]?.src}
                alt=""
                width={1200}
                height={800}
                className="rounded-lg object-contain max-h-[85vh]"
              />
            </motion.div>
            <button
              className="absolute top-6 right-6 text-ivory text-3xl hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            {lightbox > 0 && (
              <button
                className="absolute left-4 text-ivory text-4xl hover:text-gold"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              >
                ‹
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button
                className="absolute right-4 text-ivory text-4xl hover:text-gold"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
