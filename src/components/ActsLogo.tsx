import React from 'react';

interface ActsLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'card';
  size?: 'sm' | 'md' | 'lg';
}

export const ActsLogo: React.FC<ActsLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  // Exact recreation of the ACTS logo:
  // - Open book with sweeping blue gradient pages
  // - Ascending colorful dots (coral red, bright cyan, golden yellow, sapphire blue)
  // - Stylized bold geometric letters "ACTS"
  // - Subtitle "Educate | Empower | Excelsior"
  // - Bottom banner "APOGEE CONSULTING & TRAINING SERVICES LLP"

  const scaleMap = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
  };

  const isCard = variant === 'card';

  return (
    <div
      className={`inline-flex items-center gap-2 select-none ${
        isCard
          ? 'bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-md border border-slate-200'
          : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 340 95"
        className={`${scaleMap[size]} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bookGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="bookGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* --- Left Graphic: Open Book + Ascending Colored Dots --- */}
        <g transform="translate(4, 8)">
          {/* Ascending Dots */}
          <circle cx="12" cy="18" r="3.2" fill="#ef4444" />
          <circle cx="21" cy="9" r="4.2" fill="#06b6d4" />
          <circle cx="28" cy="19" r="3.8" fill="#f59e0b" />
          <circle cx="37" cy="11" r="3" fill="#2563eb" />

          {/* Book Spine / Angle */}
          <path
            d="M 6 48 L 19 22 L 23 23 L 10 49 Z"
            fill="#dc2626"
            opacity="0.9"
          />

          {/* Left sweeping page */}
          <path
            d="M 12 47 Q 24 38 42 37 L 34 22 Q 18 24 8 36 Z"
            fill="url(#bookGradient1)"
          />

          {/* Right sweeping open book pages */}
          <path
            d="M 22 47 Q 34 32 54 28 L 46 17 Q 28 22 17 38 Z"
            fill="url(#bookGradient2)"
          />
          <path
            d="M 27 49 Q 39 37 59 34 L 54 26 Q 36 29 23 43 Z"
            fill="#0284c7"
            opacity="0.8"
          />
        </g>

        {/* --- Main Wordmark: ACTS --- */}
        <g transform="translate(68, 8)">
          {/* 'A' */}
          <path
            d="M 4 48 L 22 8 L 32 8 L 44 48 L 34 48 L 31 38 L 16 38 L 13 48 Z M 19 29 L 28 29 L 24 16 Z"
            fill="url(#letterGradient)"
          />
          {/* 'C' */}
          <path
            d="M 82 22 Q 78 12 67 10 Q 51 8 46 22 Q 41 36 50 44 Q 60 50 73 47 Q 80 44 83 39 L 76 34 Q 72 38 67 40 Q 56 41 53 31 Q 50 19 62 17 Q 71 16 75 22 Z"
            fill="url(#letterGradient)"
          />
          {/* 'T' */}
          <path
            d="M 84 15 L 84 8 L 122 8 L 122 15 L 108 15 L 108 48 L 98 48 L 98 15 Z"
            fill="url(#letterGradient)"
          />
          {/* 'S' */}
          <path
            d="M 124 39 Q 128 47 139 48 Q 150 49 154 42 Q 157 36 153 31 Q 149 27 136 24 Q 123 20 125 12 Q 126 5 137 3 Q 146 2 154 8 L 150 14 Q 144 9 137 10 Q 131 10 131 14 Q 131 18 139 20 Q 154 23 158 31 Q 161 40 152 47 Q 143 53 131 51 Q 124 49 120 42 Z"
            fill="url(#letterGradient)"
          />
        </g>

        {/* --- Subtitle: Educate | Empower | Excelsior --- */}
        <text
          x="12"
          y="71"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="0.8"
          fill={variant === 'card' ? '#334155' : variant === 'light' ? '#334155' : '#94a3b8'}
        >
          Educate&nbsp;&nbsp;|&nbsp;&nbsp;Empower&nbsp;&nbsp;|&nbsp;&nbsp;Excelsior
        </text>

        {/* Separator rule */}
        <line
          x1="10"
          y1="77"
          x2="232"
          y2="77"
          stroke="#cbd5e1"
          strokeWidth="0.8"
        />

        {/* --- Bottom Banner: APOGEE CONSULTING & TRAINING SERVICES LLP --- */}
        <text
          x="10"
          y="87"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="7"
          fontWeight="800"
          letterSpacing="0.6"
          fill="#dc2626"
        >
          APOGEE CONSULTING &amp; TRAINING SERVICES LLP
        </text>
      </svg>
    </div>
  );
};
