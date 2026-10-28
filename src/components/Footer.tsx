import { ArrowUp, Mail } from "lucide-react";
import { content } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Logo, NAV } from "./Brand";

export function Footer() {
  const l = content.links;
  const round =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:text-primary";
  return (
    <footer className="border-t border-line bg-plain">
      <div className="container-x pt-14">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <Logo />
            <div className="mt-5 text-[17px] font-bold text-ink">
              {content.brand.title}
            </div>
            <p className="mt-2 max-w-[340px] text-[15px] leading-6 text-muted">
              {content.footer.description}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={l.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={round}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={l.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={round}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${l.email}`}
                aria-label="Email"
                className={round}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <nav aria-label="Footer">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">
                Navigate
              </div>
              <ul className="mt-4">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      className="block py-1.5 text-[15px] font-medium text-ink hover:text-primary"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">
                Connect
              </div>
              <div className="mt-4 flex items-center gap-2 py-1.5 text-[15px] font-medium text-ink">
                <a
                  href={l.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  GitHub
                </a>
                <span className="text-line">|</span>
                <a
                  href={l.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
                <span className="text-line">|</span>
                <a href={`mailto:${l.email}`} className="hover:text-primary">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-[15px] text-muted">
          <span>
            © {new Date().getFullYear()} Brijesh. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-ink hover:text-primary"
            >
              <ArrowUp size={14} /> Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
