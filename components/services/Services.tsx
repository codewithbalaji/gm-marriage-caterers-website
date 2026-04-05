"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
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
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.key}
              className={`flex flex-col md:flex-row items-center gap-6 bg-card rounded-xl p-6 border border-gold-light/30 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gold-pale rounded-full">
                <svc.icon size={48} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className={`text-forest font-bold text-2xl mb-2 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                  {t(`services.${svc.key}.name`)}
                </h3>
                <p className={`text-forest-light/70 ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                  {t(`services.${svc.key}.desc`)}
                </p>
              </div>
              <Link
                href={`/booknow?event=${svc.key}`}
                className="px-5 py-2 bg-forest text-ivory text-sm font-bold rounded-full hover:bg-forest-light transition-colors font-lato shrink-0"
              >
                Enquire
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeading tKey="complements.heading" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {complements.map((c, i) => (
              <motion.div
                key={c.key}
                className="bg-card rounded-lg p-4 text-center border border-gold-light/30 hover:border-gold transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <c.icon size={36} className="mx-auto mb-2" />
                <p className={`text-forest text-xs font-semibold ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
                  {t(`complements.${c.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
