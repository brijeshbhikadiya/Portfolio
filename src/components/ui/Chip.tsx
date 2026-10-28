import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export function Chip({
  children, variant = "neutral",
}: { children: ReactNode; variant?: "indigo" | "neutral" | "check" }) {
  if (variant === "check")
    return (
      <span className="inline-flex items-center gap-2 text-base font-medium text-muted">
        <CheckCircle2 size={16} className="text-primary" aria-hidden />
        {children}
      </span>
    );
  const cls =
    variant === "indigo"
      ? "border-primary/15 bg-soft text-primary"
      : "border-line text-muted bg-transparent";
  return (
    <span className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] font-semibold ${cls}`}>
      {children}
    </span>
  );
}
