import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const contactData = [
  {
    title: "Email",
    value: "gaurav230605@gmail.com",
    href: "mailto:gaurav230605@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "GitHub",
    value: "github.com/GauravPhule23",
    href: "https://github.com/GauravPhule23",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/gaurav-phule",
    href: "https://linkedin.com/in/gaurav-phule",
    icon: FaLinkedin,
  },
  {
    title: "Location",
    value: "Pune, Maharashtra",
    href: "#",
    icon: FaLocationDot,
  },
];

export default contactData;