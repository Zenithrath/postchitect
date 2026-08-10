import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal as="article" delay={(index % 3) * 90} className="group">
      <a
        href="#contact"
        aria-label={`${project.title} — ${project.category}, ${project.location}`}
        className="block"
      >
        <div
          className={`relative overflow-hidden bg-warmgray ${project.aspect}`}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}, ${project.location}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
          <span className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View Project
            <span aria-hidden="true">↗</span>
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-mist">
            {project.location}
          </p>
          <p className="whitespace-nowrap text-xs text-mist">
            {project.year}
          </p>
        </div>
        <h3 className="mt-2 text-xl font-serif font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5">
          {project.title}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mist">
          {project.category}
        </p>
      </a>
    </Reveal>
  );
}
