import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function SocialIcons({ mobile = false }) {
  return (
    <div className={mobile ? "flex items-center gap-4 text-lg" : "hidden md:flex items-center gap-5 text-lg"}>
      <a
        href="https://github.com/GauravPhule23"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="hover:scale-110 transition" />
      </a>

      <a
        href="https://www.linkedin.com/in/gaurav-phule-768394248"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="hover:scale-110 transition" />
      </a>
    </div>
  );
}