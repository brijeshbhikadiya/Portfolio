import { AppleIcon, PlayIcon } from "./BrandIcons";

// Pass `href` for a working link, or `display` to show the badge without navigation.
export function StoreBadge({ store, href = "", display }: { store: "play" | "apple"; href?: string; display?: boolean }) {
  if (!href && !display) return null;
  const play = store === "play";
  const label = play ? "Google Play" : "App Store";
  const inner = (
    <>
      {play ? <PlayIcon size={16} /> : <AppleIcon size={18} />}
      <span className="flex flex-col leading-none">
        <span className="text-[8px] font-semibold uppercase tracking-wide opacity-80">
          {play ? "Get it on" : "Download on the"}
        </span>
        <span className="mt-0.5 text-sm font-bold">{label}</span>
      </span>
    </>
  );
  const cls = "inline-flex h-10 items-center gap-2 rounded-xl bg-dark px-3.5 text-white";
  if (!href)
    return (
      <span role="img" aria-label={`Available on ${label}`} className={`${cls} cursor-default select-none`}>
        {inner}
      </span>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={play ? "Get it on Google Play" : "Download on the App Store"}
      className={`${cls} transition-transform hover:-translate-y-0.5`}
    >
      {inner}
    </a>
  );
}
