interface IconProps {
  size?: number;
  className?: string;
}

export const MarriageIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8C28 8 20 16 20 24C20 28 22 30 26 30C28 30 30 28 32 26C34 28 36 30 38 30C42 30 44 28 44 24C44 16 36 8 32 8Z" fill="#C9A84C" />
    <path d="M16 32C12 32 8 36 8 42C8 48 12 52 16 52C20 52 22 50 24 48L26 46C24 44 22 40 22 36C22 34 20 32 16 32Z" fill="#1B3A2D" />
    <path d="M48 32C52 32 56 36 56 42C56 48 52 52 48 52C44 52 42 50 40 48L38 46C40 44 42 40 42 36C42 34 44 32 48 32Z" fill="#1B3A2D" />
    <circle cx="32" cy="44" r="10" fill="#C9A84C" opacity="0.3" />
    <path d="M28 40C30 38 34 38 36 40C38 42 38 46 36 48C34 50 30 50 28 48C26 46 26 42 28 40Z" fill="#C9A84C" />
    <circle cx="24" cy="20" r="2" fill="#1B3A2D" />
    <circle cx="40" cy="20" r="2" fill="#1B3A2D" />
  </svg>
);

export const BetrothalIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="22" cy="28" r="8" stroke="#C9A84C" strokeWidth="3" fill="none" />
    <circle cx="42" cy="28" r="8" stroke="#1B3A2D" strokeWidth="3" fill="none" />
    <path d="M30 28C30 24 34 24 34 28" stroke="#C9A84C" strokeWidth="2" />
    <ellipse cx="32" cy="48" rx="16" ry="6" fill="#1B3A2D" opacity="0.15" />
    <path d="M20 44L24 40L28 44L32 40L36 44L40 40L44 44" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="22" cy="28" r="3" fill="#C9A84C" opacity="0.4" />
    <circle cx="42" cy="28" r="3" fill="#1B3A2D" opacity="0.4" />
  </svg>
);

export const SeemanthamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="20" r="8" fill="#C9A84C" opacity="0.3" />
    <path d="M24 28C24 28 26 36 32 44C38 36 40 28 40 28" stroke="#1B3A2D" strokeWidth="3" fill="none" />
    <path d="M28 18C30 14 34 14 36 18" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="26" cy="12" r="2" fill="#C9A84C" />
    <circle cx="38" cy="12" r="2" fill="#C9A84C" />
    <circle cx="32" cy="10" r="2" fill="#C9A84C" />
    <path d="M20 48C24 46 28 46 32 48C36 46 40 46 44 48" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="36" rx="4" ry="5" fill="#C9A84C" opacity="0.2" />
  </svg>
);

export const UpanayanamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M16 16C16 16 32 24 48 16" stroke="#C9A84C" strokeWidth="3" fill="none" />
    <path d="M16 16C16 32 24 48 32 48" stroke="#C9A84C" strokeWidth="3" fill="none" />
    <path d="M48 16C48 32 40 48 32 48" stroke="#C9A84C" strokeWidth="3" fill="none" />
    <circle cx="32" cy="28" r="6" fill="#1B3A2D" opacity="0.2" />
    <circle cx="32" cy="28" r="3" fill="#C9A84C" />
    <circle cx="16" cy="16" r="3" fill="#1B3A2D" />
    <circle cx="48" cy="16" r="3" fill="#1B3A2D" />
    <circle cx="32" cy="48" r="3" fill="#1B3A2D" />
  </svg>
);

export const AyushyaIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 52V28" stroke="#1B3A2D" strokeWidth="3" />
    <path d="M24 52H40" stroke="#1B3A2D" strokeWidth="3" />
    <path d="M32 28C28 20 24 16 28 10C30 8 34 8 36 10C40 16 36 20 32 28Z" fill="#C9A84C" />
    <path d="M32 24C30 18 28 16 30 12C31 11 33 11 34 12C36 16 34 18 32 24Z" fill="#D4880A" />
    <circle cx="22" cy="38" r="2" fill="#C9A84C" opacity="0.5" />
    <circle cx="42" cy="38" r="2" fill="#C9A84C" opacity="0.5" />
    <path d="M26 44C28 42 36 42 38 44" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
  </svg>
);

