"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const eventTypes = [
  "marriage", "betrothal", "seemantham", "upanayanam", "ayushya",
  "grihapravesam", "sashtiabdha", "sadabhishekam", "punyahavachanam", "corporate"
];

export default function BookNow() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", mobile: "", email: "", eventType: "", eventDate: "", venue: "", guests: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gold-light bg-ivory text-forest font-lato focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold";
  const labelClass = `block text-sm font-semibold text-forest mb-1 ${lang === "ta" ? "font-tamil" : "font-lato"}`;

  return (
    <>
      <section className="pt-24 pb-8 bg-forest text-center">
        <h1 className={`text-4xl md:text-5xl font-bold text-ivory ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
          {t("bookPage.heading")}
        </h1>
        <p className="text-gold mt-2 font-lato">{t("bookPage.sub")}</p>
      </section>

      <section className="section-padding bg-ivory">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            className="bg-card rounded-xl p-6 md:p-8 border-2 border-gold-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto mb-4">
                  <circle cx="32" cy="32" r="28" fill="#C9A84C" opacity="0.2" />
                  <path d="M20 32L28 40L44 24" stroke="#C9A84C" strokeWidth="4" fill="none" />
                </svg>
                <p className={`text-forest text-xl font-bold ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                  {t("bookPage.form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>{t("bookPage.form.name")} *</label>
                  <input type="text" required className={inputClass} placeholder={t("bookPage.form.placeholders.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>{t("bookPage.form.mobile")} *</label>
                  <input type="tel" required className={inputClass} placeholder={t("bookPage.form.placeholders.mobile")} value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>{t("bookPage.form.email")}</label>
                  <input type="email" className={inputClass} placeholder={t("bookPage.form.placeholders.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>{t("bookPage.form.eventType")} *</label>
                  <select required className={inputClass} value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}>
                    <option value="">{t("bookPage.form.selectEvent")}</option>
                    {eventTypes.map((et) => (
                      <option key={et} value={et}>{t(`services.${et}.name`)}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t("bookPage.form.eventDate")} *</label>
                    <input type="date" required className={inputClass} value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelClass}>{t("bookPage.form.guests")} *</label>
                    <input type="number" required min="10" className={inputClass} placeholder={t("bookPage.form.placeholders.guests")} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t("bookPage.form.venue")} *</label>
                  <input type="text" required className={inputClass} placeholder={t("bookPage.form.placeholders.venue")} value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} />
                </div>
                <div>
                  <label className={labelClass}>{t("bookPage.form.message")}</label>
                  <textarea rows={3} className={inputClass} placeholder={t("bookPage.form.placeholders.message")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3.5 bg-forest text-ivory font-bold rounded-full hover:bg-forest-light transition-colors text-lg ${lang === "ta" ? "font-tamil" : "font-lato"}`}
                >
                  {t("bookPage.form.submit")}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-xl p-6 border border-gold-light/50">
              <h3 className={`text-forest font-bold text-xl mb-4 ${lang === "ta" ? "font-tamil" : "font-garamond"}`}>
                {t("bookPage.contact.heading")}
              </h3>
              <div className="space-y-3 text-forest-light font-lato text-sm">
                <p>{t("bookPage.contact.address")}</p>
                <p>
                  📞 <a href="tel:+919282117620" className="text-forest hover:text-gold">9282117620</a>
                  {" / "}
                  <a href="tel:+919677067620" className="text-forest hover:text-gold">9677067620</a>
                  {" / "}
                  <a href="tel:+919677037620" className="text-forest hover:text-gold">9677037620</a>
                </p>
                <p>✉️ <a href="mailto:ganesan@gmmarriagecaterers.com" className="text-forest hover:text-gold">ganesan@gmmarriagecaterers.com</a></p>
                <p>🕐 {t("bookPage.contact.hours")}</p>
              </div>
              <a
                href="https://wa.me/919282117620?text=Hello%20GM%20Marriage%20Caterers%2C%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-ivory font-bold rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t("bookPage.contact.whatsapp")}
              </a>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-gold-light/50 h-64 md:h-80">
              <iframe
                title="GM Marriage Caterers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.85719692678964!2d80.15265366592944!3d13.11722308535343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52632dd9f403cb%3A0x5622591e4a5f4e15!2sGM%20MARRIAGE%20CATERERS!5e0!3m2!1sen!2sin!4v1776698038909!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
