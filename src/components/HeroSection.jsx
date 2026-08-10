import { heroImages } from "../data/heroImages";
import AnimatedContent from "./AnimatedContent";

function announceHeroAnimationComplete() {
  window.dispatchEvent(new Event("postchitect:hero-animation-complete"));
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] flex-col justify-center overflow-hidden bg-[#111315] pb-12 pt-20 text-[#c9c9c6] sm:min-h-[34rem] sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-28"
    >
      {/* Full-bleed oversized wordmark */}
      <AnimatedContent
        as="h1"
        distance={120}
        direction="vertical"
        duration={0.85}
        ease="power3.out"
        initialOpacity={1}
        threshold={0}
        delay={0.28}
        data-animated="wordmark"
        className="relative z-20 w-full shrink-0 sm:z-0"
      >
        <span className="container-x flex w-full -translate-y-3 select-none flex-col overflow-hidden font-sans text-[clamp(4.5rem,min(26vw,14svh),8.75rem)] font-extrabold tracking-[-0.075em] sm:hidden">
          <span className="block self-start leading-[0.64] text-[#D5D5D1]">
            post
          </span>
          <span className="block self-end leading-[0.64] text-[#969B99]">
            chitect
          </span>
        </span>
        <span className="hidden w-full select-none overflow-hidden whitespace-nowrap text-center font-sans font-semibold leading-[0.82] tracking-[-0.09em] text-[#d0d0cc] sm:block sm:text-[clamp(5rem,14.2vw,11rem)]">
          postchitect
        </span>
      </AnimatedContent>

      <div className="relative z-10 mt-3 grid min-w-0 w-full grid-cols-2 items-end gap-1.5 px-5 sm:-mt-[clamp(0.45rem,1.75vw,1.75rem)] sm:grid-cols-4 sm:gap-3 sm:px-8 lg:gap-4 lg:px-12">
        {heroImages.map((image, index) => (
          <AnimatedContent
            key={image.id}
            distance="100vw"
            direction="horizontal"
            reverse={index % 2 === 0}
            duration={1}
            ease="power3.out"
            animateOpacity={false}
            scale={0.985}
            threshold={0}
            delay={1.08}
            onComplete={
              index === heroImages.length - 1
                ? announceHeroAnimationComplete
                : undefined
            }
            data-animated={`panel-${index + 1}`}
            className="min-w-0 overflow-hidden"
          >
            <figure
              className={`hero-mobile-panel group relative min-w-0 overflow-hidden bg-[#1e2225] ${
                index === 0
                  ? "rounded-tl-[clamp(2.5rem,12vw,5rem)] sm:rounded-none"
                  : index === heroImages.length - 1
                    ? "rounded-br-[clamp(2.5rem,12vw,5rem)] sm:rounded-none"
                    : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                style={{ objectPosition: image.objectPosition }}
                loading="eager"
                decoding="async"
                fetchPriority={index === 0 ? "high" : undefined}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#0b1117]/[0.08] transition-colors duration-500 group-hover:bg-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-[#DFA12A] opacity-0 shadow-[0_-12px_28px_rgba(0,0,0,0.45)] transition-opacity duration-300 group-hover:opacity-100">
                <span>{image.caption}</span>
              </figcaption>
            </figure>
          </AnimatedContent>
        ))}
      </div>

      <div className="container-x pointer-events-none absolute inset-x-0 bottom-5 z-20 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[8px] uppercase tracking-[0.16em] text-[#F1EEE7]/40 sm:bottom-6 sm:flex-nowrap sm:text-[9px] sm:tracking-[0.2em]">
        <p>
          <span className="sm:hidden">Architecture / Interior / Drawings</span>
          <span className="hidden sm:inline">
            Architecture / Interior / 3D / Working Drawings
          </span>
        </p>
        <p>Scroll to explore ↓</p>
      </div>
    </section>
  );
}
