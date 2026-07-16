"use client";

import { motion } from "framer-motion";
import { Car, SprayCan, Droplets, Sparkles } from "lucide-react";

const chips = [
  { icon: SprayCan, label: "Mycie bezdotykowe" },
  { icon: Droplets, label: "Aktywna piana" },
  { icon: Sparkles, label: "Nabłyszczanie i osmoza" },
];

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-md lg:mx-0"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-graphite via-navy-2 to-navy p-8 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-facet opacity-40" />

        <div className="relative flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
            Stanowisko 01
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Wolne teraz
          </span>
        </div>

        <div className="relative mt-10 flex items-center justify-center">
          <div className="absolute h-32 w-32 rounded-full bg-blue/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8">
            <Car className="h-20 w-20 text-white/90" strokeWidth={1.25} />
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shine" />
          </div>
          {[0, 0.4, 0.8].map((delay, i) => (
            <span
              key={i}
              style={{ left: `${38 + i * 10}%`, animationDelay: `${delay}s` }}
              className="animate-drop absolute top-2 h-2.5 w-2 rounded-full bg-blue-2/80"
            />
          ))}
        </div>

        <div className="relative mt-10 grid grid-cols-3 gap-2.5">
          {chips.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-3.5 text-center"
            >
              <Icon className="h-4.5 w-4.5 text-blue-2" />
              <span className="text-[10.5px] font-medium leading-tight text-white/70">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -right-6 -top-6 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:block"
      >
        <p className="font-display text-lg font-bold text-navy">4.9/5</p>
        <p className="text-[11px] text-foreground/50">ocena klientów</p>
      </motion.div>
    </motion.div>
  );
}
