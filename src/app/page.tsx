import { Nav } from "@/components/banksia/nav";
import { Hero } from "@/components/banksia/hero";
import { Story } from "@/components/banksia/story";
import { MenuSection } from "@/components/banksia/menu-section";
import { Featured } from "@/components/banksia/featured";
import { Gallery } from "@/components/banksia/gallery";
import { WhatsOn } from "@/components/banksia/whats-on";
import { Reservation } from "@/components/banksia/reservation";
import { Events } from "@/components/banksia/events";
import { HoursLocation } from "@/components/banksia/hours-location";
import { Faq } from "@/components/banksia/faq";
import { Contact } from "@/components/banksia/contact";
import { Footer } from "@/components/banksia/footer";
import { Chatbot } from "@/components/banksia/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Nav />
      <main>
        <Hero />
        <Story />
        <MenuSection />
        <Featured />
        <Gallery />
        <WhatsOn />
        <Reservation />
        <Events />
        <HoursLocation />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
