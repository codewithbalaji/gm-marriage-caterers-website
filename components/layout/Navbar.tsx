import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "nav.about" },
  { path: "/services", key: "nav.services" },
  { path: "/menu", key: "nav.menu" },
  { path: "/gallery", key: "nav.gallery" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{ backgroundColor: scrolled ? "#1B3A2D" : "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center border-2 border-gold">
              <span className="text-gold font-garamond font-bold text-lg">GM</span>
            </div>
            <span className="hidden sm:block text-ivory font-garamond text-lg font-semibold">
              GM Marriage Caterers
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-lato transition-colors ${
                  location.pathname === link.path
                    ? "text-gold font-bold"
                    : "text-ivory/80 hover:text-gold"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              to="/book"
              className="px-5 py-2 bg-gold text-forest font-lato font-bold text-sm rounded-full hover:bg-gold-light transition-colors"
            >
              {t("nav.book")}
            </Link>
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="px-3 py-1.5 border border-ivory/30 rounded-full text-ivory text-xs font-lato hover:border-gold hover:text-gold transition-colors"
            >
              {lang === "en" ? "தமிழ்" : "EN"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="px-2 py-1 border border-ivory/30 rounded-full text-ivory text-xs"
            >
              {lang === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-ivory p-2"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-forest-dark/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-forest-dark z-50 lg:hidden flex flex-col p-8 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 text-lg font-lato ${
                      location.pathname === link.path ? "text-gold font-bold" : "text-ivory/80"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/book"
                  className="mt-4 block text-center px-5 py-3 bg-gold text-forest font-bold rounded-full"
                >
                  {t("nav.book")}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
