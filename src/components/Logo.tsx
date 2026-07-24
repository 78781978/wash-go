import Link from "next/link";
import Image from "next/image";

export function LogoMark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Wash & Go"
      width={162}
      height={162}
      priority={priority}
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
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  gapClassName?: string;
  dark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={`group flex items-center ${gapClassName} ${className}`}>
      <LogoMark
        className={`${markClassName} shrink-0 transition-transform duration-300 group-hover:rotate-6`}
        priority={priority}
      />
      <span className={`font-display font-extrabold uppercase tracking-wide ${textClassName}`}>
        <span className={dark ? "text-white" : "text-navy"}>wash&amp;</span>
        <span className="text-blue-2">go</span>
      </span>
    </Link>
  );
}
