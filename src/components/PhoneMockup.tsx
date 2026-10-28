import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  accentFrom: string;
  accentTo: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  screenshot?: string;
  width?: number;
};

const BARS = [55, 32, 70, 88, 45, 76];

export function PhoneMockup({
  accentFrom, accentTo, title, subtitle = "Dashboard", icon, screenshot, width = 250,
}: Props) {
  const s = width / 250;
  const grad = `linear-gradient(135deg, ${accentFrom}, ${accentTo})`;
  return (
    <div
      aria-hidden
      className="relative shrink-0 overflow-hidden bg-surface"
      style={{
        width,
        height: 512 * s,
        border: `${8 * s}px solid var(--dark)`,
        borderRadius: 44 * s,
        boxShadow: "0 24px 50px rgba(15,21,35,.18)",
      }}
    >
      <div className="absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-dark" style={{ top: 12 * s, width: 76 * s, height: 20 * s }} />
      {screenshot ? (
        <Image src={screenshot} alt="" fill className="object-cover" sizes={`${width}px`} />
      ) : (
        <>
          <div className="flex items-end justify-between text-white" style={{ background: grad, height: 118 * s, padding: `0 ${14 * s}px ${14 * s}px` }}>
            <div>
              <div style={{ fontSize: 10 * s, opacity: 0.85 }}>{subtitle}</div>
              <div className="font-extrabold" style={{ fontSize: 17 * s, lineHeight: 1.2 }}>{title}</div>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/25" style={{ width: 34 * s, height: 34 * s }}>
              {icon}
            </div>
          </div>
          <div style={{ padding: 14 * s }} className="flex flex-col" >
            <div className="flex" style={{ gap: 10 * s }}>
              {[accentFrom, accentTo].map((c, i) => (
                <div key={i} className="flex-1 rounded-xl bg-alt" style={{ padding: 10 * s }}>
                  <div className="rounded-full bg-line" style={{ height: 4 * s, width: "40%" }} />
                  <div className="rounded-full" style={{ height: 8 * s, marginTop: 6 * s, background: c }} />
                </div>
              ))}
            </div>
            <div className="flex items-end justify-between rounded-2xl bg-alt" style={{ marginTop: 12 * s, height: 100 * s, padding: `0 ${14 * s}px ${12 * s}px` }}>
              {BARS.map((h, i) => (
                <div key={i} className="rounded-full" style={{ width: 14 * s, height: `${h}%`, background: `linear-gradient(180deg, ${accentFrom}, ${accentTo})` }} />
              ))}
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center" style={{ marginTop: 12 * s, gap: 10 * s }}>
                <div className="rounded-lg" style={{ width: 26 * s, height: 26 * s, background: `${accentFrom}22` }} />
                <div className="flex-1">
                  <div className="rounded-full bg-line" style={{ height: 5 * s, width: `${80 - i * 15}%` }} />
                  <div className="rounded-full bg-line/60" style={{ height: 5 * s, marginTop: 5 * s, width: "50%" }} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
