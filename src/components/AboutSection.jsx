import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#111315] text-[#F1EEE7]">
      <div className="container-x border-b border-[#F1EEE7]/12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-12 items-start gap-x-3 sm:gap-x-6">
          <Reveal
            variant="left"
            className="col-span-7 lg:col-span-8"
          >
            <h2 className="text-[clamp(1.2rem,6vw,4.25rem)] font-medium uppercase leading-[0.9] tracking-[-0.05em] sm:text-[clamp(1.75rem,4.6vw,4.25rem)]">
              Where plans
              <br />
              become places<span className="text-[#DFA12A]">.</span>
            </h2>
          </Reveal>

          <Reveal
            variant="right"
            className="col-span-5 lg:col-span-4"
            delay={100}
          >
            <p className="max-w-md text-[clamp(0.5rem,1.15vw,0.95rem)] uppercase leading-relaxed tracking-[0.01em] text-[#F1EEE7]/55">
              We translate ideas into architecture, interiors, 3D visuals, and
              precise working drawings ready for the next stage.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
