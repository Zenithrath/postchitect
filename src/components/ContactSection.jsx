import { SITE, WHATSAPP_URL } from "../constants/site";
import Reveal from "./Reveal";
import StarBorder from "./StarBorder";

const contactLinks = [
  {
    label: `WhatsApp ${SITE.whatsapp.display}`,
    href: WHATSAPP_URL,
    external: true,
  },
  { label: "Email", href: `mailto:${SITE.email}`, external: false },
  {
    label: `Instagram ${SITE.instagram.handle}`,
    href: SITE.instagram.url,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#111315] text-[#F1EEE7]">
      <div className="container-x border-t border-[#F1EEE7]/12 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-12 items-end gap-x-3 sm:gap-x-6">
          <Reveal variant="left" className="col-span-7">
            <h2 className="text-[clamp(1.65rem,4.8vw,5rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em]">
              Let's build
              <br />
              it clearly<span className="text-[#DFA12A]">.</span>
            </h2>
          </Reveal>

          <Reveal
            variant="right"
            className="col-span-5"
            delay={100}
          >
            <p className="max-w-sm text-[clamp(0.62rem,1.1vw,0.95rem)] leading-relaxed text-[#F1EEE7]/55">
              Tell us what you want to build. We will help define the clearest
              next step.
            </p>
            <StarBorder
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              color="#DFA12A"
              speed="5s"
              thickness={1}
              className="contact-star-border group mt-5 sm:mt-7"
            >
              Start on WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </StarBorder>
          </Reveal>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#F1EEE7]/12 pt-5 sm:mt-16 sm:gap-x-10 sm:pt-6">
            {contactLinks.map((link, index) => (
              <Reveal
                as="li"
                key={link.label}
                delay={140 + index * 70}
              >
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#F1EEE7]/50 transition-colors duration-300 hover:text-[#DFA12A] sm:text-[11px]"
                >
                  {link.label}
                  {link.external && (
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  )}
                </a>
              </Reveal>
            ))}
          </ul>
      </div>
    </section>
  );
}