export const GrihapravesamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8L8 28H16V52H48V28H56L32 8Z" fill="#1B3A2D" opacity="0.15" />
    <path d="M32 8L8 28H16V52H48V28H56L32 8Z" stroke="#1B3A2D" strokeWidth="2.5" fill="none" />
    <rect x="26" y="36" width="12" height="16" rx="1" fill="#C9A84C" opacity="0.4" />
    <path d="M26 36H38" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="36" cy="44" r="1.5" fill="#1B3A2D" />
    <path d="M22 28L32 14L42 28" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="32" cy="22" r="2" fill="#C9A84C" />
  </svg>
);

export const SashtiabdhaIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <text x="14" y="38" fontFamily="serif" fontSize="22" fontWeight="bold" fill="#1B3A2D">60</text>
    <circle cx="32" cy="12" r="4" fill="#C9A84C" />
    <path d="M28 12C26 8 30 6 32 8C34 6 38 8 36 12" fill="#C9A84C" />
    <circle cx="16" cy="48" r="3" fill="#C9A84C" opacity="0.3" />
    <circle cx="48" cy="48" r="3" fill="#C9A84C" opacity="0.3" />
    <path d="M12 52C20 46 44 46 52 52" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="20" cy="44" r="2" fill="#C9A84C" opacity="0.5" />
    <circle cx="44" cy="44" r="2" fill="#C9A84C" opacity="0.5" />
  </svg>
);

export const SadabhishekamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M16 12H48V8H16V12Z" fill="#C9A84C" />
    <rect x="14" y="12" width="36" height="4" rx="1" fill="#1B3A2D" />
    <line x1="16" y1="16" x2="16" y2="52" stroke="#1B3A2D" strokeWidth="3" />
    <line x1="48" y1="16" x2="48" y2="52" stroke="#1B3A2D" strokeWidth="3" />
    <circle cx="28" cy="34" r="6" fill="#C9A84C" opacity="0.3" />
    <circle cx="36" cy="34" r="6" fill="#C9A84C" opacity="0.3" />
    <path d="M26 38C26 38 28 42 32 42C36 42 38 38 38 38" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
    <circle cx="28" cy="32" r="1.5" fill="#1B3A2D" />
    <circle cx="36" cy="32" r="1.5" fill="#1B3A2D" />
  </svg>
);

export const PunyahavachanamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M22 28C22 20 26 14 32 14C38 14 42 20 42 28V38H22V28Z" fill="#C9A84C" opacity="0.3" />
    <path d="M22 28C22 20 26 14 32 14C38 14 42 20 42 28V38H22V28Z" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
    <ellipse cx="32" cy="12" rx="6" ry="4" fill="#1B3A2D" />
    <path d="M26 8C28 4 32 2 32 2C32 2 36 4 38 8" stroke="#1B3A2D" strokeWidth="2" fill="none" />
    <rect x="20" y="38" width="24" height="4" rx="1" fill="#1B3A2D" />
    <path d="M18 42H46V48C46 50 44 52 42 52H22C20 52 18 50 18 48V42Z" fill="#C9A84C" opacity="0.2" />
    <line x1="32" y1="14" x2="32" y2="6" stroke="#1B3A2D" strokeWidth="2" />
  </svg>
);

export const CorporateIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="12" y="24" width="40" height="28" rx="3" fill="#1B3A2D" opacity="0.15" />
    <rect x="12" y="24" width="40" height="28" rx="3" stroke="#1B3A2D" strokeWidth="2.5" fill="none" />
    <path d="M20 48V32H28V48" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <path d="M36 48V36H44V48" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="16" rx="8" ry="3" fill="#C9A84C" opacity="0.3" />
    <path d="M24 16L32 8L40 16" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="32" cy="12" r="2" fill="#C9A84C" />
  </svg>
);
