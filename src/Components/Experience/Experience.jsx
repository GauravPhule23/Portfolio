import { useState } from "react";
import ExperienceTabs from "./ExperienceTabs";
import ExperienceCard from "./ExperienceCard";
import experience from "./experienceData";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("internship");

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-15"
    >
      {/* Heading */}

      <p className="uppercase tracking-[4px] text-neutral-500">
        Experience
      </p>

      <h2 className="text-5xl lg:text-7xl font-black mt-3">
        Professional
        <br />

        <span className="text-transparent [-webkit-text-stroke:2px_black]">
          Experience.
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
        Hands-on experience building real-world applications,
        collaborating with teams, and continuously improving my
        full-stack development skills.
      </p>

      {/* Tabs */}

      <div className="mt-14">
        <ExperienceTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Card */}

      <ExperienceCard
        experience={experience[activeTab]}
      />
    </section>
  );
}