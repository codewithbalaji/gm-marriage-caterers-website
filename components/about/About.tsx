"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { t, lang } = useLanguage();
  const timeline = t("about.timeline") as any as Array<{ year: string; text: string }>;

  return (
    <>
      <section className="pt-24 pb-8 bg-forest text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
          {t("about.heading")}
        </h1>
        <p className="text-gold mt-2 font-lato">{t("about.sub")}</p>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className={`text-lg leading-relaxed text-forest-light ${lang === "ta" ? "font-tamil" : "font-lato"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("about.story")}
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeading tKey={lang === "ta" ? "about.sub" : "about.sub"} />
          <div className="relative border-l-2 border-gold ml-4 md:ml-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="mb-8 pl-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold border-2 border-forest" />
                <span className="text-gold font-garamond font-bold text-xl">{item.year}</span>
                <p className={`text-forest-light mt-1 ${lang === "ta" ? "font-tamil" : "font-lato"}`}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {(["tradition", "quality", "service"] as const).map((key, i) => (
            <motion.div
              key={key}
              className="bg-card rounded-lg p-6 border-t-4 border-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className={`text-forest font-bold text-xl mb-2 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                {t(`about.values.${key}.title`)}
              </h3>
              <p className={`text-forest-light/70 text-sm ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                {t(`about.values.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
