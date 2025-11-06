export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definition */}
      <defs>
        <linearGradient id="trumpetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D014" />
          <stop offset="100%" stopColor="#FFE55C" />
        </linearGradient>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#circleGradient)" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#trumpetGradient)" strokeWidth="2" />

      {/* Trumpet icon - simplified */}
      <g transform="translate(20, 35)">
        {/* Bell of trumpet */}
        <path
          d="M 55 15 Q 60 15 60 20 Q 60 25 55 25 L 45 25 Q 40 25 40 20 Q 40 15 45 15 Z"
          fill="url(#trumpetGradient)"
        />

        {/* Main tube */}
        <rect x="10" y="18" width="35" height="4" rx="2" fill="url(#trumpetGradient)" />

        {/* Valves */}
        <rect x="25" y="13" width="3" height="10" rx="1.5" fill="url(#trumpetGradient)" />
        <rect x="30" y="13" width="3" height="10" rx="1.5" fill="url(#trumpetGradient)" />
        <rect x="35" y="13" width="3" height="10" rx="1.5" fill="url(#trumpetGradient)" />

        {/* Mouthpiece */}
        <circle cx="8" cy="20" r="3" fill="url(#trumpetGradient)" />
        <rect x="8" y="19" width="5" height="2" fill="url(#trumpetGradient)" />

        {/* Music note accent */}
        <g transform="translate(5, 0)">
          <circle cx="5" cy="8" r="2" fill="#FFE55C" />
          <rect x="6.5" y="2" width="1" height="6" fill="#FFE55C" />
        </g>
      </g>
    </svg>
  );
}
