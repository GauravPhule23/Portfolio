import { Link } from "react-scroll";

const links = [
  {
    name: "Hero-Section",
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
  {
    name: "Contact",
    to: "contact",
  },
];

export default function NavLinks({ mobile = false, onClick = () => {} }) {
  return (
    <ul className={mobile ? "flex flex-col gap-3" : "hidden md:flex gap-10 items-center"}>
      {links.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          smooth
          duration={600}
          offset={-80}
          onClick={onClick}
          className={`cursor-pointer relative font-medium ${mobile ? "text-gray-700 hover:text-black" : "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all"}`}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
}