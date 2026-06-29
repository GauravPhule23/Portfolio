export default function AboutCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 hover:shadow-lg transition">

      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>

      <ul className="space-y-5">

        {items.map((item) => (
          <li
            key={item}
            className="text-neutral-600 flex items-center gap-3"
          >
            <span className="text-lg">•</span>

            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}