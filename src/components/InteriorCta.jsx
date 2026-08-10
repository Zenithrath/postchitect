import { WHATSAPP_URL } from "../constants/site";
import Reveal from "./Reveal";

export default function InteriorCta() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="label">
              <span className="text-brown">03</span> — Interior &amp; 3D
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 text-[clamp(2rem,4.6vw,4.25rem)] font-serif font-medium leading-[1.12] tracking-tight">
              Setiap ruang memiliki tingkat{" "}
              <span className="italic text-darkbrown">kompleksitas</span> yang
              berbeda.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-20">
          <Reveal delay={140}>
            <p className="text-sm leading-relaxed text-mist md:text-[15px]">
              Biaya desain interior dan visualisasi 3D disesuaikan dengan
              kebutuhan serta tingkat kesulitan project.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist md:text-[15px]">
              Diskusikan kebutuhan project terlebih dahulu bersama Postchitect
              melalui WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark group mt-10"
            >
              Konsultasi via WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
