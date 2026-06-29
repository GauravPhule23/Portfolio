import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 text-2xl">

      <a
        href="https://github.com/GauravPhule23"
        target="_blank"
        rel="noreferrer"
        className="hover:text-lime-300 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-lime-300 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:gaurav230605@gmail.com"
        className="hover:text-lime-300 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}