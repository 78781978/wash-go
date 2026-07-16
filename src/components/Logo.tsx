import Link from "next/link";
import { basePath } from "@/lib/base-path";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; basePath must be applied manually
    <img
      src={`${basePath}/logo-mark.png`}
      alt="Wash & Go"
      width={128}
      height={128}
      className={`${className} rounded-full object-contain`}
    />
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
