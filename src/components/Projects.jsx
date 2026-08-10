import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-warmgray py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <p className="label">
                <span className="text-brown">02</span> — Selected Work
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-serif font-medium leading-[1.02] tracking-tight">
                Recent{" "}
                <span className="italic text-darkbrown">Projects</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:border-brown hover:text-brown"
            >
              View All Projects
              <span
                aria-hidden="true"
                className="text-brown transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
