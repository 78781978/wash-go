import type { ReactNode } from "react";

const REPEAT = 8;

export function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = Array.from({ length: REPEAT }, () => items).flat();
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-white/50">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
