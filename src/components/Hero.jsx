import { heroImages } from "../data/heroImages";
import { Crosshair, DimLine, GridPattern } from "./technical/TechDecor";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-coal text-paper"
    >
      <GridPattern id="hero-grid" className="text-paper opacity-[0.04]" />

      <Crosshair
        label="01/04"
        className="left-6 top-24 text-paper/50 lg:left-10 lg:top-28"
      />
      <Crosshair
        label="Scale 1:100"
        className="right-6 top-24 text-paper/40 lg:right-10 lg:top-28"
      />

      {/* Oversized background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[2%] z-0 select-none"
      >
        <p className="whitespace-nowrap text-center font-sans text-[clamp(3.2rem,13.5vw,15rem)] font-bold leading-[0.78] tracking-[-0.02em] text-[rgba(248,246,243,0.055)]">
          POSTCHITECT
        </p>
      </div>

      <DimLine
        label="12.00 m"
        className="bottom-28 right-10 z-0 hidden text-paper/30 lg:block"
      />

      <div className="container-x relative z-20 flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        <div className="hero-anim" style={{ "--d": "0.05s" }}>
          <p className="label text-mist">Architecture &amp; Drafting Studio</p>
        </div>

        <h1 className="mt-8 max-w-5xl font-sans text-[clamp(2.75rem,7.4vw,7.5rem)] font-semibold leading-[0.96] tracking-[-0.02em]">
          <span className="hero-anim block" style={{ "--d": "0.15s" }}>
            From Concept
          </span>
          <span
            className="hero-anim block font-serif font-medium italic tracking-normal"
            style={{ "--d": "0.3s" }}
          >
            to Construction.
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
          <p
            className="hero-anim max-w-md text-sm leading-relaxed text-stone lg:text-[15px]"
            style={{ "--d": "0.45s" }}
          >
            Postchitect membantu mewujudkan ide menjadi desain arsitektur yang
            matang melalui perencanaan, visualisasi 3D, interior dan gambar
            kerja yang detail.
          </p>
          <div
            className="hero-anim flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ "--d": "0.6s" }}
          >
            <a href="#contact" className="btn btn-light group">
              Konsultasikan Project
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-stone transition-colors duration-300 hover:text-paper"
            >
              Lihat Portfolio
              <span
                aria-hidden="true"
                className="text-brown transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Editorial image strip overlapping the background wordmark */}
        <div className="relative z-10 mt-10 lg:mt-14">
          <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:-mx-8 sm:px-8 lg:mx-0 lg:gap-6 lg:overflow-visible lg:px-0 lg:[mask-image:none]">
            {heroImages.map((img, i) => (
              <div
                key={img.id}
                className={`relative shrink-0 snap-center ${img.className}`}
              >
                <figure
                  className="hero-img-anim relative h-full w-full overflow-hidden bg-chocolate"
                  style={{ "--d": `${0.55 + i * 0.14}s` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <figcaption className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.24em] text-paper/70">
                    {img.caption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-mist">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-stone/20">
          <span className="scroll-dot absolute left-0 top-0 h-3 w-px bg-brown" />
        </span>
      </div>
    </section>
  );
}
