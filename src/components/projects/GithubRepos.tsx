import { ArrowUpRight, GitBranch, Star, GitFork } from "lucide-react";
import { content } from "@/data/content";
import { getRepos } from "@/lib/github";
import { GithubIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const LANG: Record<string, string> = { TypeScript: "#3178C6", JavaScript: "#F1E05A" };

export async function GithubRepos() {
  const g = content.projects.github;
  const repos = await getRepos(g.username, g.count);
  return (
    <div className="mt-28">
      <SectionHeader pill={g.pill} heading={g.heading} subheading={g.subheading} />
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[28px] bg-dark p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"><GithubIcon size={28} /></span>
            <div>
              <div className="text-xl font-bold text-white">@{g.username}</div>
              <div className="text-[15px] text-white/60">Live from the GitHub API</div>
            </div>
          </div>
          <a
            href={content.links.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[image:var(--grad)] px-6 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            View GitHub Profile <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
      {repos.length === 0 ? (
        <div className="card mt-10 rounded-3xl p-8 text-center text-muted">Repositories will appear here</div>
      ) : (
        <div className="mt-10 grid gap-[17px] md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.06} className="h-full min-w-0">
              <div className="card card-hover flex h-full flex-col rounded-3xl p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2 text-[17px] font-bold text-ink">
                    <GitBranch size={16} className="shrink-0 text-primary" aria-hidden />
                    <span className="truncate">{r.name}</span>
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-muted">{r.description || "No description provided."}</p>
                <div className="mt-auto flex items-center gap-4 pt-4 text-sm text-muted">
                  {r.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: LANG[r.language] ?? "#8A93A3" }} /> {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={14} /> {r.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> {r.forks_count}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
