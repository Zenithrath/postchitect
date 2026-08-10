import { pricing } from "../data/pricing";
import { Crosshair, GridPattern } from "./technical/TechDecor";
import Reveal from "./Reveal";

export default function PricingHighlight() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <GridPattern id="pricing-grid" className="text-paper opacity-[0.05]" />
      <Crosshair
        label="E-01"
        className="left-6 top-24 text-paper/40 lg:left-10"
      />

      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <p className="label text-brown">Architectural Design</p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-mist">
              Mulai dari
            </p>
            <p className="mt-2 font-sans text-[clamp(4rem,10vw,9rem)] font-bold leading-none tracking-tight">
              Rp400K
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-stone">
              {pricing.description}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <a href="#contact" className="btn btn-light group">
              Konsultasikan Project
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3 lg:gap-16">
          {pricing.columns.map((column) => (
            <div key={column.title} className="border-t border-paper/15 pt-6">
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-brown">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-stone"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 bg-brown"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-paper/10 pt-6 text-xs italic text-mist">
          {pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}
