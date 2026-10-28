import { Reveal } from "./Reveal";

export function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-full border border-primary/20 bg-soft px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeader({ pill, heading, subheading }: { pill: string; heading: string; subheading?: string }) {
  return (
    <Reveal className="mb-16 flex flex-col items-center text-center">
      <Pill>{pill}</Pill>
      <h2 className="mt-6 max-w-[780px] text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.02] text-ink">{heading}</h2>
      {subheading && <p className="mt-4 max-w-[640px] text-lg leading-[1.65] text-muted">{subheading}</p>}
    </Reveal>
  );
}
