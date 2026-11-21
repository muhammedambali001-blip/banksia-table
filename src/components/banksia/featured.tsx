import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FEATURED_DISHES } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

export function Featured() {
  return (
    <section id="featured" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Signature Dishes</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              Featured at the Table
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/65">
            A few of the plates our guests return for — each one a small celebration of Australian
            produce. All prices are demonstration content.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_DISHES.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 120}>
              <article className="group bg-card shadow-[0_10px_40px_rgba(41,43,39,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(41,43,39,0.14)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-4 bg-charcoal/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-cream">
                    {dish.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[1.45rem] font-semibold leading-snug text-charcoal">
                      {dish.name}
                    </h3>
                    <span className="font-display text-xl font-medium text-terracotta">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">
                    {dish.description}
                  </p>
                  <a
                    href="#menu"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-eucalyptus transition-colors hover:text-terracotta"
                  >
                    View Menu
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
