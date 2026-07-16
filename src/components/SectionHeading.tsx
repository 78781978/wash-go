import { MotionReveal } from "./MotionReveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <MotionReveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? "text-blue-2" : "text-blue"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/60" : "text-foreground/60"}`}>
          {description}
        </p>
      )}
    </MotionReveal>
  );
}
