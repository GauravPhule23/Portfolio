import heroImg from "../../assets/images/Pic1.png";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function HeroRight() {
  return (
    <div className="relative bg-[#EEF4B4] flex items-center justify-center w-[40%]">

      {/* Social Icons */}
      

      {/* Image */}

      <img
        src={heroImg}
        alt="Gaurav"
        className="w-[100%] object-contain"
      />

    </div>
  );
}