import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export function LegalLayout({ sections, updated }: { sections: LegalSection[]; updated: string }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40">Spis treści</p>
              <nav className="mt-4 space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/60 transition-colors hover:bg-mist hover:text-navy"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <p className="mt-6 border-t border-line pt-4 text-xs text-foreground/40">
                Ostatnia aktualizacja: {updated}
              </p>
            </div>
          </aside>

          <div className="max-w-3xl space-y-14">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold text-navy">
                  <span className="mr-2 text-blue">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="prose-legal mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
