import SkillBadge from "./SkillBadge";

export default function SkillCategory({ title, items }) {
  return (
    <div className="mb-14">

      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <SkillBadge
            key={item}
            skill={item}
          />
        ))}
      </div>

    </div>
  );
}