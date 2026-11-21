import Image from "next/image";
import { GALLERY } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

export function Gallery() {
  return (
    <section id="experience" className="scroll-mt-24 bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-brass-soft">The Dining Experience</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
            A Room Made for Gathering
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-cream/70">
            Timber, candlelight and the hum of good conversation — a look inside the Banksia Table
            experience, from morning coffee to late dessert.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {GALLERY.map((g, i) => (
            <Reveal
              key={g.src + i}
              delay={(i % 4) * 100}
              className={
                g.span === "wide"
                  ? "col-span-2 lg:col-span-2"
                  : g.span === "tall"
                    ? "row-span-2"
                    : ""
              }
            >
              <figure className="group relative h-full min-h-44 overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/35" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-[11px] font-medium uppercase tracking-[0.24em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
