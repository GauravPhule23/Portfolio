import NavLinks from "./NavLink";
import SocialIcons from "./SocialIcons";

export default function Navbar() {
  return (
    <header className="w-full mx-auto px-6 py-3 fixed
    top-0
    left-0
    right-0
    z-50
    bg-white
    border
    ">

      <nav className="flex items-center justify-between">

        {/* Logo */}

        <div>
          <h1 className="text-xl font-bold leading-5">
            Gaurav
            <br />
            Phule
          </h1>
        </div>

        <NavLinks />

        <SocialIcons />

      </nav>

    </header>
  );
}