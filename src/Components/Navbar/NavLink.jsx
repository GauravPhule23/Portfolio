import { Link } from "react-scroll";

const links = [
  {
    name: "Portfolio",
    to: "portfolio",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Technologies",
    to: "skills",
  },
  {
    name: "Experience",
    to: "experience",
  },
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