"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU, DIETARY_LABELS, type Dietary } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

function DietaryBadge({ d }: { d: Dietary }) {
  return (
    <span
      title={DIETARY_LABELS[d]}
      className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-eucalyptus/40 px-1.5 text-[10px] font-semibold tracking-wide text-eucalyptus"
    >
      {d}
    </span>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active) ?? MENU[0];
  const images = category.items.filter((i) => i.image).slice(0, 2);

  return (
    <section id="menu" className="scroll-mt-24 bg-sage py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Our Menu</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
            Seasonal. Contemporary. Australian.
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Browse by category below — every dish is demonstration content, priced for this concept
            website.
          </p>
        </Reveal>

        {/* category tabs */}
        <Reveal delay={100}>
          <div
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-eucalyptus/25"
            role="tablist"
            aria-label="Menu categories"
          >
            {MENU.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                data-active={active === c.id}
                onClick={() => setActive(c.id)}
                className={`menu-tab pb-4 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === c.id
                    ? "text-terracotta"
                    : "text-charcoal/60 hover:text-eucalyptus"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* items list */}
          <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="font-display text-xl italic text-eucalyptus/80">{category.tagline}</p>
            <ul className="mt-6 divide-y divide-eucalyptus/15 border-t border-eucalyptus/15">
              {category.items.map((item) => (
                <li key={item.name} className="group py-6">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl font-semibold text-charcoal">
                      {item.name}
                    </h3>
                    {item.dietary.length > 0 && (
                      <span className="flex translate-y-[-2px] gap-1.5">
                        {item.dietary.map((d) => (
                          <DietaryBadge key={d} d={d} />
                        ))}
                      </span>
                    )}
                    <span className="mx-1 hidden flex-1 border-b border-dotted border-eucalyptus/30 sm:block" />
                    <span className="font-display text-2xl font-medium text-terracotta">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-charcoal/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* category imagery */}
          <div key={`img-${category.id}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {images.length > 0 ? (
              <div className="space-y-5 lg:sticky lg:top-28">
                {images.map((img) => (
                  <figure key={img.name} className="relative">
                    <Image
                      src={img.image as string}
                      alt={img.name}
                      width={720}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="h-64 w-full object-cover lg:h-80"
                    />
                    <figcaption className="absolute bottom-0 left-0 bg-charcoal/75 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream">
                      {img.name} · {img.price}
                    </figcaption>
                  </figure>
                ))}
                <p className="text-center text-xs uppercase tracking-[0.24em] text-eucalyptus/60">
                  From the {category.label} menu
                </p>
              </div>
            ) : (
              <div className="flex h-full min-h-64 items-center justify-center border border-eucalyptus/20 p-10 text-center lg:sticky lg:top-28">
                <p className="font-display text-xl italic leading-relaxed text-eucalyptus/70">
                  Ask our team about today&apos;s specials —
                  <br />
                  the kitchen writes new plates daily.
                </p>
              </div>
            )}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 border-t border-eucalyptus/20 pt-8 text-center">
            <p className="text-sm text-charcoal/60">
              <span className="font-semibold text-eucalyptus">V</span> Vegetarian ·{" "}
              <span className="font-semibold text-eucalyptus">VG</span> Vegan ·{" "}
              <span className="font-semibold text-eucalyptus">GF</span> Gluten Free
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-charcoal/50">
              Dietary labels are a general guide only. Menu items and prices are fictional
              demonstration content — please speak with our team about any dietary requirements
              when ordering.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
