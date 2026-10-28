import { ArrowRight, FileText, Mail, Atom } from "lucide-react";
import { content } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Chip } from "./ui/Chip";
import { GradientButton, OutlineButton } from "./ui/Buttons";
import { Icon } from "./ui/iconMap";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  const h = content.hero;
  const l = content.links;
  const [first, ...rest] = h.greeting.split("Brijesh");
  return (
    <section
      id="home"
      className="dot-grid relative overflow-hidden pb-20 pt-[148px] md:min-h-[868px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#9b8cff] opacity-35 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#ffb4a2] opacity-20 blur-[80px]"
      />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[55fr_45fr]">
        <Reveal>
          {/* <span className="inline-flex h-8 items-center gap-2 rounded-full border border-success/30 bg-[#e8fbf1] px-3 text-[13px] font-semibold text-[#047857] dark:bg-success/10 dark:text-success">
            <span className="relative flex h-2 w-2">
              <span className="ping absolute inset-0 rounded-full bg-success" />
              <span className="relative h-2 w-2 rounded-full bg-success" />
            </span>
            {h.badge}
          </span> */}
          <p className="mt-7 text-[22px] font-medium text-ink">
            {first}
            <b className="font-extrabold">Brijesh</b>
            {rest.join("Brijesh")}
          </p>
          <h1 className="mt-5 text-[clamp(46px,6vw,72px)] font-extrabold leading-[1] tracking-[-0.04em]">
            <span className="grad-text block">{h.headlineLine1}</span>
            <span className="block text-ink">{h.headlineLine2}</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-8 text-muted">
            {h.subtext}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="#projects">
              View My Projects <ArrowRight size={18} />
            </GradientButton>
            <OutlineButton href="#contact">
              <Mail size={18} /> Contact Me
            </OutlineButton>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-3 pl-4 text-base font-semibold text-muted">
            <a
              href={l.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={l.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={l.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
          <div className="mt-12 border-t border-line pt-6">
            <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-faint">
              Primary stack
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3.5">
              {h.stack.map((s) => (
                <Chip key={s} variant="check">
                  {s}
                </Chip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mx-auto flex h-[560px] w-full max-w-[480px] items-center justify-center"
        >
          <div
            aria-hidden
            className="absolute h-[440px] w-[440px] rounded-full border border-primary/20"
          />
          <div
            aria-hidden
            className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-primary/20"
          />
          <div
            aria-hidden
            className="absolute h-[400px] w-[400px] rounded-full bg-accent/20 blur-[70px]"
          />
          <div className="relative">
            <PhoneMockup
              accentFrom="#4338CA"
              accentTo="#06B6D4"
              title="Good morning!"
              subtitle="Hi, Brijesh 👋"
              icon={<Atom size={18} />}
            />
          </div>
          <div
            className="float absolute left-0 top-[44%] flex items-center gap-3 rounded-[18px] bg-surface px-4 py-3 shadow-lg sm:-left-6"
            style={{ animationDelay: "0s" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <Icon name={h.floatCards[0].icon} size={18} />
            </span>
            <span>
              <b className="block text-[15px] text-ink">
                {h.floatCards[0].title}
              </b>
              <span className="text-[13px] text-muted">
                {h.floatCards[0].subtitle}
              </span>
            </span>
          </div>
          <div
            className="float absolute bottom-[18%] right-0 flex items-center gap-3 rounded-[18px] bg-surface px-4 py-3 shadow-lg sm:-right-8"
            style={{ animationDelay: "-2s" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-soft text-primary">
              <Icon name={h.floatCards[1].icon} size={18} />
            </span>
            <span>
              <b className="block text-[15px] text-ink">
                {h.floatCards[1].title}
              </b>
              <span className="text-[13px] text-muted">
                {h.floatCards[1].subtitle}
              </span>
            </span>
          </div>
          <div
            className="float absolute bottom-[8%] left-2 hidden rounded-2xl bg-dark px-4 py-3 font-mono text-[13px] text-white sm:block"
            style={{ animationDelay: "-4s" }}
          >
            <span className="text-pink-400">{h.codePill.keyword}</span>{" "}
            <span className="text-cyan-300">{h.codePill.name}</span> ={" "}
            <span className="text-yellow-300">{h.codePill.value}</span>;
          </div>
        </Reveal>
      </div>
    </section>
  );
}
