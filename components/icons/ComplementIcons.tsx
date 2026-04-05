interface IconProps {
  size?: number;
  className?: string;
}

export const NadaswaramIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M18 12L42 44" stroke="#1B3A2D" strokeWidth="3" />
    <path d="M42 44C42 44 50 50 52 52C54 54 52 56 48 54C44 52 38 46 38 46" fill="#C9A84C" />
    <circle cx="20" cy="14" r="3" fill="#C9A84C" />
    <circle cx="26" cy="22" r="1.5" fill="#C9A84C" opacity="0.5" />
    <circle cx="30" cy="28" r="1.5" fill="#C9A84C" opacity="0.5" />
  </svg>
);

export const FlowersIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="24" r="4" fill="#C9A84C" />
    <circle cx="26" cy="20" r="4" fill="#C9A84C" opacity="0.6" />
    <circle cx="38" cy="20" r="4" fill="#C9A84C" opacity="0.6" />
    <circle cx="28" cy="28" r="4" fill="#C9A84C" opacity="0.6" />
    <circle cx="36" cy="28" r="4" fill="#C9A84C" opacity="0.6" />
    <circle cx="32" cy="24" r="2" fill="#1B3A2D" />
    <path d="M32 32V48" stroke="#1B3A2D" strokeWidth="2" />
    <path d="M28 36L32 32L36 36" stroke="#1B3A2D" strokeWidth="1.5" fill="none" />
  </svg>
);

export const SastrigalIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="14" y="12" width="36" height="40" rx="2" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="2" />
    <line x1="20" y1="22" x2="44" y2="22" stroke="#1B3A2D" strokeWidth="1.5" />
    <line x1="20" y1="28" x2="44" y2="28" stroke="#1B3A2D" strokeWidth="1.5" />
    <line x1="20" y1="34" x2="38" y2="34" stroke="#1B3A2D" strokeWidth="1.5" />
    <line x1="20" y1="40" x2="44" y2="40" stroke="#1B3A2D" strokeWidth="1.5" />
  </svg>
);

export const KolamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8L40 24L56 28L44 40L46 56L32 50L18 56L20 40L8 28L24 24Z" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <path d="M32 16L36 26L48 28L40 36L42 48L32 44L22 48L24 36L16 28L28 26Z" fill="#C9A84C" opacity="0.15" />
    <circle cx="32" cy="32" r="3" fill="#1B3A2D" />
  </svg>
);

export const SeerbakshanamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <ellipse cx="32" cy="40" rx="20" ry="8" stroke="#C9A84C" strokeWidth="2" fill="#C9A84C" opacity="0.1" />
    <circle cx="24" cy="32" r="5" fill="#C9A84C" opacity="0.4" />
    <circle cx="36" cy="30" r="6" fill="#C9A84C" opacity="0.3" />
    <circle cx="40" cy="36" r="4" fill="#C9A84C" opacity="0.4" />
    <path d="M28 24L30 18L32 24" stroke="#1B3A2D" strokeWidth="1.5" fill="none" />
  </svg>
);

export const ThambulaIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M20 20H44L40 52H24L20 20Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="2" />
    <path d="M26 20C28 14 36 14 38 20" stroke="#1B3A2D" strokeWidth="2" fill="none" />
    <ellipse cx="32" cy="34" rx="6" ry="4" fill="#1B3A2D" opacity="0.2" />
    <circle cx="32" cy="34" r="3" fill="#1B3A2D" opacity="0.3" />
  </svg>
);

export const CoffeeIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M20 24H36V48C36 50 34 52 32 52H24C22 52 20 50 20 48V24Z" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="2" />
    <ellipse cx="28" cy="24" rx="8" ry="3" fill="#1B3A2D" opacity="0.3" />
    <path d="M36 30C40 30 44 32 44 36C44 40 40 42 36 42" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <path d="M26 16C26 12 28 10 28 10" stroke="#1B3A2D" strokeWidth="1.5" opacity="0.4" />
    <path d="M30 16C30 12 32 10 32 10" stroke="#1B3A2D" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

export const BuffetIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M12 36C12 24 20 16 32 16C44 16 52 24 52 36" stroke="#C9A84C" strokeWidth="2.5" fill="none" />
    <line x1="8" y1="36" x2="56" y2="36" stroke="#1B3A2D" strokeWidth="3" />
    <rect x="12" y="38" width="40" height="8" rx="2" fill="#1B3A2D" opacity="0.15" />
    <circle cx="32" cy="14" r="3" fill="#C9A84C" />
  </svg>
);

export const KattusathamIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M20 16C20 16 22 12 32 12C42 12 44 16 44 16V44C44 48 40 52 32 52C24 52 20 48 20 44V16Z" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="2" />
    <line x1="20" y1="22" x2="44" y2="22" stroke="#1B3A2D" strokeWidth="1.5" />
    <line x1="20" y1="30" x2="44" y2="30" stroke="#1B3A2D" strokeWidth="1.5" />
    <line x1="20" y1="38" x2="44" y2="38" stroke="#1B3A2D" strokeWidth="1.5" />
    <path d="M28 8C30 6 34 6 36 8" stroke="#C9A84C" strokeWidth="2" fill="none" />
  </svg>
);

export const PhotoVideoIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="12" y="18" width="32" height="24" rx="3" stroke="#1B3A2D" strokeWidth="2.5" fill="none" />
    <circle cx="28" cy="30" r="7" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="28" cy="30" r="3" fill="#C9A84C" opacity="0.3" />
    <path d="M44 24L54 18V42L44 36" fill="#C9A84C" opacity="0.3" stroke="#C9A84C" strokeWidth="2" />
  </svg>
);

export const MusicIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <ellipse cx="20" cy="48" rx="8" ry="5" fill="#C9A84C" opacity="0.3" stroke="#C9A84C" strokeWidth="2" />
    <line x1="28" y1="48" x2="28" y2="12" stroke="#1B3A2D" strokeWidth="3" />
    <path d="M28 12C28 12 40 10 44 14C48 18 44 24 40 22C36 20 28 20 28 20" fill="#C9A84C" opacity="0.3" stroke="#C9A84C" strokeWidth="2" />
  </svg>
);

export const MehandiIcon = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8C32 8 24 16 24 28C24 36 28 44 32 52C36 44 40 36 40 28C40 16 32 8 32 8Z" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="32" cy="24" r="3" fill="#1B3A2D" />
    <circle cx="32" cy="34" r="2" fill="#1B3A2D" opacity="0.5" />
    <path d="M28 28C26 26 26 22 28 20" stroke="#1B3A2D" strokeWidth="1.5" fill="none" />
    <path d="M36 28C38 26 38 22 36 20" stroke="#1B3A2D" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="44" r="1.5" fill="#1B3A2D" opacity="0.4" />
  </svg>
);
