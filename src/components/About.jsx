import { capabilities, tools } from "../data/about";
import { Crosshair } from "./technical/TechDecor";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-24 lg:py-36"
    >
      <Crosshair
        label="A-05"
        className="right-8 top-24 hidden text-ink/25 lg:block"
      />

      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">
                <span className="text-brown">01</span> — About Postchitect
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <figure className="relative">
                <img
                  src="/images/about/about-01.jpg"
                  alt="Postchitect project — house design document"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
                  <span className="h-px w-6 bg-brown" />
                  Selected work — document
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-24">
            <Reveal delay={80}>
              <h2 className="text-[clamp(2rem,4.6vw,4.25rem)] font-serif font-medium leading-[1.12] tracking-tight">
                Kami percaya desain yang baik dimulai dari{" "}
                <span className="italic text-darkbrown">
                  perencanaan yang tepat.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
                <p className="text-sm leading-relaxed text-mist md:text-[15px]">
                  Postchitect merupakan jasa desain dan drafting bangunan yang
                  menangani perencanaan rumah, interior, visualisasi 3D hingga
                  gambar kerja.
                </p>
                <p className="text-sm leading-relaxed text-mist md:text-[15px]">
                  Setiap desain dibuat dengan mempertimbangkan fungsi, estetika,
                  kebutuhan pengguna dan kemudahan proses pembangunan.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((cap) => (
                  <li
                    key={cap.number}
                    className="group bg-paper p-6 transition-colors duration-300 hover:bg-warmgray"
                  >
                    <span className="text-[10px] tracking-[0.2em] text-brown">
                      {cap.number}
                    </span>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]">
                      {cap.title}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-20 grid gap-10 border-t border-ink/10 pt-10 lg:grid-cols-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-mist lg:col-span-4">
              Tools we work with
            </p>
            <ul className="lg:col-span-8">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex items-baseline justify-between border-b border-ink/10 py-4"
                >
                  <span className="text-sm font-medium uppercase tracking-[0.18em] transition-transform duration-300 group-hover:translate-x-1">
                    {tool.name}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-mist">
                    {tool.code}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
