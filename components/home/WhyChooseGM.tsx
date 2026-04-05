"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { AuthenticTasteIcon, RitualPrecisionIcon, FullServiceIcon } from "@/components/icons/WhyUsIcons";

const pillars = [
  { icon: AuthenticTasteIcon, key: "taste" },
  { icon: RitualPrecisionIcon, key: "ritual" },
  { icon: FullServiceIcon, key: "fullService" },
];

export default function WhyChooseGM() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote */}
          <motion.div
            className="border-2 border-gold rounded-xl p-8 md:p-12 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-gold mb-4 mx-auto lg:mx-0">
              <path d="M14 24C10 24 8 20 8 16C8 10 12 6 18 6V10C14 10 12 12 12 16H18V24H14ZM32 24C28 24 26 20 26 16C26 10 30 6 36 6V10C32 10 30 12 30 16H36V24H32Z" fill="currentColor" />
            </svg>
            <h2 className={`text-3xl md:text-4xl font-bold text-forest mb-4 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
              {t("whyUs.quote")}
            </h2>
            <p className="text-sm text-gold font-tamil">ஓம் ஸ்ரீ கணேசாய நமஹ</p>
          </motion.div>

          {/* Pillars */}
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.key}
                className="flex gap-5"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="shrink-0">
                  <p.icon size={56} />
                </div>
                <div>
                  <h3 className={`text-forest font-bold text-xl mb-1 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                    {t(`whyUs.${p.key}.title`)}
                  </h3>
                  <p className={`text-forest-light/70 text-sm leading-relaxed ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                    {t(`whyUs.${p.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
