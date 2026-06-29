import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-8">

          <a href={project.github}>
            <FaGithub
              size={24}
              className="hover:scale-110 transition"
            />
          </a>

          <a href={project.live}>
            <FiExternalLink
              size={24}
              className="hover:scale-110 transition"
            />
          </a>

        </div>

      </div>
    </div>
  );
}