import { heroImages } from "../data/heroImages";
import AnimatedContent from "./AnimatedContent";

function announceHeroAnimationComplete() {
  window.dispatchEvent(new Event("postchitect:hero-animation-complete"));
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] flex-col justify-center overflow-hidden bg-[#111315] pb-3 pt-20 text-[#c9c9c6] sm:pb-5 sm:pt-24 lg:pb-8 lg:pt-28"
    >
      {/* Full-bleed oversized wordmark */}
      <AnimatedContent
        distance={120}
        direction="vertical"
        duration={0.85}
        ease="power3.out"
        initialOpacity={1}
        threshold={0}
        delay={0.28}
        data-animated="wordmark"
        className="relative z-0 w-full"
      >
        <div
          aria-hidden="true"
          className="w-full select-none overflow-hidden whitespace-nowrap text-center font-sans text-[clamp(3.2rem,14.2vw,11rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-[#bdbdb8]"
        >
          postchitect
        </div>
      </AnimatedContent>

      <div className="relative z-10 -mt-[clamp(0.4rem,1.75vw,1.75rem)] grid min-w-0 w-full grid-cols-2 items-end gap-2 px-4 sm:grid-cols-4 sm:gap-3 sm:px-6 lg:gap-4 lg:px-10">
        {heroImages.map((image, index) => (
          <AnimatedContent
            key={image.id}
            distance="100vw"
            direction="horizontal"
            reverse={index < 2}
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
            className="min-w-0"
          >
            <figure className="group relative h-[clamp(9.5rem,32svh,14rem)] min-w-0 overflow-hidden bg-[#1e2225] sm:h-[clamp(17rem,33vw,22rem)]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                style={{ objectPosition: image.objectPosition }}
                loading="eager"
                decoding="async"
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
    </section>
  );
}
