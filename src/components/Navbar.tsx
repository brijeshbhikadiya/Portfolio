"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";
import { DarkPillButton } from "./ui/Buttons";
import { Logo, NAV } from "./Brand";

const IDS = NAV.map((n) => n.id);

export function Navbar() {
  const active = useScrollSpy(IDS);
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-x relative flex h-[76px] items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-line bg-surface/70 p-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                active === n.id ? "bg-pill text-pill-text" : "text-ink hover:text-primary"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <DarkPillButton href="#contact">Hire me</DarkPillButton>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-4">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-semibold ${active === n.id ? "bg-pill text-pill-text" : "text-ink"}`}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
