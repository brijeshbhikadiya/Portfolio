"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight, Clock, Loader2, Mail, SendHorizontal } from "lucide-react";
import { content } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

type Status = "idle" | "loading" | "success" | "error";

const input =
  "w-full rounded-2xl border border-line bg-alt px-[18px] py-3.5 text-base text-ink placeholder:text-faint outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

export function Contact() {
  const c = content.contact;
  const l = content.links;
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const cards = [
    { label: "Email", value: l.email, href: `mailto:${l.email}`, icon: <Mail size={20} /> },
    { label: "LinkedIn", value: l.linkedin.label, href: l.linkedin.url, icon: <LinkedinIcon size={20} /> },
    { label: "GitHub", value: l.github.label, href: l.github.url, icon: <GithubIcon size={20} /> },
  ];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) return fail("Please fill in all fields.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Please enter a valid email address.");
    if (message.length < 10) return fail("Message should be at least 10 characters.");

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name, email, message,
          subject: `New portfolio message from ${name}`,
          from_name: "Portfolio Website",
          botcheck: fd.get("botcheck") ? "true" : "",
        }),
      });
      const data = await res.json();
      if (data.success === true) {
        setStatus("success");
        setMsg("Thanks! Your message has been sent.");
        form.reset();
      } else fail(data.message || "Something went wrong. Please try again.");
    } catch {
      fail("Network error. Please try again.");
    }
  }
  function fail(m: string) {
    setStatus("error");
    setMsg(m);
  }

  return (
    <section id="contact" className="section bg-alt">
      <div className="container-x">
        <SectionHeader pill={c.pill} heading={c.heading} subheading={c.subheading} />
        <div className="grid items-start gap-14 lg:grid-cols-[452px_1fr]">
          <div className="min-w-0 space-y-[17px]">
            {cards.map((k, i) => (
              <Reveal key={k.label} delay={i * 0.08}>
                <a
                  href={k.href}
                  {...(k.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card card-hover flex items-center gap-4 rounded-[20px] p-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-soft text-primary">{k.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-faint">{k.label}</span>
                    <span className="block truncate text-[17px] font-bold text-ink">{k.value}</span>
                  </span>
                  <ArrowRight size={18} className="text-muted" aria-hidden />
                </a>
              </Reveal>
            ))}
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[var(--dashed)] px-4 py-4 text-sm text-muted">
              <Clock size={18} className="shrink-0 text-success" aria-hidden /> {c.replyLine}
            </div>
          </div>

          <Reveal>
            <form onSubmit={onSubmit} noValidate className="card rounded-[28px] p-8 shadow-lg">
              <h3 className="text-2xl font-extrabold tracking-normal text-ink">Send a message</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[15px] font-semibold text-ink">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" className={input} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[15px] font-semibold text-ink">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" className={input} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-[15px] font-semibold text-ink">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project, timeline and goals..." className={`${input} min-h-[200px] resize-y`} />
              </div>
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[image:var(--grad)] text-base font-bold text-white shadow-[0_12px_30px_rgba(67,56,202,.3)] transition-all hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Send Message <SendHorizontal size={18} className="fill-current" /></>}
              </button>
              <p aria-live="polite" className={`text-sm font-medium empty:hidden ${status === "success" ? "mt-4 text-success" : "mt-4 text-red-500"}`}>
                {status === "success" || status === "error" ? msg : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
