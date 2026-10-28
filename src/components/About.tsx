import { content } from "@/data/content";
import { Icon } from "./ui/iconMap";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  const a = content.about;
  const b = content.brand;
  return (
    <section id="about" className="section bg-plain">
      <div className="container-x">
        <SectionHeader pill={a.pill} heading={a.heading} subheading={a.subheading} />
        <div className="grid gap-14 lg:grid-cols-[452px_1fr]">
          <Reveal>
            <div className="card rounded-[28px] p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-lg font-extrabold text-white">{b.initial}</span>
                <div>
                  <div className="text-lg font-bold text-ink">{b.fullName}</div>
                  <div className="text-sm text-muted">{b.title} · {b.location} · {b.availability}</div>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted">
                {a.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-y-4 border-t border-line pt-6">
                {a.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[32px] font-extrabold leading-none text-ink">{s.value}</div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-faint">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {a.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <div className="card card-hover h-full rounded-3xl p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-soft text-primary"><Icon name={s.icon} /></span>
                  <h3 className="mt-3 text-lg font-bold tracking-normal text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
