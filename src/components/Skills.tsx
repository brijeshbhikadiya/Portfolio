import { content } from "@/data/content";
import { Icon, SkillIcon } from "./ui/iconMap";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  const s = content.skills;
  return (
    <section id="skills" className="section bg-alt">
      <div className="container-x">
        <SectionHeader pill={s.pill} heading={s.heading} subheading={s.subheading} />
        <div className="flex flex-wrap justify-center gap-[18px]">
          {s.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} className="w-full md:w-[calc(50%-9px)] lg:w-[350px]">
              <div className="card card-hover h-full min-h-[310px] rounded-3xl p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary text-white"><Icon name={g.icon} size={22} /></span>
                  <span className="text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-normal text-ink">{g.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{g.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-line bg-soft/40 px-3.5 text-[15px] font-semibold text-ink">
                      <SkillIcon name={it} className="shrink-0 text-primary" />
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
