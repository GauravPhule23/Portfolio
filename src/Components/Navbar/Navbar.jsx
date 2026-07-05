import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLink";
import SocialIcons from "./SocialIcons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-6 py-3 fixed top-0 left-0 right-0 z-50 bg-white/95 border-b backdrop-blur">
      <nav className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold leading-5">
            Gaurav
            <br />
            Phule
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <NavLinks />
          <SocialIcons />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden rounded-full p-2 text-gray-800"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg lg:hidden">
          <NavLinks mobile onClick={closeMenu} />
          <div className="mt-4">
            <SocialIcons mobile />
          </div>
        </div>
      )}
    </header>
  );
}