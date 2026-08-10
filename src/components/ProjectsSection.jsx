import { useState } from "react";
import Reveal from "./Reveal";
import StarBorder from "./StarBorder";

const projectSets = [
  {
    id: "3d-visual",
    label: "3D Visual",
    title: "Modern Residence",
    type: "3D Visualization",
    images: [
      {
        src: "/images/projects/project-01-optimized.jpg",
        alt: "Warm modern living room visualization",
      },
      {
        src: "/images/projects/project-11.jpeg",
        alt: "Modern residence exterior visualization",
      },
      {
        src: "/images/projects/project-10.jpeg",
        alt: "Bright interior courtyard visualization",
      },
      {
        src: "/images/projects/project-12.jpeg",
        alt: "Warm compact kitchen visualization",
      },
    ],
  },
  {
    id: "sections",
    label: "Sections",
    title: "Building Section",
    type: "Section Drawings",
    images: [
      {
        src: "/images/projects/project-07.jpeg",
        alt: "Two-storey building section drawing",
      },
      {
        src: "/images/projects/project-03.jpeg",
        alt: "Residential building section drawing",
      },
      {
        src: "/images/projects/project-04.jpeg",
        alt: "Bathroom section and plan drawing",
      },
      {
        src: "/images/projects/project-06.jpeg",
        alt: "Roof construction section details",
      },
    ],
  },
  {
    id: "details",
    label: "Details",
    title: "Construction Details",
    type: "Working Drawings",
    images: [
      {
        src: "/images/projects/project-05.jpeg",
        alt: "Foundation construction detail drawing",
      },
      {
        src: "/images/projects/project-06.jpeg",
        alt: "Roof connection detail drawing",
      },
      {
        src: "/images/projects/project-04.jpeg",
        alt: "Bathroom construction detail drawing",
      },
      {
        src: "/images/projects/project-03.jpeg",
        alt: "Residential structural detail drawing",
      },
    ],
  },
];

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState(projectSets[0].id);
  const activeProject =
    projectSets.find((project) => project.id === activeId) ?? projectSets[0];

  return (
    <section id="projects" className="bg-[#111315] text-[#F1EEE7]">
      <div className="container-x py-10 sm:py-14 lg:py-16">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-3 gap-y-5 sm:gap-x-6 sm:gap-y-6">
            <h2 className="col-span-12 text-[clamp(1.75rem,2.8vw,2.75rem)] font-medium uppercase leading-none tracking-[-0.04em]">
              Featured Project
            </h2>

            <p className="col-span-5 max-w-sm text-[clamp(0.5rem,0.9vw,0.75rem)] uppercase leading-relaxed tracking-[0.02em] text-[#F1EEE7]/55">
              Our architectural studies turn ideas into clear, buildable
              design solutions.
            </p>

            <div
              className="col-span-7 flex min-w-0 flex-wrap items-center justify-end gap-1 sm:gap-2"
              role="tablist"
              aria-label="Project categories"
            >
              {projectSets.map((project) => {
                const isActive = project.id === activeProject.id;

                return (
                  <StarBorder
                    as="button"
                    key={project.id}
                    id={`project-tab-${project.id}`}
                    type="button"
                    color="#DFA12A"
                    speed="6s"
                    thickness={1}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="featured-project-panel"
                    onClick={() => setActiveId(project.id)}
                    className={`project-filter-star-border ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    {project.label}
                  </StarBorder>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div
            id="featured-project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${activeProject.id}`}
            className="mt-6 grid h-[clamp(17rem,76vw,20rem)] grid-cols-12 gap-1.5 sm:mt-8 sm:h-[clamp(22rem,52svh,32rem)] sm:gap-3"
          >
            <div className="col-span-6 grid h-full min-h-0 grid-rows-2 gap-1.5 sm:gap-3">
              <figure className="project-reveal-item group h-full min-h-0 overflow-hidden">
                <img
                  src={activeProject.images[0].src}
                  alt={activeProject.images[0].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
              </figure>

              <figure className="project-reveal-item group relative h-full min-h-0 overflow-hidden rounded-bl-[clamp(3rem,10vw,9rem)]">
                <img
                  src={activeProject.images[1].src}
                  alt={activeProject.images[1].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#071116]/65"
                />
                <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center sm:px-6">
                  <p className="text-[clamp(0.78rem,2.4vw,2.5rem)] font-medium uppercase leading-none tracking-[-0.03em]">
                    {activeProject.title}
                  </p>
                  <p className="mt-2 text-[7px] uppercase tracking-[0.08em] text-[#F1EEE7]/70 sm:mt-3 sm:text-[11px] sm:tracking-[0.12em]">
                    {activeProject.type} <span aria-hidden="true">↗</span>
                  </p>
                </figcaption>
              </figure>
            </div>

            <figure className="project-reveal-item group col-span-3 h-full min-h-0 overflow-hidden">
              <img
                src={activeProject.images[2].src}
                alt={activeProject.images[2].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </figure>

            <figure className="project-reveal-item group col-span-3 h-full min-h-0 overflow-hidden rounded-tr-[clamp(2rem,12vw,12rem)]">
              <img
                src={activeProject.images[3].src}
                alt={activeProject.images[3].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
