"use client";

import Image from "next/image";
import { Cake, Briefcase, Users, Sparkles } from "lucide-react";
import { EVENT_CARDS } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

const ICONS = [Cake, Briefcase, Users, Sparkles];

export function Events() {
  return (
    <section id="private-dining" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Private Dining &amp; Events</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              Make Your Next Gathering Special.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
              Explore a welcoming dining experience for birthdays, celebrations, business lunches
              and private gatherings.
            </p>
            <a
              href="#contact"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("banksia:enquiry-type", { detail: "Private Events" })
                )
              }
              className="btn-primary mt-9"
            >
              Enquire About an Event
            </a>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {EVENT_CARDS.map((card, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <article
                    key={card.title}
                    className="group border border-charcoal/10 bg-card p-6 transition-all duration-500 hover:border-brass/60 hover:shadow-[0_18px_40px_rgba(41,43,39,0.1)]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-eucalyptus transition-colors duration-500 group-hover:bg-terracotta group-hover:text-cream">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative hidden lg:block">
            <Image
              src="/images/gallery-room.jpg"
              alt="Warm restaurant dining room prepared for a group gathering"
              width={1000}
              height={530}
              sizes="45vw"
              className="h-[300px] w-full object-cover"
            />
            <Image
              src="/images/gallery-table.jpg"
              alt="Candlelit tables styled for a private celebration"
              width={1000}
              height={530}
              sizes="45vw"
              className="mt-6 ml-14 h-[300px] w-[calc(100%-3.5rem)] object-cover"
            />
            <div className="absolute bottom-24 -left-6 bg-cream-soft px-6 py-5 shadow-[0_20px_50px_rgba(41,43,39,0.18)]">
              <p className="font-display text-2xl italic text-eucalyptus">
                &ldquo;Every gathering, beautifully hosted.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
