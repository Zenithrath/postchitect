import { services } from "../data/services";
import Reveal from "./Reveal";

function ServiceRow({ service }) {
  return (
    <Reveal>
      <article className="group relative grid grid-cols-12 items-center gap-4 border-b border-ink/10 py-10 transition-colors duration-500 hover:bg-warmgray lg:py-14 xl:pr-72">
        <div className="absolute right-16 top-1/2 hidden h-44 w-64 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100 xl:block">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="col-span-2 text-xs font-medium tracking-[0.2em] text-mist transition-colors duration-300 group-hover:text-brown md:col-span-1">
          {service.number}
        </span>
        <h3 className="col-span-10 text-[clamp(1.6rem,3.2vw,2.9rem)] font-serif font-medium tracking-tight md:col-span-7">
          {service.title}
        </h3>
        <p className="col-span-10 col-start-3 text-sm leading-relaxed text-mist md:col-span-3 md:col-start-auto">
          {service.description}
        </p>
        <span
          aria-hidden="true"
          className="hidden justify-self-end text-2xl text-ink transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-brown md:col-span-1 md:block"
        >
          →
        </span>
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <Reveal>
          <p className="label">
            <span className="text-brown">03</span> — Services
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-serif font-medium leading-[1.02] tracking-tight">
            What We{" "}
            <span className="italic text-darkbrown">Do</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-ink/10">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
