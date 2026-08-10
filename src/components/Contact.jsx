import { SITE, WHATSAPP_URL } from "../constants/site";
import { Crosshair, DimLine, GridPattern } from "./technical/TechDecor";
import Reveal from "./Reveal";

const contacts = [
  {
    label: "WhatsApp",
    value: SITE.whatsapp.display,
    href: WHATSAPP_URL,
    external: true,
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    label: "Instagram",
    value: SITE.instagram.handle,
    href: SITE.instagram.url,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-coal py-24 text-paper lg:py-40"
    >
      <GridPattern id="contact-grid" className="text-paper opacity-[0.05]" />
      <Crosshair
        label="C-01"
        className="left-6 top-24 text-paper/40 lg:left-10 lg:top-28"
      />
      <Crosshair
        label="SITE JKT-26"
        className="right-6 top-24 text-paper/40 lg:right-10 lg:top-28"
      />
      <DimLine
        label="8.40 m"
        className="bottom-16 right-8 hidden text-paper/30 lg:block"
      />

      <div className="container-x relative">
        <Reveal>
          <p className="label text-brown">
            <span className="text-brown">05</span> — Contact
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-4xl font-serif text-[clamp(2.75rem,6vw,6.5rem)] font-medium leading-[1.04] tracking-tight">
            Have a project{" "}
            <span className="italic text-darkbrown">in mind?</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 flex items-center gap-4 font-serif text-[clamp(1.6rem,3.2vw,2.8rem)] italic text-brown">
            Let&apos;s build it.
            <span aria-hidden="true" className="mb-2 h-px w-16 bg-brown/50" />
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <Reveal delay={180} className="lg:col-span-6">
            <p className="max-w-md text-sm leading-relaxed text-stone lg:text-[15px]">
              Ceritakan kebutuhan project Anda. Postchitect siap membantu mulai
              dari desain rumah, interior, visualisasi 3D hingga gambar kerja.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light group mt-10 px-9 py-5 text-xs"
            >
              Chat via WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delay={220} className="lg:col-span-6">
            <div className="border-t border-paper/15">
              <div className="py-5">
                <p className="text-[13px] font-bold tracking-[0.32em]">
                  {SITE.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-mist">
                  {SITE.tagline}
                </p>
              </div>
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline justify-between border-t border-paper/15 py-5"
                >
                  <span className="text-[11px] uppercase tracking-[0.24em] text-mist">
                    {contact.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-paper transition-colors duration-300 group-hover:text-brown">
                    {contact.value}
                    <span
                      aria-hidden="true"
                      className="text-[10px] text-brown opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
