import SkillCategory from "./SkillsCategory";
import CodeWindow from "./CodeWindow";
import skills from "./SkilsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-15"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[4px] text-gray-500">
            Tech Stack
          </p>

          <h2 className="text-5xl lg:text-7xl font-black mt-3">
            Technologies
            <br />

            <span className="text-transparent [-webkit-text-stroke:2px_black]">
              I Work With.
            </span>

          </h2>

          <p className="text-gray-600 mt-6 max-w-xl leading-8">

            I enjoy building scalable backend
            systems, responsive frontend
            applications, and modern SaaS products
            using the latest web technologies.

          </p>

          <div className="mt-16">

            {skills.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}

          </div>

        </div>

        {/* Right */}

        <CodeWindow />

      </div>
    </section>
  );
}