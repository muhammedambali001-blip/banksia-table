"use client";

import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { BanksiaMark } from "./logo";

interface ChatAction {
  label: string;
  href: string;
}

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
  actions?: ChatAction[];
}

const WELCOME_TEXT = `Hello! Welcome to Banksia Table.

I'm your restaurant assistant. I can help you explore our menu, opening hours, dining options and reservation enquiries.

How can I help you today?`;

const QUICK_REPLIES = [
  { label: "Explore Our Menu", intent: "menu" },
  { label: "Opening Hours", intent: "hours" },
  { label: "Find Our Location", intent: "location" },
  { label: "Book a Table", intent: "booking" },
  { label: "Private Events", intent: "events" },
  { label: "Contact Us", intent: "contact" },
];

interface BotReply {
  text: string;
  actions?: ChatAction[];
}

/* ------------------------------------------------------------------ */
/*  Scripted response engine — a simulated assistant for this demo     */
/*  website. It answers from the site's own demonstration content.     */
/* ------------------------------------------------------------------ */
function engine(raw: string): BotReply {
  const t = raw.toLowerCase();

  const has = (...words: string[]) => words.some((w) => t.includes(w));

  if (has("book", "reserv", "table for", "seat", "availability") && !has("private")) {
    return {
      text: "Lovely — reserving a table is easy. Scroll to the Booking section, choose your date (DD/MM/YYYY), preferred time and number of guests, then press “Book a Table”. This is a demonstration form, so no real reservation is made. You can also call (03) 5550 1234 in the demo content.",
      actions: [{ label: "Go to Booking Form", href: "#reserve" }],
    };
  }

  if (has("menu", "food", "eat", "dish", "breakfast", "lunch", "dinner", "dessert", "drink", "coffee", "price", "cost", "pavlova", "barramundi", "brisket", "hotcake", "risotto", "avocado")) {
    return {
      text: "Our menu has five categories:\n\n• Breakfast — Smashed Avocado Toast $19, Ricotta Hotcakes $22 and more\n• Small Plates — Crispy Calamari $18, Grilled Halloumi $17\n• Main Courses — Grilled Barramundi $32, Slow-Cooked Beef Brisket $34\n• Desserts — Classic Pavlova $15, Chocolate Brownie $14\n• Drinks — Flat White $5.50, Fresh Orange Juice $7\n\nAll prices are fictional demonstration content. Vegetarian, vegan and gluten-free options are labelled throughout.",
      actions: [{ label: "View Full Menu", href: "#menu" }],
    };
  }

  if (has("hour", "open", "close", "when", "time", "monday", "sunday", "saturday")) {
    return {
      text: "Our demonstration opening hours are:\n\n• Monday — Closed\n• Tuesday – Friday — 8:00 AM – 9:00 PM\n• Saturday — 9:00 AM – 10:00 PM\n• Sunday — 9:00 AM – 4:00 PM\n\n(These hours are fictional, for this concept website.)",
      actions: [{ label: "See Visit Us", href: "#visit" }],
    };
  }

  if (has("where", "location", "address", "find", "fitzroy", "melbourne", "map", "direction", "park")) {
    return {
      text: "Banksia Table is set in Fitzroy, Melbourne, Victoria, Australia — a neighbourhood famous for its dining culture. This concept website doesn't display a street address; a live Google Maps integration is planned for the production release.",
      actions: [{ label: "Visit Location Section", href: "#visit" }],
    };
  }

  if (has("private", "event", "party", "birthday", "corporate", "wedding", "celebrat", "gathering", "function")) {
    return {
      text: "We host birthdays, corporate dining, family gatherings and private events. Tell us the occasion, guest numbers and preferred date, and we can shape the room and menu around your gathering. Enquiries go through the contact form — choose “Private Events” as the enquiry type.",
      actions: [
        { label: "Private Dining Section", href: "#private-dining" },
        { label: "Enquire Now", href: "#contact" },
      ],
    };
  }

  if (has("contact", "phone", "call", "email", "reach", "speak", "talk")) {
    return {
      text: "You can reach the restaurant on (03) 5550 1234 (international: +61 3 5550 1234) or by email at hello@banksiatable.example. Both are fictional demonstration details. You can also use the enquiry form on this page.",
      actions: [{ label: "Contact Section", href: "#contact" }],
    };
  }

  if (has("vegan", "vegetarian", "gluten", "dairy", "allerg", "dietary", "coeliac", "celiac")) {
    return {
      text: "Yes — the menu carries simple labels: V (Vegetarian), VG (Vegan) and GF (Gluten Free). Dishes like the Roast Pumpkin Salad (VG, GF), Wild Mushroom Risotto (V, GF) and Classic Pavlova (V, GF) are labelled throughout. Labels are a guide only, and our team is always happy to discuss dietary needs.",
      actions: [{ label: "Browse Menu Labels", href: "#menu" }],
    };
  }

  if (has("what's on", "whats on", "special", "happening", "promotion", "lunch deal", "wine")) {
    return {
      text: "A few things on at the table: Sunday Long Table Lunches, Wine & Wander Thursdays and a refreshed seasonal menu each new season. All events are illustrative demonstration content.",
      actions: [{ label: "See What's On", href: "#whats-on" }],
    };
  }

  if (has("hello", "hi", "hey", "morning", "afternoon", "evening", "gday", "g'day")) {
    return {
      text: "Hello! It's lovely to see you. I can help with our menu, opening hours, location, reservations and private events. What would you like to know?",
    };
  }

  if (has("thank", "thanks", "cheers", "great", "awesome")) {
    return {
      text: "You're very welcome! If there's anything else — menu questions, hours or a booking request — just ask. We hope to welcome you to the table soon.",
    };
  }

  return {
    text: "I'm a scripted demonstration assistant, so I'm best at a few topics: the menu, opening hours, our Fitzroy location, reservations, private events and contact details. Try one of the quick replies below, or tap a button to jump to that section of the site.",
    actions: [{ label: "Explore the Site", href: "#home" }],
  };
}

