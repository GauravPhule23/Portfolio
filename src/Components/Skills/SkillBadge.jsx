export default function SkillBadge({ skill }) {
  return (
    <span
      className="
        px-5
        py-2
        rounded-full
        border
        border-neutral-300
        bg-white
        text-sm
        font-medium
        transition-all
        duration-300
        hover:bg-black
        hover:text-white
        hover:border-black
        hover:-translate-y-1
        hover:shadow-lg
        cursor-default
      "
    >
      {skill}
    </span>
  );
}