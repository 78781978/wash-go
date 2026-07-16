import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="31" fill="#0A1230" />
      <circle cx="32" cy="32" r="31" stroke="#4D76FF" strokeWidth="1.5" />
      <path
        d="M32 12c6.5 8.4 10.5 14.9 10.5 20.4C42.5 39.3 37.9 44 32 44s-10.5-4.7-10.5-11.6C21.5 26.9 25.5 20.4 32 12Z"
        fill="url(#dropGradient)"
      />
      <path
        d="M16 40c3.2-2.4 6.4-2.4 9.6 0 3.2 2.4 6.4 2.4 9.6 0 3.2-2.4 6.4-2.4 9.6 0 3.2 2.4 6.4 2.4 9.6 0"
        stroke="#EAF0FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="dropGradient" x1="21.5" y1="12" x2="42.5" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D76FF" />
          <stop offset="1" stopColor="#2451E8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-10 w-10",
  dark = false,
}: {
  className?: string;
  markClassName?: string;
  dark?: boolean;
}) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 transition-transform duration-300 group-hover:rotate-6`} />
      <span className={`font-display text-xl font-semibold tracking-tight ${dark ? "text-white" : "text-navy"}`}>
        wash<span className="text-blue-2">&amp;</span>go
      </span>
    </Link>
  );
}
