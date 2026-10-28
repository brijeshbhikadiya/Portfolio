import { content } from "@/data/content";
import { Chip } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";
import { PhoneMockup } from "../PhoneMockup";
import { ProjectIcon } from "../ui/iconMap";

export function MoreProjects() {
  const m = content.projects.more;
  return (
    <div className="mt-28">
      <Reveal>
        <h3 className="text-[32px] font-extrabold text-ink">{m.heading}</h3>
        <p className="mt-2 text-base text-muted">{m.subheading}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {m.items.map((p, i) => {
          const [a, b] = p.accent;
          return (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="card card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative flex h-[231px] items-start justify-center overflow-hidden pt-6" style={{ background: `linear-gradient(135deg, ${a}26, ${b}1a)` }}>
                  <div aria-hidden className="absolute left-1/2 top-[22%] h-[250px] w-[250px] -translate-x-1/2 rounded-full" style={{ background: `linear-gradient(135deg, ${a}33, ${b}26)` }} />
                  <div className={`relative transition-transform duration-500 group-hover:rotate-0 ${i % 2 ? "rotate-[5deg]" : "-rotate-[5deg]"}`}>
                    <PhoneMockup accentFrom={a} accentTo={b} title={p.phoneTitle} width={130} icon={<ProjectIcon name={p.phoneTitle} size={10} />} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">{p.meta}</div>
                  <h4 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{p.title}</h4>
                  <p className="mt-3 text-[15px] leading-6 text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => <Chip key={t}>{t}</Chip>)}
                  </div>
                  <div className="mt-auto pt-6">
                    <a
                      href={p.button.href}
                      className="inline-flex h-9 items-center rounded-full bg-[image:var(--grad)] px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(67,56,202,.25)] transition-transform hover:-translate-y-0.5"
                    >
                      {p.button.label}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
