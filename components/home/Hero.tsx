"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/hero-feast.jpg" alt="Traditional South Indian banana leaf feast" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="absolute inset-0 kolam-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          className="text-gold font-garamond italic text-lg md:text-xl mb-6 font-tamil"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("hero.auspicious")}
        </motion.p>

        <motion.h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("hero.heading")}
        </motion.h1>

        <motion.p
          className="text-gold text-lg md:text-xl font-lato mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link
            href="/menu"
            className={`px-8 py-3.5 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors text-lg ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("hero.cta1")}
          </Link>
          <Link
            href="/booknow"
            className={`px-8 py-3.5 border-2 border-ivory text-ivory font-bold rounded-full hover:bg-ivory/10 transition-colors text-lg ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("hero.cta2")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
