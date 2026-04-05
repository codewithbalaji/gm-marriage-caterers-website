import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, cat: "Serving", catTa: "பரிமாறுதல்" },
  { src: gallery2, cat: "Food", catTa: "உணவு" },
  { src: gallery3, cat: "Rituals", catTa: "சடங்குகள்" },
  { src: gallery4, cat: "Serving", catTa: "பரிமாறுதல்" },
  { src: gallery5, cat: "Food", catTa: "உணவு" },
  { src: gallery6, cat: "Event Setup", catTa: "நிகழ்வு அமைப்பு" },
];

export default function GalleryTeaser() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-gold-pale">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tKey="galleryTeaser.heading" />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid rounded-lg overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <img src={img.src} alt={img.cat} className="w-full object-cover" loading="lazy" width={800} height={640} />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/60 transition-colors flex items-center justify-center">
                <span className="text-gold font-garamond text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-forest/80 px-4 py-1.5 rounded-full">
                  {lang === "ta" ? img.catTa : img.cat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className={`inline-block px-8 py-3 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("galleryTeaser.viewFull")}
          </Link>
        </div>
      </div>
    </section>
  );
}
