"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import {
  MarriageIcon, BetrothalIcon, SeemanthamIcon, UpanayanamIcon,
  AyushyaIcon, GrihapravesamIcon, SashtiabdhaIcon, SadabhishekamIcon,
  PunyahavachanamIcon, CorporateIcon
} from "@/components/icons/ServiceIcons";
import {
  NadaswaramIcon, FlowersIcon, SastrigalIcon, KolamIcon,
  SeerbakshanamIcon, ThambulaIcon, CoffeeIcon, BuffetIcon,
  KattusathamIcon, PhotoVideoIcon, MusicIcon, MehandiIcon
} from "@/components/icons/ComplementIcons";

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

const complements = [
  { icon: NadaswaramIcon, key: "mangalavadhyam" },
  { icon: FlowersIcon, key: "flowers" },
  { icon: SastrigalIcon, key: "sastrigal" },
  { icon: KolamIcon, key: "kolam" },
  { icon: SeerbakshanamIcon, key: "seerbakshanam" },
  { icon: ThambulaIcon, key: "thambula" },
  { icon: CoffeeIcon, key: "coffee" },
  { icon: BuffetIcon, key: "buffet" },
  { icon: KattusathamIcon, key: "kattusatham" },
  { icon: PhotoVideoIcon, key: "photoVideo" },
  { icon: MusicIcon, key: "music" },
  { icon: MehandiIcon, key: "mehandi" },
];

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="pt-24 pb-8 bg-forest text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
          {t("services.heading")}
        </h1>
        <p className="text-gold mt-2 font-lato">{t("services.sub")}</p>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((svc, i) => (
              <motion.div
                key={svc.key}
                className="group flex flex-col bg-card rounded-2xl p-8 border border-gold-light/30 hover:border-gold hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Subtle decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-pale rounded-bl-full opacity-50 -z-10 transition-transform group-hover:scale-110"></div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white group-hover:border-gold transition-colors shadow-lg">
                    <Image
                      src={`/images/services/service_${svc.key}.png`}
                      alt={serviceAltText[svc.key] || t(`services.${svc.key}.name`)}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center flex flex-col z-10">
                  <h3 className={`text-forest font-bold text-2xl mb-3 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                    {t(`services.${svc.key}.name`)}
                  </h3>
                  <p className={`text-forest-light/80 mb-8 flex-1 leading-relaxed ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                    {t(`services.${svc.key}.desc`)}
                  </p>
                  <div>
                    <Link
                      href={`/booknow?event=${svc.key}`}
                      className="inline-block px-8 py-3 bg-forest text-ivory text-sm font-bold rounded-full hover:bg-gold hover:text-forest transition-colors shadow-md hover:shadow-lg font-lato"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeading tKey="complements.heading" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {complements.map((c, i) => (
              <motion.div
                key={c.key}
                className="group relative bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gold-light/40 hover:border-gold hover:bg-gold-pale/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                {/* Minimalist decorative element instead of an image/icon */}
                <div className="w-8 h-[1px] bg-gold mb-4 group-hover:w-16 transition-all duration-500"></div>
                
                <p className={`text-forest font-bold text-lg md:text-xl group-hover:text-forest transition-colors tracking-wide ${lang === "ta" ? "font-tamil leading-relaxed" : "font-garamond"}`}>
                  {t(`complements.${c.key}`)}
                </p>
                
                <div className="w-8 h-[1px] bg-gold mt-4 group-hover:w-16 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
