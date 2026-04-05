interface IconProps {
  size?: number;
  className?: string;
}

export const CalendarStarIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="10" y="16" width="44" height="38" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="10" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="10" x2="22" y2="22" stroke="currentColor" strokeWidth="2.5" />
    <line x1="42" y1="10" x2="42" y2="22" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 33L34.5 38L40 39L36 43L37 48.5L32 46L27 48.5L28 43L24 39L29.5 38L32 33Z" fill="#F5C842" />
  </svg>
);

export const ServingDomeIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M12 40C12 26 20 16 32 16C44 16 52 26 52 40" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="8" y1="40" x2="56" y2="40" stroke="currentColor" strokeWidth="3" />
    <line x1="32" y1="16" x2="32" y2="10" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="8" r="3" fill="#F5C842" />
    <path d="M40 32L44 36L38 42" stroke="#F5C842" strokeWidth="2.5" fill="none" />
    <rect x="14" y="42" width="36" height="6" rx="2" fill="currentColor" opacity="0.15" />
  </svg>
);

export const LocationPinIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 6C22 6 14 14 14 24C14 38 32 56 32 56C32 56 50 38 50 24C50 14 42 6 32 6Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="24" r="8" fill="#F5C842" opacity="0.3" />
    <circle cx="32" cy="24" r="4" fill="#F5C842" />
  </svg>
);

export const HeartStarIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 52C32 52 8 36 8 22C8 14 14 8 22 8C26 8 30 10 32 14C34 10 38 8 42 8C50 8 56 14 56 22C56 36 32 52 32 52Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M32 24L34 28.5L39 29L35.5 32.5L36.5 37.5L32 35L27.5 37.5L28.5 32.5L25 29L30 28.5L32 24Z" fill="#F5C842" />
  </svg>
);
