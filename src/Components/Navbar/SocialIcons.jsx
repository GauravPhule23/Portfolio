import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="hidden md:flex items-center gap-5 text-lg">

      <a href="#">
        <FaGithub className="hover:scale-110 transition" />
      </a>

      <a href="#">
        <FaLinkedin className="hover:scale-110 transition" />
      </a>

      <a href="#">
        <FaInstagram className="hover:scale-110 transition" />
      </a>

    </div>
  );
}