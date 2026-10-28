"use client";
import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { content } from "@/data/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { StoreBadge } from "../ui/StoreBadge";

function AppIcon({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return failed ? (
    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[image:var(--grad)] text-2xl font-extrabold text-white shadow-card">
      {name.charAt(0)}
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt="" width={64} height={64} onError={() => setFailed(true)} className="h-16 w-16 rounded-2xl object-cover shadow-card" />
  );
}

export function PublishedApps() {
  const p = content.projects.published;
  return (
    <div className="mt-28">
      <SectionHeader pill={p.pill} heading={p.heading} subheading={p.subheading} />
      <div className="flex flex-wrap justify-center gap-6">
        {p.items.map((app, i) => (
          <Reveal key={app.name} delay={i * 0.08} className="w-full max-w-[380px]">
            <div className="card card-hover h-full rounded-3xl p-6">
              <AppIcon src={app.icon} name={app.name} />
              <h3 className="mt-4 text-[22px] font-extrabold tracking-normal text-ink">{app.name}</h3>
              <div className="mt-1 flex items-center gap-2 text-[15px]">
                <span className="font-semibold text-primary">{app.category}</span>
                <span className="text-faint">·</span>
                <span className="flex items-center gap-1 text-muted"><Download size={14} /> {app.downloads}</span>
              </div>
              <p className="mt-3 text-[15px] leading-6 text-muted">{app.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <StoreBadge store="play" href={app.playStore || app.playStoreFallback} />
                <StoreBadge store="apple" href={app.appStore} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
