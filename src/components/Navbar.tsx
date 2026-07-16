"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_30px_rgba(10,18,48,0.25)]" : ""
      } border-b border-white/10`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo
          dark
          markClassName="h-20 w-20 sm:h-32 sm:w-32 lg:h-[324px] lg:w-[324px]"
          textClassName="text-2xl sm:text-3xl"
          gapClassName="gap-2"
        />

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-white/85 hover:text-white xl:flex"
          >
            <Phone className="h-4 w-4 text-blue-2" />
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            className="whitespace-nowrap rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2 hover:shadow-blue-2/40"
          >
            Umów wizytę
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav className="hidden border-t border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-5 py-2 sm:px-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-2 rounded-xl bg-blue px-4 py-3 text-center text-base font-semibold text-white"
              >
                Umów wizytę
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
