export default function FooterLinks() {
  const links = [
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-neutral-400 hover:text-white transition"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}