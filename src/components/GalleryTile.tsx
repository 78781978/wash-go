import { Sparkles } from "lucide-react";
import { MotionItem } from "./MotionReveal";
import { basePath } from "@/lib/base-path";

const tones = {
  navy: "from-navy via-navy-2 to-blue",
  blue: "from-blue via-blue-2 to-navy",
  graphite: "from-graphite via-graphite-2 to-navy",
};

export function GalleryTile({
  title,
  category,
  tone,
  large = false,
  image,
}: {
  title: string;
  category: string;
  tone: "navy" | "blue" | "graphite";
  large?: boolean;
  image?: string;
}) {
  return (
    <MotionItem
      className={`group relative overflow-hidden rounded-2xl ${large ? "sm:row-span-2" : ""}`}
    >
      <div
        className={`relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden bg-gradient-to-br p-6 ${tones[tone]}`}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export; basePath must be applied manually
          <img
            src={`${basePath}${image}`}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-facet opacity-60 transition-transform duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
        <Sparkles className="absolute right-5 top-5 h-5 w-5 text-white/40" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">{category}</span>
          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-white">{title}</h3>
        </div>
        <div className="absolute inset-0 border border-white/10" />
      </div>
    </MotionItem>
  );
}
