import { Sparkle } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { content } from "@/data/content";
import { Chip } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { StoreBadge } from "../ui/StoreBadge";
import { SmallOutlineButton } from "../ui/Buttons";
import { PhoneMockup } from "../PhoneMockup";
import { ProjectIcon } from "../ui/iconMap";

export function FeaturedProjects() {
  const f = content.projects.featured;
  return (
    <div>
      <SectionHeader pill={f.pill} heading={f.heading} subheading={f.subheading} />
      <div className="flex flex-col gap-12">
        {f.items.map((p, i) => {
          const [a, b] = p.accent;
          const flip = i % 2 === 1;
          const hasLinks = p.links.playStore || p.links.appStore || p.links.github || p.links.demo;
          return (
            <Reveal key={p.title}>
              <article className="card group overflow-hidden rounded-[28px] shadow-lg md:grid md:grid-cols-2">
                <div
                  className={`relative flex min-h-[460px] items-start justify-center overflow-hidden pt-12 ${flip ? "md:order-2" : ""}`}
                  style={{ background: `linear-gradient(135deg, ${a}26, ${b}1a)` }}
                >
                  <div aria-hidden className="absolute left-1/2 top-[106px] h-[500px] w-[500px] -translate-x-1/2 rounded-full" style={{ background: `linear-gradient(135deg, ${a}33, ${b}26)` }} />
                  <div className={`relative transition-transform duration-500 group-hover:rotate-0 ${flip ? "rotate-[5deg]" : "-rotate-[5deg]"}`}>
                    <PhoneMockup accentFrom={a} accentTo={b} title={p.phoneTitle} width={260} icon={<ProjectIcon name={p.phoneTitle} size={18} />} screenshot={p.screenshot || undefined} />
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-faint">
                    <span className="text-sm font-bold tracking-normal" style={{ color: a }}>{p.no}</span>
                    <span aria-hidden className="h-px w-10 bg-line" />
                    <span>{p.meta}</span>
                  </div>
                  <h3 className="mt-5 text-[32px] font-extrabold leading-[1.1] text-ink">{p.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{p.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] font-semibold leading-6 text-ink">
                        <Sparkle size={16} className="mt-1 shrink-0 fill-primary text-primary" aria-hidden /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => <Chip key={t} variant="indigo">{t}</Chip>)}
                  </div>
                  {hasLinks && (
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {p.links.github && <SmallOutlineButton href={p.links.github}><GithubIcon size={16} /> GitHub</SmallOutlineButton>}
                      {p.links.demo && <SmallOutlineButton href={p.links.demo}>Live Demo</SmallOutlineButton>}
                      <StoreBadge store="play" href={p.links.playStore} />
                      <StoreBadge store="apple" href={p.links.appStore} />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
