export function BanksiaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 54"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* stylised banksia flower head */}
      <rect x="13" y="3" width="14" height="19" rx="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 8h13M13.2 12.5h13.6M13.5 17h13" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
      {/* brush spikes */}
      <path d="M15 3.4 13.4 1M20 3V0.6M25 3.4 26.6 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* stem */}
      <path d="M20 22v30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* leaves */}
      <path
        d="M20 40c-7-.4-11.6-4.4-12.7-9.6 5.6.4 10.6 4.4 12.7 9.6Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M20 46c7-.4 11.6-4.4 12.7-9.6-5.6.4-10.6 4.4-12.7 9.6Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "light" ? "text-cream" : "text-charcoal";
  const sub = tone === "light" ? "text-brass" : "text-terracotta";
  const mark = tone === "light" ? "text-brass" : "text-eucalyptus";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BanksiaMark className={`h-9 w-7 shrink-0 ${mark}`} />
      <span className="flex flex-col items-start leading-none">
        <span className={`font-display text-[1.35rem] font-semibold tracking-[0.22em] ${text}`}>
          BANKSIA TABLE
        </span>
        <span className={`mt-1 text-[9px] font-medium uppercase tracking-[0.42em] ${sub}`}>
          Modern Australian Kitchen
        </span>
      </span>
    </span>
  );
}
