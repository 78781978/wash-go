import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/site-config";
import { MotionItem } from "./MotionReveal";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <MotionItem className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-blue text-blue" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-5 border-t border-line pt-4">
        <p className="font-display text-sm font-semibold text-navy">{t.name}</p>
        <p className="text-xs text-foreground/50">{t.car}</p>
      </div>
    </MotionItem>
  );
}
