import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
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
                <svc.icon size={48} className="group-hover:scale-110 transition-transform" />
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
