import NavLinks from "./NavLink";
import SocialIcons from "./SocialIcons";

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-3">

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