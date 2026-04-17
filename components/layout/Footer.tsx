"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-forest-dark text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="GM Marriage Caterers"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-garamond text-2xl font-bold text-gold">GM Marriage Caterers</h3>
                <p className={`text-sm text-ivory/60 ${lang === "ta" ? "font-tamil" : ""}`}>
                  கணேசன் ஜி.எம். மேரேஜ் கேட்டரர்ஸ்
                </p>
              </div>
            </div>
            <p className={`text-ivory/70 text-sm leading-relaxed ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-gold font-semibold mb-4 ${lang === "ta" ? "font-tamil" : "font-garamond"} text-lg`}>
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-2">
              {[
                { path: "/", key: "nav.home" },
                { path: "/about", key: "nav.about" },
                { path: "/services", key: "nav.services" },
                { path: "/menu", key: "nav.menu" },
                { path: "/gallery", key: "nav.gallery" },
                { path: "/booknow", key: "nav.book" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block text-ivory/70 hover:text-gold transition-colors text-sm ${lang === "ta" ? "font-tamil" : "font-lato"}`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-gold font-semibold mb-4 ${lang === "ta" ? "font-tamil" : "font-garamond"} text-lg`}>
              {t("footer.contact")}
            </h4>
            <div className="space-y-3 text-sm text-ivory/70 font-lato">
              <p>31/4 & 31/5, Old Bank of Baroda Street,<br/>Secretariat Colony, Ambattur,<br/>Chennai - 600 053</p>
              <p>
                <a href="tel:+919282117620" className="hover:text-gold transition-colors">9282117620</a>
                {" / "}
                <a href="tel:+919677067620" className="hover:text-gold transition-colors">9677067620</a>
                {" / "}
                <a href="tel:+919677037620" className="hover:text-gold transition-colors">9677037620</a>
              </p>
              <p>
                <a href="mailto:ganesan@gmmarriagecaterers.com" className="hover:text-gold transition-colors">
                  ganesan@gmmarriagecaterers.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <p className={`text-center text-ivory/50 text-xs ${lang === "ta" ? "font-tamil" : "font-lato"}`}>
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
