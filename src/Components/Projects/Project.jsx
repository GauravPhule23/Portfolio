import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-15"
    >
      <div className="mb-17">

        <p className="text-gray-500 uppercase tracking-widest">
          Portfolio
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-extrabold
          text-transparent
          [-webkit-text-stroke:2px_black]"
        >
          Featured Projects
        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>
    </section>
  );
}