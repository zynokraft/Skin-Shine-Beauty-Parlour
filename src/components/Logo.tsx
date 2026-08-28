import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'badge' | 'text-only' | 'icon-only';
  className?: string;
  theme?: 'dark' | 'light' | 'original';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  theme = 'original',
}) => {
  // SVG Graphic representing the silhouette profile with flowing hair & leaf accent in signature pink
  const LogoGraphic = () => (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-sm"
    >
      {/* Top Leaf Accent */}
      <path
        d="M50 12 C58 5, 74 12, 69 26 C61 27, 49 23, 50 12Z"
        fill="#FFFFFF"
      />
      <path
        d="M54 15 C60 18, 64 20, 67 25"
        stroke="#D82289"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Main Flowing Hair Crest Wave */}
      <path
        d="M50 14 C38 22, 43 38, 56 47 C69 57, 70 76, 56 90 C51 82, 60 70, 52 61 C45 52, 33 40, 44 21 C46 17, 48 15, 50 14Z"
        fill="#FFFFFF"
      />

      {/* Inner Face Contour & Neck in soft pink blush */}
      <path
        d="M44 30 C38 36, 34 45, 36 52 C37 55, 34 58, 32 59 C30 60, 28 62, 30 66 C31 68, 34 68, 35 70 C36 73, 37 79, 40 84 C42 86, 45 87, 48 88 C44 78, 41 70, 44 60 C46 52, 45 40, 44 30Z"
        fill="#FCE7F3"
      />
      
      {/* Delicate Face Profile Accent */}
      <circle cx="39" cy="48" r="1.5" fill="#D82289" opacity="0.9" />
      <path
        d="M34 59 C36 60, 38 61, 40 60"
        stroke="#D82289"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );

  // Badge format in Signature Pink
  if (variant === 'badge') {
    return (
      <div
        id="skin-shine-official-badge"
        className={`relative inline-flex flex-col items-center justify-center bg-[#D82289] p-5 sm:p-6 text-white shadow-2xl transition-transform hover:scale-102 ${className}`}
        style={{
          borderTopLeftRadius: '36px',
          borderBottomRightRadius: '36px',
          borderTopRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2 relative flex items-center justify-center">
          <LogoGraphic />
        </div>
        <div className="text-center select-none">
          <span className="block text-2xl sm:text-3xl font-bold tracking-tight lowercase font-sans leading-none text-white drop-shadow-sm">
            skin shine
          </span>
          <span className="block text-[10px] sm:text-[11px] font-normal lowercase tracking-wide font-sans text-pink-100 mt-1.5 leading-tight">
            ladies and kids beauty parlor
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'icon-only') {
    return (
      <div
        className={`relative flex items-center justify-center bg-[#D82289] text-white p-2 shadow-md ${className}`}
        style={{
          width: size === 'sm' ? 36 : size === 'md' ? 44 : size === 'lg' ? 56 : 72,
          height: size === 'sm' ? 36 : size === 'md' ? 44 : size === 'lg' ? 56 : 72,
          borderTopLeftRadius: '14px',
          borderBottomRightRadius: '14px',
          borderTopRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }}
      >
        <LogoGraphic />
      </div>
    );
  }

  return (
    <div
      id="skin-shine-brand-logo"
      className={`flex items-center gap-3 select-none ${className}`}
    >
      {/* Icon Badge shaped with signature pink */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center bg-[#D82289] text-white p-1.5 shadow-md transition-transform group-hover:scale-105"
        style={{
          width: size === 'sm' ? 38 : size === 'md' ? 46 : size === 'lg' ? 54 : 64,
          height: size === 'sm' ? 38 : size === 'md' ? 46 : size === 'lg' ? 54 : 64,
          borderTopLeftRadius: '14px',
          borderBottomRightRadius: '14px',
          borderTopRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }}
      >
        <LogoGraphic />
      </div>

      {/* Typography from Logo */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-bold tracking-tight lowercase leading-none font-sans ${
              theme === 'dark' ? 'text-white' : 'text-[#200B26]'
            } ${
              size === 'sm'
                ? 'text-lg'
                : size === 'md'
                ? 'text-2xl'
                : size === 'lg'
                ? 'text-3xl'
                : 'text-4xl'
            }`}
          >
            skin shine
          </span>
        </div>
        <span
          className={`font-medium tracking-normal lowercase font-sans ${
            theme === 'dark' ? 'text-pink-200' : 'text-[#D82289]'
          } ${
            size === 'sm'
              ? 'text-[10px]'
              : size === 'md'
              ? 'text-[11px]'
              : size === 'lg'
              ? 'text-xs'
              : 'text-sm'
          } mt-0.5`}
        >
          ladies and kids beauty parlor
        </span>
      </div>
    </div>
  );
};
