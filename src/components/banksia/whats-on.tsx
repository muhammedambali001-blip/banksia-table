import { CalendarDays } from "lucide-react";
import { WHATS_ON } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

export function WhatsOn() {
  return (
    <section id="whats-on" className="scroll-mt-24 bg-sage py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">What&apos;s On</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
            Always Something at the Table
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {WHATS_ON.map((e, i) => (
            <Reveal key={e.title} delay={i * 120}>
              <article className="h-full border-t-2 border-brass bg-cream-soft p-8 shadow-[0_10px_40px_rgba(41,43,39,0.06)] transition-transform duration-500 hover:-translate-y-1">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-terracotta">
                  <CalendarDays className="h-4 w-4" />
                  {e.schedule}
                </span>
                <h3 className="mt-4 font-display text-[1.7rem] font-semibold leading-snug text-charcoal">
                  {e.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65">{e.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-charcoal/50">
            Events shown are illustrative demonstration content for this concept website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
