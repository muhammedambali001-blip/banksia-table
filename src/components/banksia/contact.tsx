"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Globe, CheckCircle2, Clock } from "lucide-react";
import { CONTACT } from "@/lib/banksia-data";
import { Reveal } from "./reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidAuPhone(raw: string): boolean {
  const p = raw.replace(/[\s\-().]/g, "");
  return /^(?:\+61\d{9}|0\d{9})$/.test(p) && !p.startsWith("+610");
}

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Private Events",
  "Feedback",
  "Media & Press",
];

const inputCls =
  "w-full border border-charcoal/25 bg-cream-soft px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-eucalyptus focus:outline-none focus:ring-1 focus:ring-eucalyptus/40";
const labelCls = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/70";
const errCls = "mt-1.5 text-[13px] font-medium text-destructive";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    type: ENQUIRY_TYPES[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  /* private-dining "Enquire About an Event" presets the enquiry type */
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && ENQUIRY_TYPES.includes(detail)) {
        setValues((v) => ({ ...v, type: detail }));
        setSubmitted(false);
      }
    };
    window.addEventListener("banksia:enquiry-type", handler);
    return () => window.removeEventListener("banksia:enquiry-type", handler);
  }, []);

  const set = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.phone.trim() && !isValidAuPhone(values.phone))
      e.phone = "Please enter a valid Australian number, or leave this field blank.";
    if (values.message.trim().length < 10)
      e.message = "Please write a short message (at least 10 characters).";
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-sage py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        {/* details */}
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/75">
            Questions about the menu, bookings or events? Reach out — the details below are
            fictional demonstration contacts for this concept website.
          </p>
          <ul className="mt-9 space-y-5 text-[15px] text-charcoal/80">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                  Telephone
                </span>
                {CONTACT.phone}
                <br />
                <span className="text-charcoal/60">International: {CONTACT.phoneIntl}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                  Email
                </span>
                {CONTACT.email}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream">
                <Globe className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                  Website
                </span>
                {CONTACT.website}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                  Location
                </span>
                {CONTACT.location}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eucalyptus text-cream">
                <Clock className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                  Hours
                </span>
                Tuesday – Friday 8:00 AM – 9:00 PM · Saturday 9:00 AM – 10:00 PM · Sunday 9:00 AM –
                4:00 PM · Monday closed
              </span>
            </li>
          </ul>
        </Reveal>

        {/* form */}
        <Reveal delay={150}>
          <div className="bg-cream-soft p-7 shadow-[0_24px_60px_rgba(41,43,39,0.12)] sm:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-eucalyptus" />
                <h3 className="mt-6 font-display text-3xl font-semibold text-charcoal">
                  Message Received
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                  Thank you! Your enquiry has been submitted in this website demonstration. No real
                  message has been sent — this concept site does not connect to a live inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({ name: "", email: "", phone: "", type: ENQUIRY_TYPES[0], message: "" });
                  }}
                  className="btn-outline mt-8"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl font-semibold text-charcoal">
                  Send an Enquiry
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  Demonstration enquiry form — messages are not sent to a real inbox.
                </p>
                <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ct-name" className={labelCls}>Name *</label>
                    <input
                      id="ct-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      className={inputCls}
                    />
                    {errors.name && <p className={errCls} role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="ct-email" className={labelCls}>Email *</label>
                    <input
                      id="ct-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      className={inputCls}
                    />
                    {errors.email && <p className={errCls} role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="ct-phone" className={labelCls}>Phone</label>
                    <input
                      id="ct-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="0412 345 678 (optional)"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                      className={inputCls}
                    />
                    {errors.phone && <p className={errCls} role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="ct-type" className={labelCls}>Enquiry Type *</label>
                    <select
                      id="ct-type"
                      value={values.type}
                      onChange={(e) => set("type", e.target.value)}
                      className={inputCls}
                    >
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="ct-message" className={labelCls}>Message *</label>
                    <textarea
                      id="ct-message"
                      rows={5}
                      placeholder="Tell us a little about your enquiry…"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      className={`${inputCls} resize-none`}
                    />
                    {errors.message && <p className={errCls} role="alert">{errors.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
