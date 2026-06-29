import StatCard from "./StatsCard";

const stats = [
  {
    number: "5",
    title: "Projects",
  },
  {
    number: "7",
    title: "Technologies Learned",
  },
  {
    number: "7+",
    title: "Daily Avg Coding Hours",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-15">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            number={item.number}
            title={item.title}
          />
        ))}

      </div>

    </section>
  );
}