import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Good to Know</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.question}
                value={`faq-${i}`}
                className="border-b border-charcoal/15"
              >
                <AccordionTrigger className="py-5 text-left font-display text-xl font-semibold text-charcoal hover:no-underline hover:text-eucalyptus [&>svg]:text-terracotta">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-charcoal/70">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
