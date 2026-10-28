import { Atom, Briefcase, CalendarDays, Check, CheckCircle2, MapPin } from "lucide-react";
import { content } from "@/data/content";
import { Chip } from "./ui/Chip";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  const e = content.experience;
  const h = e.highlightCard;
  return (
    <section id="experience" className="section bg-plain">
      <div className="container-x">
        <SectionHeader pill={e.pill} heading={e.heading} subheading={e.subheading} />
        <div className="grid items-start gap-8 lg:grid-cols-[362px_1fr] lg:gap-0">
          <Reveal>
            <div className="relative min-h-[441px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#4338CA,#2563EB,#06B6D4)] p-7 text-white">
              <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
              <div aria-hidden className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><Atom size={22} /></span>
                <div className="mt-9 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/80">{h.label}</div>
                <div className="mt-2 text-2xl font-extrabold">{h.role}</div>
                <div className="mt-6 text-[72px] font-extrabold leading-none">{h.bigNumber}</div>
                <div className="mt-2 text-base font-semibold">{h.bigLabel}</div>
                <ul className="mt-6 space-y-3 border-t border-white/20 pt-6">
                  {h.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[15px] font-semibold">
                      <CheckCircle2 size={16} aria-hidden /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <div className="relative flex flex-col gap-8 lg:pl-[104px]">
            {e.jobs.length > 1 && <div aria-hidden className="absolute bottom-8 left-[42px] top-8 hidden w-px bg-line lg:block" />}
            {e.jobs.map((j) => (
              <Reveal key={j.role + j.range} delay={0.1} className="relative">
                <span aria-hidden className="absolute -left-[104px] top-[30px] hidden h-5 w-5 translate-x-[42px] rounded-full bg-primary ring-[6px] ring-primary/15 lg:block" />
                <div className="card rounded-[28px] p-8 lg:ml-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-2xl font-extrabold tracking-normal text-ink">{j.role}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-soft px-3 py-1.5 text-[13px] font-semibold text-primary">
                      <CalendarDays size={14} /> {j.range}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px] font-medium text-muted">
                    <span className="flex items-center gap-2"><Briefcase size={14} /> {j.company} ({j.type})</span>
                    <span className="flex items-center gap-2"><MapPin size={14} /> {j.mode}</span>
                  </div>
                  <p className="mt-6 text-[17px] leading-7 text-muted">{j.summary}</p>
                  <ul className="mt-6 space-y-4">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-6 text-ink">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-success"><Check size={12} strokeWidth={3} /></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {j.tech.map((t) => <Chip key={t}>{t}</Chip>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
