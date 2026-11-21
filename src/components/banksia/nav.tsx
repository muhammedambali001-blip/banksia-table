"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, CONTACT } from "@/lib/banksia-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-charcoal/10 bg-cream/95 shadow-[0_8px_30px_rgba(41,43,39,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={close}
            aria-label="Banksia Table — back to top"
            className="shrink-0"
          >
            <Logo tone={scrolled ? "dark" : "light"} />
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative text-[12.5px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    scrolled ? "text-charcoal/80 hover:text-eucalyptus" : "text-cream/90 hover:text-brass-soft"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-terracotta transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#reserve"
              className={`hidden px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-300 sm:inline-flex ${
                scrolled
                  ? "bg-eucalyptus text-cream hover:bg-terracotta"
                  : "bg-cream/15 text-cream backdrop-blur-sm hover:bg-terracotta"
              } border border-cream/30 hover:border-terracotta`}
            >
              Book a Table
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                open || !scrolled
                  ? "border-cream/40 text-cream"
                  : "border-charcoal/20 text-charcoal"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-eucalyptus transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-20 items-center px-5">
          <Logo tone="light" />
        </div>
        <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
          <ul className="space-y-2">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.href}
                className={`transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <a
                  href={l.href}
                  onClick={close}
                  className="block border-b border-cream/10 py-4 font-display text-3xl font-medium text-cream transition-colors hover:text-brass-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            onClick={close}
            className="mt-10 inline-flex items-center justify-center bg-terracotta px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:bg-brass hover:text-charcoal"
          >
            Book a Table
          </a>
          <p className="mt-8 text-sm text-cream/60">
            {CONTACT.phone} · {CONTACT.location}
          </p>
        </nav>
      </div>
    </>
  );
}
