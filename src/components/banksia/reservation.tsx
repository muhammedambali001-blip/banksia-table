"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CalendarDays, CheckCircle2, Phone } from "lucide-react";
import { CONTACT, HOURS } from "@/lib/banksia-data";
import { Reveal } from "./reveal";
import { BanksiaMark } from "./logo";

/* ---------------- validation helpers ---------------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function normalizeAuPhone(raw: string): string {
  return raw.replace(/[\s\-().]/g, "");
}

export function isValidAuPhone(raw: string): boolean {
  const p = normalizeAuPhone(raw);
  return /^(?:\+61\d{9}|0\d{9})$/.test(p) && !p.startsWith("+610");
}

function parseDmy(v: string): Date | null {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v);
  if (!m) return null;
  const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  if (d.getDate() !== Number(m[1]) || d.getMonth() !== Number(m[2]) - 1) return null;
  return d;
}

function formatDmy(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
}

/* time slots per service day (30-minute steps, last seating 1h before close) */
function slotsForDay(day: number): { label: string; value: string }[] {
  const ranges: Record<number, [number, number]> = {
    2: [8, 20.5], // Tue
    3: [8, 20.5],
    4: [8, 20.5],
    5: [8, 20.5], // Fri
    6: [9, 21.5], // Sat
    0: [9, 15], // Sun
  };
  const [start, end] = ranges[day] ?? [];
  if (start === undefined) return [];
  const out: { label: string; value: string }[] = [];
  for (let t = start; t <= end; t += 0.5) {
    const h = Math.floor(t);
    const m = t % 1 === 0 ? "00" : "30";
    const h12 = ((h + 11) % 12) + 1;
    const ampm = h < 12 ? "AM" : "PM";
    const value = `${String(h).padStart(2, "0")}:${m}`;
    out.push({ label: `${h12}:${m} ${ampm}`, value });
  }
  return out;
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const inputCls =
  "w-full border border-charcoal/25 bg-cream-soft px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-eucalyptus focus:outline-none focus:ring-1 focus:ring-eucalyptus/40";
const labelCls = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/70";
const errCls = "mt-1.5 text-[13px] font-medium text-destructive";

export function Reservation() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onDateChange = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 8);
    let out = digits;
    if (digits.length > 4) out = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    else if (digits.length > 2) out = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    set("date", out);
  };

  const parsedDate = parseDmy(values.date);
  const timeSlots = useMemo(() => {
    if (parsedDate) return slotsForDay(parsedDate.getDay());
    return slotsForDay(2); // default Tue–Fri service
  }, [parsedDate]);
  const dayName = parsedDate ? DAY_NAMES[parsedDate.getDay()] : "Tuesday – Friday";

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!isValidAuPhone(values.phone))
      e.phone = "Please enter a valid Australian number, e.g. 0412 345 678 or (03) 5550 1234.";
    if (!parsedDate) {
      e.date = "Please choose a date in DD/MM/YYYY format.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const max = new Date(today);
      max.setFullYear(max.getFullYear() + 1);
      if (parsedDate < today) e.date = "Please choose today or a future date.";
      else if (parsedDate > max) e.date = "Bookings open up to 12 months ahead.";
      else if (parsedDate.getDay() === 1)
        e.date = "We're closed on Mondays — please choose another day.";
    }
    if (!values.time) e.time = "Please select a preferred time.";
    else if (parsedDate && !timeSlots.some((s) => s.value === values.time))
      e.time = `That time is outside ${dayName} service. Please choose another time.`;
    if (!values.guests) e.guests = "Please select the number of guests.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  return (
    <section id="reserve" className="relative scroll-mt-24 overflow-hidden bg-eucalyptus">
      <Image
        src="/images/gallery-table.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 lg:py-32">
        {/* copy */}
        <Reveal>
          <p className="eyebrow text-brass-soft">Reservations</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl">
            Your Table Is Waiting.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
            Planning a meal, a gathering or a special occasion? Send us your preferred dining
            details.
          </p>
          <ul className="mt-8 space-y-4 text-cream/75">
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between max-w-sm border-b border-cream/10 pb-3">
                <span className="inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.14em]">
                  <CalendarDays className="h-4 w-4 text-brass-soft" />
                  {h.day}
                </span>
                <span className={`text-sm font-medium ${h.closed ? "text-terracotta" : "text-cream"}`}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 inline-flex items-center gap-3 text-cream/80">
            <Phone className="h-4 w-4 text-brass-soft" />
            Prefer to call? <span className="font-medium text-cream">{CONTACT.phone}</span>
          </p>
        </Reveal>

        {/* form card */}
        <Reveal delay={150}>
          <div className="bg-cream p-7 shadow-[0_40px_80px_rgba(0,0,0,0.35)] sm:p-10">
            {submitted ? (
              <div className="py-8 text-center">
                <BanksiaMark className="mx-auto h-14 w-11 text-terracotta" />
                <h3 className="mt-6 font-display text-3xl font-semibold text-charcoal">
                  Thank You
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                  Thank you! Your reservation request has been submitted in this website
                  demonstration.
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-charcoal/55">
                  This is a fictional concept website — no real reservation has been made and no
                  details are stored or sent anywhere.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({ fullName: "", email: "", phone: "", date: "", time: "", guests: "", requests: "" });
                  }}
                  className="btn-outline mt-8"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl font-semibold text-charcoal">
                  Reserve a Table
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  Demonstration booking form — requests are not sent to a real restaurant.
                </p>
                <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="res-name" className={labelCls}>Full Name *</label>
                    <input
                      id="res-name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Charlotte Nguyen"
                      value={values.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      aria-invalid={!!errors.fullName}
                      className={inputCls}
                    />
                    {errors.fullName && <p className={errCls} role="alert">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="res-email" className={labelCls}>Email Address *</label>
                    <input
                      id="res-email"
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
                    <label htmlFor="res-phone" className={labelCls}>Australian Phone *</label>
                    <input
                      id="res-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="0412 345 678"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                      className={inputCls}
                    />
                    {errors.phone && <p className={errCls} role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="res-date" className={labelCls}>Reservation Date (DD/MM/YYYY) *</label>
                    <input
                      id="res-date"
                      type="text"
                      inputMode="numeric"
                      placeholder="25/12/2026"
                      value={values.date}
                      onChange={(e) => onDateChange(e.target.value)}
                      aria-invalid={!!errors.date}
                      className={inputCls}
                    />
                    {errors.date && <p className={errCls} role="alert">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="res-time" className={labelCls}>Preferred Time *</label>
                    <select
                      id="res-time"
                      value={values.time}
                      onChange={(e) => set("time", e.target.value)}
                      aria-invalid={!!errors.time}
                      className={inputCls}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <p className="mt-1.5 text-xs text-charcoal/50">
                      Times shown for {dayName} service.
                    </p>
                    {errors.time && <p className={errCls} role="alert">{errors.time}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="res-guests" className={labelCls}>Number of Guests *</label>
                    <select
                      id="res-guests"
                      value={values.guests}
                      onChange={(e) => set("guests", e.target.value)}
                      aria-invalid={!!errors.guests}
                      className={inputCls}
                    >
                      <option value="">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="10+">10+ — please enquire about private events</option>
                    </select>
                    {errors.guests && <p className={errCls} role="alert">{errors.guests}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="res-requests" className={labelCls}>Special Requests</label>
                    <textarea
                      id="res-requests"
                      rows={3}
                      placeholder="Allergies, occasions, seating preferences… (optional)"
                      value={values.requests}
                      onChange={(e) => set("requests", e.target.value)}
                      maxLength={300}
                      className={`${inputCls} resize-none`}
                    />
                    <p className="mt-1.5 text-xs text-charcoal/50">
                      {values.requests.length}/300 characters
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full">
                      Book a Table
                    </button>
                    <p className="mt-3 text-center text-xs text-charcoal/50">
                      By submitting you understand this is a website demonstration.
                    </p>
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
