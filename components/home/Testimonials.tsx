import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const items = t("testimonials.items") as any as Array<{ name: string; location: string; event: string; text: string }>;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[current];

  return (
    <section className="section-padding bg-forest">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading tKey="testimonials.heading" light />

        <svg width="48" height="36" viewBox="0 0 48 36" className="mx-auto mb-6">
          <path d="M14 18C10 18 8 14 8 10C8 4 12 0 18 0V4C14 4 12 6 12 10H18V18H14ZM32 18C28 18 26 14 26 10C26 4 30 0 36 0V4C32 4 30 6 30 10H36V18H32Z" fill="#C9A84C" />
        </svg>

        <div className="relative h-48 md:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <p className={`text-ivory/90 text-lg md:text-xl leading-relaxed mb-6 ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                "{item.text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {stars.map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 18 18" fill="#F5C842">
                    <path d="M9 1L11.5 6L17 7L13 11L14 16.5L9 14L4 16.5L5 11L1 7L6.5 6L9 1Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gold font-garamond font-bold text-lg">{item.name}</p>
              <p className="text-ivory/60 text-sm font-lato">{item.location} · {item.event}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-ivory/30"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
