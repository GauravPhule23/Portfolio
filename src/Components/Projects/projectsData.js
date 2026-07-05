import mailsutra from "../../assets/images/mailsutra.png";
import spandan from "../../assets/images/spandan.png";
import attendance from "../../assets/images/attendance.png";

const projects = [
  {
    id: 1,
    title: "MailSutra",
    description:
      "A B2B email marketing platform featuring asynchronous campaign processing with Redis & BullMQ, secure SMTP credential encryption, and real-time delivery analytics built for scalable email infrastructure.",
    image: mailsutra,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Tailwind CSS",
    ],
    github: "https://github.com/GauravPhule23",
    live: "mailto:gaurav230605@gmail.com",
  },

  {
    id: 2,
    title: "SpandanPass",
    description:
      "A high-performance event ticketing platform with secure seat reservations, distributed locking, Redis-powered inventory caching, and escrow-based payment workflows for reliable booking management.",
    image: spandan,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "TypeScript",
      "Razorpay",
    ],
    github: "https://github.com/GauravPhule23",
    live: "https://linkedin.com/in/gaurav-phule",
  },

  {
    id: 3,
    title: "Biometric Face Attendance",
    description:
      "An AI-powered attendance system that captures multi-angle facial registration, validates image quality, and performs real-time face recognition using MediaPipe, CompreFace, and a self-hosted biometric pipeline.",
    image: attendance,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MediaPipe",
      "CompreFace",
      "Docker",
      "TypeScript",
    ],
    github: "https://github.com/GauravPhule23",
    live: "mailto:gaurav230605@gmail.com",
  },
];

export default projects;