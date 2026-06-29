export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-8">

      {/* Header */}

      <div className="flex justify-between items-start flex-wrap gap-4">

        <div>

          <h3 className="text-3xl font-bold">
            {experience.company}
          </h3>

          <p className="text-lg text-neutral-600 mt-1">
            {experience.role}
          </p>

        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium
          ${
            experience.status === "Ongoing"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {experience.status}
        </span>

      </div>

      {/* Duration */}

      <div className="mt-6">

        <p className="font-medium">
          {experience.duration}
        </p>

        {experience.note && (
          <p className="text-neutral-500 mt-2">
            {experience.note}
          </p>
        )}

      </div>

      {/* Description */}

      <ul className="mt-8 space-y-4">

        {experience.points.map((point, index) => (
          <li
            key={index}
            className="flex gap-3 text-neutral-600 leading-7"
          >
            <span>•</span>

            <span>{point}</span>
          </li>
        ))}

      </ul>

    </div>
  );
}