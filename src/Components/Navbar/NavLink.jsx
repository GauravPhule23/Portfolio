import { Link } from "react-scroll";

const links = [
  {
    name: "Portfolio",
    to: "portfolio",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Projects",
    to: "projects",
  }
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex gap-10">
      {links.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          smooth
          duration={600}
          offset={-80}
          className="cursor-pointer relative font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all"
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
}