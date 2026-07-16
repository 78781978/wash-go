import Link from "next/link";
import { basePath } from "@/lib/base-path";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; basePath must be applied manually
    <img
      src={`${basePath}/logo-mark.png`}
      alt="Wash & Go"
      width={420}
      height={420}
      className={`${className} rounded-full object-contain`}
    />
  );
}

export function Logo({
  className = "",
  markClassName = "h-10 w-10",
  textClassName = "text-xl",
  gapClassName = "gap-3",
  dark = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  gapClassName?: string;
  dark?: boolean;
}) {
  return (
    <Link href="/" className={`group flex items-center ${gapClassName} ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 transition-transform duration-300 group-hover:rotate-6`} />
      <span className={`font-display font-extrabold uppercase tracking-wide ${textClassName}`}>
        <span className={dark ? "text-white" : "text-navy"}>wash&amp;</span>
        <span className="text-blue-2">go</span>
      </span>
    </Link>
  );
}
