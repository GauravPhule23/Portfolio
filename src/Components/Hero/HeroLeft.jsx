import { FiArrowRight } from "react-icons/fi";

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-center px-10 lg:px-16 py-16 w-[60%]">

      <p className="text-2xl md:text-4xl font-bold">
        Hi! I'm
      </p>

      {/* Outline Name */}
      <h1
        className="
        text-6xl lg:text-8xl
        font-extrabold
        text-transparent
        [-webkit-text-stroke:2px_black]
        leading-none
        mt-2"
      >
        Gaurav Phule
      </h1>

      <p className="text-gray-500 mt-8 max-w-md leading-8">
        Full Stack MERN Developer passionate about building scalable web
        applications, intuitive user experiences, and modern SaaS products.
      </p>

      <button
        className="
        mt-10
        w-fit
        border-2
        border-black
        px-7
        py-3
        rounded-full
        flex
        items-center
        gap-2
        font-semibold
        hover:bg-black
        hover:text-white
        transition-all"
      >
        Hire Me
        <FiArrowRight />
      </button>

    </div>
  );
}