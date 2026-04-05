"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const menuData = {
  janavaasam: {
    sections: [
      { title: "Morning Tiffin", titleTa: "காலை சிற்றுண்டி", items: "Akkaravadisal / Kalkandu Pongal, Nei Pongal, Vadai, Chutney, Kozhukattai, Coffee" },
      { title: "Lunch", titleTa: "மதிய உணவு", items: "Thenkai Arisi Payasam, Thayir Pachadi, Thenkai Kari, Kalyana Koottu, Appalam, Nellikkai, Chitranna, Paruppu Nei, Sadham, Sambar, Rasam, Sweets, Thayir" },
      { title: "Evening Tiffin", titleTa: "மாலை சிற்றுண்டி", items: "Kasi Halwa / Kerala Halwa, Mysore Bonda / Veg Bonda, Rava Dosa / Adai Avial, Sevai / Kichadi, Chutney, Coffee" },
      { title: "Dinner", titleTa: "இரவு உணவு", items: "Payasam, Thayir Pachadi, Sweet Pachadi, Kosamalli, Thenkai Kari, Kara Kari, Veg Koottu, Chips, Appalam, Roast, Nellikkai, Chitranna, Paruppu Nei, Sadham, Sambar, Mor Kuzhambu, Rasam, Poli, Thayir" },
    ]
  },
  muhurtham: {
    sections: [
      { title: "Morning Tiffin", titleTa: "காலை சிற்றுண்டி", items: "Ashooka / Sweet, Idli, Vadai, Nei Pongal, Dosai, Chutney, Sambar, Milagai Podi Oil, Coffee" },
      { title: "Lunch", titleTa: "மதிய உணவு", items: "Sottu Payasam, Thayir Pachadi, Sweet Pachadi, Kosamalli, Kara Kari, Paruppu Usili, Avial, Chips, Appalam, Vadai, Nellikkai, Chitranna, Paruppu Nei, Sadham, Sambar, Vathal Kuzhambu, Rasam, Sweet, Paal Payasam, Thayir" },
      { title: "Evening Tiffin", titleTa: "மாலை சிற்றுண்டி", items: "Sweet, Karam, Coffee" },
      { title: "Dinner", titleTa: "இரவு உணவு", items: "Soup, Roti/Naan with Kireivi, Appam / Idiappam, Kadalai Chaji, Mini Idli, Veg Cutlet / Gobi 65, Veg Pulav with Raitha, Veg Kari, Green Rice, Sadham, Rasam, Chips, Pappadam, Sweet, Paadam, Mor Milagai, Vathal Kuzhambu, Ice Cream, Fruit Salad, Pazham, Beeda" },
    ]
  },
  kattusatham: {
    sections: [
      { title: "Kattusatham Basket", titleTa: "கட்டுச்சாதம் கூடை", items: "Payasam, Poo Thenki Thayir Pachadi, Sweet Pachadi, Podimas, Kara Kari, Thakkali Koottu, Vadaam, Arisi Appalam, Thayir Vadai, Nellikkai, Vepapalai Katti, Chitranna, Paruppu Nei, Sadham, Pitlai, Milagu Kuzhambu, Mysore Rasam, Sweet" },
      { title: "Kattusatham Plain", titleTa: "கட்டுச்சாதம் சாதாரண", items: "Sakkara Pongal, Idli, Puliyodarai, Thayir Sadham" },
    ]
  },
  custom: {
    sections: [
      { title: "Custom Menu", titleTa: "தனிப்பயன் மெனு", items: "We craft personalized menus tailored to your family traditions, dietary preferences, and event requirements. Contact us to design your perfect feast." },
    ]
  },
};

const tabs = ["janavaasam", "muhurtham", "kattusatham", "custom"] as const;

export default function Menu() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("janavaasam");
  const [openSection, setOpenSection] = useState<number | null>(0);
  const data = menuData[activeTab as keyof typeof menuData];

  return (
    <>
      <section className="pt-24 pb-8 bg-forest text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
          {t("menuPage.heading")}
        </h1>
        <p className="text-gold mt-2 font-lato">{t("menuPage.sub")}</p>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenSection(0); }}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors ${
                  activeTab === tab
                    ? "bg-gold text-forest"
                    : "bg-cream text-forest hover:bg-gold-light"
                } ${lang === "ta" ? "font-tamil" : "font-lato"}`}
              >
                {t(`menuPage.tabs.${tab}`)}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {data.sections.map((section, i) => (
              <div key={i} className="border border-gold-light/50 rounded-lg overflow-hidden bg-card">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                >
                  <h3 className={`text-forest font-bold text-lg ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                    {lang === "ta" ? section.titleTa : section.title}
                  </h3>
                  <motion.svg
                    width="20" height="20" viewBox="0 0 20 20"
                    animate={{ rotate: openSection === i ? 180 : 0 }}
                    className="text-gold flex-shrink-0"
                  >
                    <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="2" fill="none" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openSection === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="gold-divider mb-4" />
                        <div className="flex flex-wrap gap-2">
                          {section.items.split(", ").map((item, j) => (
                            <span key={j} className="px-3 py-1.5 bg-gold-pale text-forest text-sm rounded-full font-lato border border-gold-light/50">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/booknow"
              className={`px-8 py-3 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-colors text-center ${lang === "ta" ? "font-tamil" : "font-lato"}`}
            >
              {t("menuPage.customize")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
