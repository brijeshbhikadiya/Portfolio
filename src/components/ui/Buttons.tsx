import type { ReactNode } from "react";

type Common = { href: string; children: ReactNode; external?: boolean; className?: string; ariaLabel?: string };

function A({ href, external, className, children, ariaLabel }: Common) {
  const ext = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export const GradientButton = ({ className = "", ...p }: Common) => (
  <A
    {...p}
    className={`${base} h-[52px] bg-[image:var(--grad)] px-7 text-base text-white shadow-[0_12px_30px_rgba(67,56,202,.35)] hover:shadow-[0_16px_36px_rgba(67,56,202,.45)] ${className}`}
  />
);

export const OutlineButton = ({ className = "", ...p }: Common) => (
  <A {...p} className={`${base} h-[52px] border border-line bg-surface px-7 text-base text-ink hover:shadow-card ${className}`} />
);

export const DarkPillButton = ({ className = "", ...p }: Common) => (
  <A {...p} className={`${base} h-[38px] bg-pill px-4 text-[15px] text-pill-text ${className}`} />
);

export const SmallOutlineButton = ({ className = "", ...p }: Common) => (
  <A {...p} className={`${base} h-10 border border-line bg-surface px-5 text-sm text-ink ${className}`} />
);
