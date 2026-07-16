import { Droplets, SprayCan, Sparkles, Sofa, ShieldCheck, Wind, PaintBucket, Gem, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/site-config";

const map: Record<Service["icon"], LucideIcon> = {
  spray: SprayCan,
  foam: Droplets,
  sparkle: Sparkles,
  interior: Sofa,
  shield: ShieldCheck,
  wind: Wind,
  drop: PaintBucket,
  polish: Gem,
};

export function ServiceIcon({ icon, className = "h-5 w-5" }: { icon: Service["icon"]; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} />;
}
