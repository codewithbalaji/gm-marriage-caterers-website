"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABanner() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 kolam-pattern" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-8 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("cta.heading")}
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/booknow"
            className={`px-8 py-3.5 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors text-lg ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("cta.book")}
          </Link>
          <a
            href="tel:+919282117620"
            className={`px-8 py-3.5 border-2 border-ivory text-ivory font-bold rounded-full hover:bg-ivory/10 transition-colors text-lg ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("cta.call")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
