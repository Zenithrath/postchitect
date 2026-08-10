import { useEffect, useState } from "react";
import { SITE, WHATSAPP_URL } from "../constants/site";
import { navLinks } from "../data/navigation";

function NavLink({ href, label, onNavigate, dark }) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={`group relative py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
        dark
          ? "text-paper/75 hover:text-paper"
          : "text-ink/70 hover:text-ink"
      }`}
    >
      {label}
      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brown transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export default function Navbar() {
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);

  // Switch to a readable light navbar once the hero (dark) scrolls away.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const threshold = hero ? hero.offsetHeight - 110 : 0;
      setLight(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = !light && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-transparent"
          : "border-b border-ink/5 bg-paper/90 shadow-[0_1px_0_rgba(27,27,27,0.04)] backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Postchitect — back to top"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 bg-brown transition-transform duration-300 group-hover:rotate-45"
          />
          <span
            className={`text-[13px] font-bold tracking-[0.32em] transition-colors duration-500 ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            POSTCHITECT
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} dark={dark} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden items-center gap-2 rounded-full px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 lg:inline-flex ${
              dark
                ? "bg-paper text-ink hover:bg-brown hover:text-paper"
                : "bg-ink text-paper hover:bg-brown"
            }`}
          >
            Konsultasi Project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 flex flex-col bg-paper text-ink transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col overflow-y-auto px-6 pb-10 pt-24 sm:px-10"
        >
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[10px] tracking-[0.2em] text-brown">
                      0{i + 1}
                    </span>
                    <span className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {link.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-mist transition-colors duration-300 group-hover:text-brown"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-6">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-dark">
              Konsultasi Project
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mist"
            >
              WhatsApp — <span className="text-ink">{SITE.whatsapp.display}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
