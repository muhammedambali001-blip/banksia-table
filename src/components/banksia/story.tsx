import Image from "next/image";
import { Reveal } from "./reveal";
import { BanksiaMark } from "./logo";

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
            A Place to Enjoy Good Food and Good Company.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/75">
            <p>
              Banksia Table is a fictional modern Australian restaurant concept built around
              thoughtful food, welcoming hospitality and enjoyable dining experiences.
            </p>
            <p>
              Our menu brings together contemporary flavours, seasonal inspiration and a relaxed
              approach to dining.
            </p>
            <p>
              Whether you&apos;re joining us for breakfast, lunch, dinner or a special gathering, we
              aim to make every visit memorable.
            </p>
          </div>
          <figure className="mt-10 border-l-2 border-brass pl-6">
            <blockquote className="font-display text-2xl italic leading-snug text-eucalyptus">
              &ldquo;Thoughtful food, warm hospitality and a table that always has room for one
              more.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-terracotta">
              The Banksia Table philosophy
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-brass/50 sm:block" />
            <Image
              src="/images/story-room.jpg"
              alt="Sculptural dining room with warm organic tones at Banksia Table"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative h-[420px] w-full object-cover lg:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-10 -left-2 hidden w-56 shadow-[0_24px_50px_rgba(41,43,39,0.25)] sm:block lg:-left-10 lg:w-72">
            <Image
              src="/images/story-chef.jpg"
              alt="Chef carefully plating a dish in the kitchen"
              width={800}
              height={533}
              sizes="20vw"
              className="h-44 w-full object-cover lg:h-56"
            />
          </div>
          <div className="absolute -right-3 -top-8 hidden h-28 w-28 items-center justify-center rounded-full bg-sage shadow-lg lg:flex">
            <BanksiaMark className="h-14 w-11 text-eucalyptus" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
