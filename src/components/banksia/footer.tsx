import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, CONTACT } from "@/lib/banksia-data";

export function Footer() {
  return (
    <footer className="mt-auto bg-eucalyptus-deep pb-28 text-cream/75">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A fictional modern Australian restaurant concept celebrating seasonal produce,
              thoughtful cooking and long tables filled with good company.
            </p>
          </div>

          {/* quick links */}
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-soft">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-brass-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-soft">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brass-soft" />
                <a href="tel:+61355501234" className="transition-colors hover:text-brass-soft">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brass-soft" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-brass-soft"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brass-soft" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-cream/10 pt-8 text-xs leading-relaxed text-cream/45">
          Fictional restaurant concept created for website portfolio demonstration. Menu, pricing,
          opening hours and contact details are illustrative.
        </p>
        <div className="mt-3 flex flex-col gap-2 pb-2 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>&copy; 2026 Banksia Table. Concept Website Demonstration.</p>
          <a
            href="https://m-webcraft-studio-1kdt.vercel.app/"
            className="shrink-0 text-[11px] font-medium tracking-[0.16em] text-brass-soft transition-colors hover:text-cream"
            aria-label="Designed By M-Webcraft Studio — visit the studio website"
          >
            Designed By M-Webcraft Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
