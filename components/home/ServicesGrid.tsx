"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import {
  MarriageIcon, BetrothalIcon, SeemanthamIcon, UpanayanamIcon,
  AyushyaIcon, GrihapravesamIcon, SashtiabdhaIcon, SadabhishekamIcon,
  PunyahavachanamIcon, CorporateIcon
} from "@/components/icons/ServiceIcons";

const services = [
  { icon: MarriageIcon, key: "marriage" },
  { icon: BetrothalIcon, key: "betrothal" },
  { icon: SeemanthamIcon, key: "seemantham" },
  { icon: UpanayanamIcon, key: "upanayanam" },
  { icon: AyushyaIcon, key: "ayushya" },
  { icon: GrihapravesamIcon, key: "grihapravesam" },
  { icon: SashtiabdhaIcon, key: "sashtiabdha" },
  { icon: SadabhishekamIcon, key: "sadabhishekam" },
  { icon: PunyahavachanamIcon, key: "punyahavachanam" },
  { icon: CorporateIcon, key: "corporate" },
];

const serviceAltText: Record<string, string> = {
  marriage: "Traditional South Indian Brahmin marriage catering with banana leaf feast",
  betrothal: "Betrothal (Nischayatartham) ceremony catering in Tamil Nadu",
  seemantham: "Seemantham baby shower catering with traditional South Indian feast",
  upanayanam: "Upanayanam sacred thread ceremony catering service",
  ayushya: "Ayushya Homam first birthday traditional catering",
  grihapravesam: "Grihapravesam housewarming ceremony catering in Tamil Nadu",
  sashtiabdha: "Sashtiapthapoorthi 60th birthday traditional Brahmin catering",
  sadabhishekam: "Sadabhishekam 80th birthday auspicious feast catering",
  punyahavachanam: "Punyahavachanam purification ceremony catering",
  corporate: "Corporate event South Indian catering service",
};

export default function ServicesGrid() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tKey="services.heading" subKey="services.sub" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.key}
              className="bg-card rounded-lg p-6 text-center border border-transparent hover:border-gold transition-colors cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-light/30 group-hover:border-gold transition-colors">
                  <Image 
                    src={`/images/services/service_${svc.key}.png`} 
                    alt={serviceAltText[svc.key] || t(`services.${svc.key}.name`)}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className={`text-forest font-bold text-lg mb-1 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                {t(`services.${svc.key}.name`)}
              </h3>
              <p className={`text-forest-light/70 text-sm ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                {t(`services.${svc.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
