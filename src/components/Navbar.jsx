import { useEffect, useState } from "react";
import AnimatedContent from "./AnimatedContent";
import SpecularButton from "./SpecularButton";
import StarBorder from "./StarBorder";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
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
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — the active nav link follows the section currently in view.
  useEffect(() => {
    const ids = ["#home", ...NAV_ITEMS.map((item) => item.href)];

    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id.slice(1));
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
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

  useEffect(() => {
    const onHeroAnimationComplete = () => setHeroAnimationComplete(true);
    window.addEventListener(
      "postchitect:hero-animation-complete",
      onHeroAnimationComplete,
    );
    return () =>
      window.removeEventListener(
        "postchitect:hero-animation-complete",
        onHeroAnimationComplete,
      );
  }, []);

  return (
    <>
      <AnimatedContent
        distance={72}
        direction="vertical"
        reverse
        duration={0.75}
        ease="power3.out"
        initialOpacity={0}
        threshold={0}
        delay={0.82}
        data-animated="navbar"
        className="fixed inset-x-0 top-0 z-50"
      >
        <header
          className={`relative bg-[#0b0f13]/70 shadow-lg shadow-black/25 backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "bg-[#0b0f13]/85" : ""
          }`}
        >
          <div className="container-x relative flex h-16 items-center justify-between">
        {/* Logo — left */}
        <a
          href="#home"
          className="group block"
          aria-label="Postchitect — back to top"
        >
          <span className="block">
            <span className="block text-[13px] font-semibold uppercase tracking-[0.3em] text-[#F6F5F1] transition-colors duration-300 group-hover:text-[#DFA12A]">
              Postchitect
            </span>
            <span className="mt-0.5 hidden text-[8px] uppercase tracking-[0.26em] text-[#AEB8C1] transition-colors duration-300 group-hover:text-[#DFA12A] sm:block">
              Drafter &amp; Modelling
            </span>
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
          <div className="hidden sm:block">
            <StarBorder
              as="div"
              color="#DFA12A"
              speed="5s"
              thickness={1}
              className="navbar-contact-star-border"
            >
              <SpecularButton
                size="sm"
                radius={999}
                tint="#0b0f13"
                tintOpacity={0.3}
                blur={10}
                textColor="#F6F5F1"
                lineColor="#DFA12A"
                baseColor="#756B59"
                intensity={1.2}
                shineSize={14}
                shineFade={45}
                thickness={1}
                speed={0.28}
                followMouse
                proximity={220}
                autoAnimate={false}
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.hash = "contact";
                  }
                }}
              >
                Contact Me
              </SpecularButton>
            </StarBorder>
          </div>
          <StarBorder
            as="button"
            type="button"
            color="#DFA12A"
            speed="5s"
            thickness={1}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="nav-menu-star-border"
          >
            {open ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </StarBorder>
        </div>
          </div>
          <span
            aria-hidden="true"
            className={`nav-scan-line ${
              heroAnimationComplete ? "nav-scan-line--active" : ""
            }`}
          />
        </header>
      </AnimatedContent>

      {/* Mobile menu — fullscreen deep navy */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-[#111315] text-[#F6F5F1] transition-all duration-500 md:hidden ${
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
                  className={`group flex items-center border-b border-[#F6F5F1]/10 py-6 transition-all duration-500 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                  }}
                >
                  <span className="text-[clamp(2rem,10vw,3rem)] font-medium uppercase leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#DFA12A]">
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
            className={`group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#F6F5F1] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111315] transition-all duration-500 hover:bg-[#DFA12A] hover:shadow-[0_8px_24px_rgba(223,161,42,0.16)] ${
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
    </>
  );
}
