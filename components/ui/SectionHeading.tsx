import { useLanguage } from "@/context/LanguageContext";

interface SectionHeadingProps {
  tKey: string;
  subKey?: string;
  light?: boolean;
  className?: string;
}

const LotusDecor = ({ light }: { light?: boolean }) => (
  <svg width="60" height="20" viewBox="0 0 60 20" className="mx-auto">
    <line x1="0" y1="10" x2="20" y2="10" stroke={light ? "#C9A84C" : "#C9A84C"} strokeWidth="1" />
    <path d="M25 10C27 4 30 2 30 2C30 2 33 4 35 10C33 16 30 18 30 18C30 18 27 16 25 10Z" fill="#C9A84C" opacity="0.6" />
    <circle cx="30" cy="10" r="2" fill="#C9A84C" />
    <line x1="40" y1="10" x2="60" y2="10" stroke={light ? "#C9A84C" : "#C9A84C"} strokeWidth="1" />
  </svg>
);

export default function SectionHeading({ tKey, subKey, light, className = "" }: SectionHeadingProps) {
  const { t, lang } = useLanguage();
  const heading = t(tKey);

  return (
    <div className={`text-center mb-12 ${className}`}>
      <LotusDecor light={light} />
      <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold ${lang === "ta" ? "font-tamil" : "font-garamond"} ${light ? "text-ivory" : "text-forest"}`}>
        {heading}
      </h2>
      {subKey && (
        <p className={`mt-3 text-lg ${lang === "ta" ? "font-tamil" : "font-lato"} ${light ? "text-gold-light" : "text-forest-light"}`}>
          {t(subKey)}
        </p>
      )}
      <LotusDecor light={light} />
    </div>
  );
}
