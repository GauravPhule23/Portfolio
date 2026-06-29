export default function StatCard({ number, title }) {
  return (
    <div className="flex flex-col items-center justify-center">

      <h2
        className="
        text-5xl
        md:text-6xl
        font-extrabold
        text-transparent
        [-webkit-text-stroke:2px_black]"
      >
        {number}
      </h2>

      <p className="mt-4 text-lg font-semibold text-center">
        {title}
      </p>

    </div>
  );
}