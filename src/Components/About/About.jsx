import AboutCard from "./AboutCard";

export default function About() {

  const services = [
    "Full Stack Web Development",
    "REST API Development",
    "Authentication & Authorization",
    "Responsive UI Development",
  ];

  const focus = [
    "Building MailSutra",
    "Building SpandanPass",
    "Preparing for Placements",
    "Practicing DSA",
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      <p className="uppercase tracking-[4px] text-neutral-500">
        About Me
      </p>

      <h2 className="text-5xl lg:text-7xl font-black mt-3">

        Building Products,

        <br />

        <span className="text-transparent [-webkit-text-stroke:2px_black]">

          Not Just Projects.

        </span>

      </h2>

      <p className="mt-8 text-lg leading-9 max-w-4xl text-neutral-600">

        I'm Gaurav Phule, a Full Stack MERN Developer
        passionate about creating scalable web applications,
        backend systems, and AI-powered solutions. I enjoy
        designing complete products—from database architecture
        and APIs to responsive user interfaces—with a focus on
        clean code, performance, and great user experience.

      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <AboutCard
          title="What I Do"
          items={services}
        />

        <AboutCard
          title="Current Focus"
          items={focus}
        />

      </div>

      <div className="flex gap-5 mt-14">

        <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
          Download Resume
        </button>

        <button className="px-8 py-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition">
          Contact Me
        </button>

      </div>

    </section>
  );
}