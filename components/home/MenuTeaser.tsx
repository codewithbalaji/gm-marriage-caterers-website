import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import foodPayasam from "@/assets/food-payasam.jpg";
import foodSambar from "@/assets/food-sambar.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodKosamalli from "@/assets/food-kosamalli.jpg";
import foodAppalam from "@/assets/food-appalam.jpg";
import foodKalkandu from "@/assets/food-kalkandu.jpg";

const foods = [
  { img: foodPayasam, ta: "பால் பாயசம்", en: "Paal Payasam", tag: "Sweet" },
  { img: foodKalkandu, ta: "கல்கண்டு சாதம்", en: "Kalkandu Sadham", tag: "Breakfast" },
  { img: foodKosamalli, ta: "கோசமல்லி", en: "Kosamalli", tag: "Salad" },
  { img: foodSambar, ta: "சாம்பார்", en: "Sambar", tag: "Main" },
  { img: foodAppalam, ta: "அப்பளம் & வடை", en: "Appalam & Vadai", tag: "Side" },
  { img: foodThali, ta: "வாழை இலை விருந்து", en: "Banana Leaf Feast", tag: "Full Meal" },
];

export default function MenuTeaser() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tKey="menuTeaser.heading" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, i) => (
            <motion.div
              key={food.en}
              className="rounded-lg overflow-hidden bg-card border border-gold-light/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="overflow-hidden h-48">
                <motion.img
                  src={food.img}
                  alt={food.en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={640}
                  height={640}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-1 bg-saffron/10 text-saffron rounded-full font-lato font-bold">
                  {food.tag}
                </span>
                <h3 className="font-tamil text-forest font-semibold mt-2">{food.ta}</h3>
                <p className="font-garamond text-forest-light text-sm">{food.en}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className={`inline-block px-8 py-3 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors ${lang === "ta" ? "font-tamil" : "font-lato"}`}
          >
            {t("menuTeaser.viewFull")}
          </Link>
        </div>
      </div>
    </section>
  );
}
