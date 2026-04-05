"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarStarIcon, ServingDomeIcon, LocationPinIcon, HeartStarIcon } from "@/components/icons/StatIcons";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, target, count]);

  return (
    <div ref={inViewRef}>
      <motion.span ref={ref} className="text-turmeric text-4xl md:text-5xl font-garamond font-bold">
        {rounded}
      </motion.span>
      <span className="text-turmeric text-4xl md:text-5xl font-garamond font-bold">{suffix}</span>
    </div>
  );
}

const stats = [
  { icon: CalendarStarIcon, target: 25, suffix: "+", key: "trust.years" },
  { icon: ServingDomeIcon, target: 10000, suffix: "+", key: "trust.functions" },
  { icon: LocationPinIcon, target: 500, suffix: "+", key: "trust.events" },
  { icon: HeartStarIcon, target: 100, suffix: "%", key: "trust.satisfaction" },
];

export default function TrustBar() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-forest py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <stat.icon size={40} className="mx-auto mb-3 text-turmeric" />
            <Counter target={stat.target} suffix={stat.suffix} />
            <p className={`text-ivory/80 mt-2 text-sm ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
              {t(stat.key)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
