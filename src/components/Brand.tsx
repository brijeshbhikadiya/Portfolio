import { content } from "@/data/content";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Home">
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#4338CA,#2563EB)] text-lg font-extrabold text-white">
        {content.brand.initial}
      </span>
      <span className="text-[22px] font-extrabold tracking-tight text-ink">
        {content.brand.name}
        <span className="text-accent">.</span>
      </span>
    </a>
  );
}

