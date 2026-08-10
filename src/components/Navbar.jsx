import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function NavLink({ label, href, active }) {
  return (
    <a
      href={href}
      className={`group relative py-1 text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 ${
        active
          ? "text-[#DFA12A]"
          : "text-[#F6F5F1]/75 hover:text-[#DFA12A]"
      }`}
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-[3px] h-px origin-left scale-x-0 bg-[#DFA12A] transition-transform duration-300 group-hover:scale-x-100"
      />
      {active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-[5px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#DFA12A]"
        />
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Subtle scrollspy — sets a muted gold dot on the current section link.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.slice(1))
    ).filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
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

  return (
    <header
      className={`nav-in fixed inset-x-0 top-0 z-50 bg-[#0b0f13]/70 shadow-lg shadow-black/25 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? "bg-[#0b0f13]/85" : ""
      }`}
    >
      <div className="relative mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo — left */}
        <a
          href="#home"
          className="group block"
          aria-label="Postchitect — back to top"
        >
          <span className="block text-[13px] font-semibold uppercase tracking-[0.3em] text-[#F6F5F1] transition-colors duration-300 group-hover:text-[#DFA12A]">
            Postchitect
          </span>
          <span className="mt-0.5 hidden text-[8px] uppercase tracking-[0.26em] text-[#AEB8C1] transition-colors duration-300 group-hover:text-[#DFA12A] sm:block">
            Drafter &amp; Modelling
          </span>
        </a>

        {/* Links — center */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={active === item.href}
            />
          ))}
        </nav>

        {/* CTA + mobile trigger — right */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border border-[#F6F5F1]/35 px-6 py-2.5 text-[12px] font-medium text-[#F6F5F1] transition-all duration-300 hover:border-[#DFA12A] hover:bg-[#DFA12A] hover:text-[#101C29] hover:shadow-[0_8px_24px_rgba(223,161,42,0.16)]"
          >
            Contact Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F6F5F1]/25 text-[#F6F5F1] transition-colors duration-300 hover:border-[#DFA12A] hover:text-[#DFA12A] md:hidden"
          >
            {open ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — fullscreen deep navy */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-10 flex flex-col bg-[#101C29] text-[#F6F5F1] transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="flex flex-1 flex-col justify-center px-8 pb-16 sm:px-12"
        >
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-baseline gap-4 border-b border-[#F6F5F1]/10 py-5 transition-all duration-500 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                  }}
                >
                  <span className="text-[10px] tracking-[0.2em] text-[#DFA12A]">
                    0{i + 1}
                  </span>
                  <span className="text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[#DFA12A]">
                    {item.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto text-[#AEB8C1] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#DFA12A]"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#F6F5F1] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#101C29] transition-all duration-500 hover:bg-[#DFA12A] hover:shadow-[0_8px_24px_rgba(223,161,42,0.16)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            Contact Me
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
