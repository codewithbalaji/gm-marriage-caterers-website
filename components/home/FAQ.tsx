"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: { q: string; a: string }[] = t("faq.items") as unknown as { q: string; a: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="section-padding bg-ivory">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-forest mb-3 ${
                lang === "ta" ? "font-tamil" : "font-garamond"
              }`}
            >
              {t("faq.heading")}
            </h2>
            <div className="gold-divider mx-auto w-24" />
            <p
              className={`text-forest/70 mt-4 ${
                lang === "ta" ? "font-tamil" : "font-lato"
              }`}
            >
              {t("faq.sub")}
            </p>
          </div>

          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="border border-gold/20 rounded-lg overflow-hidden bg-white"
              >
                <button
                  className={`w-full text-left px-6 py-4 flex justify-between items-center gap-4 font-semibold text-forest hover:text-gold transition-colors ${
                    lang === "ta" ? "font-tamil" : "font-lato"
                  }`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <h3 className="text-base">{item.q}</h3>
                  <span className="text-gold text-xl flex-shrink-0">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p
                        className={`px-6 pb-5 text-forest/70 leading-relaxed text-sm ${
                          lang === "ta" ? "font-tamil" : "font-lato"
                        }`}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
