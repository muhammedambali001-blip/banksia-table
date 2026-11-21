import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { CONTACT, HOURS } from "@/lib/banksia-data";
import { Reveal } from "./reveal";
import { BanksiaMark } from "./logo";

export function HoursLocation() {
  return (
    <section id="visit" className="scroll-mt-24 bg-eucalyptus py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-brass-soft">Visit Us</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
            Find Your Way to the Table
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/70">
            In the heart of Fitzroy — one of Melbourne&apos;s most loved dining neighbourhoods.
            Opening hours below are fictional demonstration hours for this concept website.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* hours */}
          <Reveal>
            <div className="h-full border border-cream/15 bg-eucalyptus-deep/60 p-8">
              <h3 className="font-display text-2xl font-semibold">Opening Hours</h3>
              <ul className="mt-6 space-y-4">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-cream/10 pb-3.5"
                  >
                    <span className="text-sm uppercase tracking-[0.16em] text-cream/80">
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-medium ${h.closed ? "text-terracotta" : "text-cream"}`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-cream/50">
                Kitchen may close earlier on public holidays. Demonstration hours only.
              </p>
            </div>
          </Reveal>

          {/* location + contact */}
          <Reveal delay={120}>
            <div className="h-full border border-cream/15 bg-eucalyptus-deep/60 p-8">
              <h3 className="font-display text-2xl font-semibold">Location &amp; Contact</h3>
              <ul className="mt-6 space-y-5 text-[15px] text-cream/85">
                <li className="flex gap-3.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-soft" />
                  <span>{CONTACT.location}</span>
                </li>
                <li className="flex gap-3.5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass-soft" />
                  <span>
                    {CONTACT.phone}
                    <br />
                    <span className="text-cream/60">International: {CONTACT.phoneIntl}</span>
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brass-soft" />
                  <span>{CONTACT.email}</span>
                </li>
                <li className="flex gap-3.5">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-brass-soft" />
                  <span>{CONTACT.website}</span>
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-cream/50">
                Contact details are fictional and created for this portfolio demonstration.
              </p>
            </div>
          </Reveal>

          {/* map placeholder */}
          <Reveal delay={240}>
            <div className="flex h-full min-h-72 flex-col border border-dashed border-brass/50 bg-eucalyptus-deep/40 p-8 text-center">
              <span className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-brass/40">
                <BanksiaMark className="h-9 w-7 text-brass-soft" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">Map Coming Soon</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                This panel is a clearly labelled placeholder for a future Google Maps integration.
              </p>
              <p className="mt-3 text-sm text-cream/50">
                Fitzroy, Melbourne, Victoria, Australia
              </p>
              <p className="mt-auto pt-6 text-[11px] uppercase tracking-[0.22em] text-brass-soft/70">
                No street address shown in this concept
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
