import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/hero-dining.jpg"
        alt="Warm, softly lit dining room at Banksia Table set for evening service"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* subtle legibility overlays */}
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 text-center sm:px-8">
        <p className="eyebrow text-brass-soft">Welcome to Banksia Table</p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.08] text-cream sm:text-6xl md:text-7xl lg:text-[5.2rem]">
          Good Food. Great Company.{" "}
          <span className="italic text-brass-soft">Memorable Moments.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Discover contemporary Australian dining with thoughtfully prepared dishes, fresh seasonal
          ingredients and a welcoming atmosphere in the heart of Melbourne.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#reserve" className="btn-primary w-full sm:w-auto">
            Book a Table
          </a>
          <a href="#menu" className="btn-outline-light w-full sm:w-auto">
            Explore Our Menu
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-cream/15 pt-6 text-[13px] tracking-wide text-cream/75">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brass-soft" />
            Fitzroy, Melbourne
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-brass-soft" />
            Tuesday – Sunday · From 8:00 AM
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-soft" />
            Modern Australian Kitchen
          </span>
        </div>
      </div>
    </section>
  );
}
