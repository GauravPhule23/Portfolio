import mailsutra from "../../assets/images/mailsutra.png";
import spandan from "../../assets/images/spandan.png";
import attendance from "../../assets/images/attendance.png";

const projects = [
  {
    id: 1,
    title: "MailSutra",
    description:
      "India-focused email marketing SaaS with domain verification, campaigns, analytics and SMTP integration.",
    image: mailsutra,
    tech: ["React", "Node", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "SpandanPass",
    description:
      "Digital pass management system with authentication, QR verification and admin dashboard.",
    image: spandan,
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Face Attendance",
    description:
      "AI powered attendance system using FaceMesh with multiple-angle registration.",
    image: attendance,
    tech: ["React", "MediaPipe", "Node"],
    github: "#",
    live: "#",
  },
];

export default projects;