/* ------------------------------------------------------------------ */

function BotBubble({ text, actions }: { text: string; actions?: ChatAction[] }) {
  return (
    <div className="max-w-[85%]">
      <div className="rounded-2xl rounded-tl-md border border-eucalyptus/15 bg-white px-4 py-3 text-[14px] leading-relaxed text-charcoal shadow-sm whitespace-pre-line">
        {text}
      </div>
      {actions && actions.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {actions.map((a) => (
            <a
              key={a.href + a.label}
              href={a.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-eucalyptus px-3.5 py-1.5 text-[12px] font-medium text-cream transition-colors hover:bg-terracotta"
            >
              {a.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, from: "bot", text: WELCOME_TEXT },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const idRef = useRef(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { id: idRef.current++, from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    timerRef.current = setTimeout(() => {
      const reply = engine(trimmed);
      setMessages((m) => [...m, { id: idRef.current++, from: "bot", ...reply }]);
      setTyping(false);
    }, 750);
  };

  const quick = (intent: string, label: string) => send(label);

  return (
    <>
      {/* floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close Banksia Table Assistant chat" : "Open Banksia Table Assistant chat"}
        className={`fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-[0_12px_32px_rgba(41,43,39,0.35)] transition-all duration-300 sm:h-16 sm:w-16 ${
          open ? "bg-terracotta rotate-0" : "bg-eucalyptus hover:scale-105 hover:bg-terracotta"
        }`}
      >
        {open ? (
          <X className="h-6 w-6 text-cream" />
        ) : (
          <BanksiaMark className="h-8 w-6 text-cream sm:h-9 sm:w-7" />
        )}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-cream bg-brass" />
          </span>
        )}
      </button>

      {/* chat panel */}
      <div
        role="dialog"
        aria-label="Banksia Table Assistant"
        aria-hidden={!open}
        className={`fixed bottom-[84px] right-5 z-[70] flex h-[min(560px,calc(100dvh-110px))] w-[382px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-charcoal/15 bg-cream-soft shadow-[0_30px_80px_rgba(41,43,39,0.4)] transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        {/* header */}
        <div className="flex items-center gap-3 bg-eucalyptus px-4 py-4 text-cream">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10">
            <BanksiaMark className="h-6 w-5 text-brass-soft" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg font-semibold leading-tight">
              Banksia Table Assistant
            </p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-cream/65">
              Simulated demo assistant · scripted replies
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-cream/15"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* messages */}
        <div
          ref={scrollRef}
          className="chat-scroll flex-1 space-y-4 overflow-y-auto px-4 py-5"
          aria-live="polite"
        >
          {messages.map((m) =>
            m.from === "bot" ? (
              <BotBubble key={m.id} text={m.text} actions={m.actions} />
            ) : (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-eucalyptus px-4 py-3 text-[14px] leading-relaxed text-cream shadow-sm">
                  {m.text}
                </div>
              </div>
            )
          )}
          {typing && (
            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-eucalyptus/15 bg-white px-4 py-3.5 shadow-sm w-20">
              <span className="typing-dot h-2 w-2 rounded-full bg-eucalyptus/70" />
              <span className="typing-dot h-2 w-2 rounded-full bg-eucalyptus/70" />
              <span className="typing-dot h-2 w-2 rounded-full bg-eucalyptus/70" />
            </div>
          )}
        </div>

        {/* quick replies */}
        <div className="chat-scroll flex gap-2 overflow-x-auto border-t border-charcoal/10 px-4 py-2.5">
          {QUICK_REPLIES.map((q) => (
            <button
              key={q.intent}
              type="button"
              onClick={() => quick(q.intent, q.label)}
              className="shrink-0 rounded-full border border-brass/60 bg-cream px-3.5 py-1.5 text-[12.5px] font-medium text-eucalyptus transition-colors hover:bg-sage"
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-charcoal/10 bg-cream px-3 py-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            aria-label="Type your message"
            className="h-11 min-w-0 flex-1 rounded-full border border-charcoal/20 bg-white px-4 text-[14px] text-charcoal placeholder:text-charcoal/40 focus:border-eucalyptus focus:outline-none focus:ring-1 focus:ring-eucalyptus/40"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || typing}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream transition-all hover:bg-terracotta disabled:opacity-40 disabled:hover:bg-eucalyptus"
          >
            <Send className="h-4.5 w-4.5" />
          </button>
        </form>
      </div>
    </>
  );
}
