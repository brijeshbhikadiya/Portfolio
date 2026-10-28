import { AppleIcon, PlayIcon } from "./BrandIcons";

export function StoreBadge({ store, href }: { store: "play" | "apple"; href: string }) {
  if (!href) return null;
  const play = store === "play";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={play ? "Get it on Google Play" : "Download on the App Store"}
      className="inline-flex h-10 items-center gap-2 rounded-xl bg-dark px-3.5 text-white transition-transform hover:-translate-y-0.5"
    >
      {play ? <PlayIcon size={16} /> : <AppleIcon size={18} />}
      <span className="flex flex-col leading-none">
        <span className="text-[8px] font-semibold uppercase tracking-wide opacity-80">
          {play ? "Get it on" : "Download on the"}
        </span>
        <span className="mt-0.5 text-sm font-bold">{play ? "Google Play" : "App Store"}</span>
      </span>
    </a>
  );
}
