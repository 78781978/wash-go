import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import type { Service } from "@/lib/site-config";
import { MotionItem } from "./MotionReveal";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <MotionItem className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
        <ServiceIcon icon={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{service.short}</p>

      {detailed && (
        <>
          <p className="mt-4 text-sm leading-relaxed text-foreground/70">{service.description}</p>
          <ul className="mt-4 space-y-2">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {b}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs font-medium uppercase tracking-wider text-foreground/40">{service.duration}</span>
        <Link
          href="/cennik"
          className="flex items-center gap-1 text-xs font-semibold text-blue transition-colors hover:text-navy"
        >
          Cennik
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </MotionItem>
  );
}
