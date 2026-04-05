interface IconProps {
  size?: number;
  className?: string;
}

export const AuthenticTasteIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="36" r="16" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="36" r="10" fill="#C9A84C" opacity="0.15" />
    <path d="M24 36C26 30 28 28 32 28C36 28 38 30 40 36" stroke="#1B3A2D" strokeWidth="2" fill="none" />
    <circle cx="28" cy="34" r="2" fill="#C9A84C" />
    <circle cx="36" cy="34" r="2" fill="#C9A84C" />
    <path d="M30 40C31 41 33 41 34 40" stroke="#1B3A2D" strokeWidth="1.5" fill="none" />
    <path d="M32 20V12" stroke="#C9A84C" strokeWidth="2" />
    <path d="M28 14L32 8L36 14" stroke="#C9A84C" strokeWidth="2" fill="none" />
  </svg>
);

export const RitualPrecisionIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8V20" stroke="#1B3A2D" strokeWidth="3" />
    <path d="M26 20H38V28C38 34 36 40 32 44C28 40 26 34 26 28V20Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="2" />
    <path d="M22 24C18 26 16 30 16 34" stroke="#1B3A2D" strokeWidth="2" fill="none" />
    <path d="M42 24C46 26 48 30 48 34" stroke="#1B3A2D" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="3" fill="#C9A84C" />
    <path d="M20 48H44" stroke="#C9A84C" strokeWidth="2" />
    <path d="M24 52H40" stroke="#C9A84C" strokeWidth="1.5" />
  </svg>
);

export const FullServiceIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="16" y="10" width="32" height="44" rx="4" stroke="#1B3A2D" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="16" r="4" fill="#C9A84C" opacity="0.3" />
    <path d="M24 26L30 32L42 20" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
    <line x1="24" y1="38" x2="40" y2="38" stroke="#1B3A2D" strokeWidth="2" opacity="0.4" />
    <line x1="24" y1="44" x2="36" y2="44" stroke="#1B3A2D" strokeWidth="2" opacity="0.4" />
    <path d="M28 16C30 14 34 14 36 16" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
  </svg>
);
