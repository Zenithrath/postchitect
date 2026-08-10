import { processSteps } from "../data/process";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-warmgray py-24 lg:py-36">
      <div className="container-x">
        <Reveal>
          <p className="label">
            <span className="text-brown">04</span> — Process
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-serif font-medium leading-[1.02] tracking-tight">
            How We{" "}
            <span className="italic text-darkbrown">Work</span>
          </h2>
        </Reveal>

        {/* Desktop: horizontal steps */}
        <Reveal delay={120}>
          <ol className="mt-16 hidden gap-8 border-t border-ink/10 lg:grid lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="group relative pt-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-10 bg-brown transition-all duration-500 group-hover:w-full"
                />
                <span className="block text-5xl font-serif font-medium tracking-tight text-stone transition-colors duration-300 group-hover:text-brown">
                  {step.number}
                </span>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.22em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Mobile: vertical timeline */}
        <ol className="mt-14 space-y-12 border-l border-ink/10 lg:hidden">
          {processSteps.map((step) => (
            <li key={step.number} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-brown"
              />
              <span className="block text-4xl font-serif font-medium tracking-tight text-stone">
                {step.number}
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.22em]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
