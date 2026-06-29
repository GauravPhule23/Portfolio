import { FiArrowUpRight } from "react-icons/fi";

export default function ContactCard({ item }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="group border border-neutral-200 rounded-3xl p-6 bg-white hover:border-black hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-center">

        <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center">

          <Icon className="text-2xl"/>

        </div>

        <FiArrowUpRight
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          size={20}
        />

      </div>

      <h3 className="mt-6 font-bold text-xl">
        {item.title}
      </h3>

      <p className="text-neutral-500 mt-2 break-all">
        {item.value}
      </p>

    </a>
  );
}