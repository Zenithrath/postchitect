import { useState } from "react";
import { WHATSAPP_URL } from "../constants/site";
import Reveal from "./Reveal";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "House planning focused on function, proportion, and buildability.",
    image: "/images/projects/project-11.jpeg",
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Interior spaces shaped around character, comfort, and daily use.",
    image: "/images/projects/project-10.jpeg",
  },
  {
    id: 3,
    title: "3D Visualization",
    description:
      "Clear visual studies that show the project before construction.",
    image: "/images/projects/project-01-optimized.jpg",
  },
  {
    id: 4,
    title: "Working Drawings",
    description:
      "Precise technical drawings prepared to guide construction work.",
    image: "/images/projects/project-06.jpeg",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].id);
  const activeService =
    services.find((service) => service.id === active) ?? services[0];

  return (
    <section id="services" className="bg-[#111315] text-[#F1EEE7]">
      <div className="container-x border-t border-[#F1EEE7]/12 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-12 items-start gap-x-3 sm:gap-x-6">
          <Reveal variant="left" className="col-span-7">
            <h2 className="text-[clamp(1.65rem,4.4vw,4.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.045em]">
              Areas of
              <br />
              <span className="text-[#DFA12A]">expertise</span>
            </h2>
          </Reveal>

          <Reveal
            variant="right"
            className="col-span-5"
            delay={100}
          >
            <p className="max-w-md text-[clamp(0.5rem,1.05vw,0.9rem)] uppercase leading-relaxed text-[#F1EEE7]/55">
              From early concepts to technical documentation, every stage is
              developed with clarity and purpose.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-12 items-stretch gap-x-3 sm:mt-14 sm:gap-x-6">
          <div className="col-span-7">
            <ul className="h-full border-t border-[#F1EEE7]/15">
              {services.map((service, index) => {
                const isActive = active === service.id;

                return (
                  <Reveal
                    as="li"
                    key={service.id}
                    variant="left"
                    delay={index * 70}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(service.id)}
                      aria-pressed={isActive}
                      className="group w-full border-b border-[#F1EEE7]/15 py-3 text-left transition-colors duration-300 hover:border-[#F1EEE7]/35 sm:py-5"
                    >
                      <span className="flex items-center gap-2 sm:gap-4">
                        <span
                          className={`flex-1 text-[clamp(0.78rem,2.2vw,2.15rem)] font-medium uppercase leading-none tracking-[-0.035em] transition-all duration-300 ${
                            isActive
                              ? "translate-x-1 text-[#F1EEE7] sm:translate-x-2"
                              : "text-[#F1EEE7]/65 group-hover:translate-x-1 group-hover:text-[#F1EEE7]"
                          }`}
                        >
                          {service.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`text-sm leading-none transition-all duration-300 sm:text-lg ${
                            isActive
                              ? "-translate-y-0.5 translate-x-0.5 text-[#DFA12A]"
                              : "text-[#F1EEE7]/35 group-hover:text-[#F1EEE7]"
                          }`}
                        >
                          ↗
                        </span>
                      </span>

                      {isActive && (
                        <span className="fade-in mt-3 block max-w-md pr-3 text-[clamp(0.56rem,1.05vw,0.8rem)] leading-relaxed text-[#F1EEE7]/50 sm:mt-4">
                          {service.description}
                        </span>
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal
            variant="right"
            className="col-span-5"
            delay={140}
          >
            <figure className="arch-corner-tr h-full min-h-[16rem] overflow-hidden sm:min-h-[24rem]">
              <img
                key={activeService.id}
                src={activeService.image}
                alt={`${activeService.title} project example`}
                loading="lazy"
                decoding="async"
                className="fade-in h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={100}>
          <aside
            aria-label="Design pricing and deliverables"
            className="mt-12 grid grid-cols-12 gap-x-4 border-y border-[#F1EEE7]/15 py-8 sm:mt-16 sm:gap-x-6 sm:py-10 lg:mt-20"
          >
            <div className="col-span-5">
              <p className="text-[clamp(0.56rem,0.9vw,0.72rem)] uppercase tracking-[0.12em] text-[#F1EEE7]/45">
                House design
                <br />
                starts from
              </p>
              <p className="mt-3 text-[clamp(2rem,5vw,5rem)] font-medium uppercase leading-none tracking-[-0.05em] text-[#DFA12A]">
                RP400K
              </p>
              <p className="mt-3 text-[clamp(0.52rem,0.85vw,0.68rem)] uppercase leading-relaxed tracking-[0.08em] text-[#F1EEE7]/40">
                Includes a complete working drawing package
              </p>
            </div>

            <div className="col-span-7">
              <p className="text-[clamp(0.62rem,1.05vw,0.85rem)] font-medium uppercase tracking-[0.06em]">
                Working drawings include
              </p>
              <ul className="mt-4 space-y-1.5 text-[clamp(0.56rem,0.95vw,0.78rem)] leading-relaxed text-[#F1EEE7]/55">
                <li>Floor plans.</li>
                <li>Longitudinal and cross sections.</li>
                <li>Front, rear, left, and right elevations.</li>
                <li>
                  Door and window frame, septic tank, bathroom, roof, and
                  foundation details.
                </li>
                <li>Electrical, sanitation, and foundation plan layouts.</li>
              </ul>
              <p className="mt-3 text-[clamp(0.56rem,0.95vw,0.76rem)] font-medium uppercase tracking-[0.08em] text-[#DFA12A]">
                Site plan optional.
              </p>

              <p className="mt-5 border-t border-[#F1EEE7]/12 pt-4 text-[clamp(0.56rem,0.95vw,0.78rem)] leading-relaxed text-[#F1EEE7]/55">
                Interior design and 3D visualization pricing is adjusted to the
                level of complexity. Please consult with us first via{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#F1EEE7] underline decoration-[#DFA12A]/70 underline-offset-4 transition-colors duration-300 hover:text-[#DFA12A]"
                >
                  WhatsApp ↗
                </a>
                .
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
