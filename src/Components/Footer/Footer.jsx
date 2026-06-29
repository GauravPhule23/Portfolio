import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-32">

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* CTA */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-neutral-400">
            Let's Connect
          </p>

          <h2 className="text-5xl lg:text-7xl font-black mt-5 leading-tight">
            Let's Build
            <br />
            Something Amazing.
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-neutral-400 leading-8">
            Whether it's a project, internship opportunity,
            or just a conversation about technology,
            my inbox is always open.
          </p>

          <a
            href="mailto:gaurav230605@gmail.com"
            className="inline-flex items-center gap-3 mt-12 bg-lime-300 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Get In Touch

            <FiArrowUpRight />
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-neutral-800 my-20" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-black">
              Gaurav Phule.
            </h2>

            <p className="text-neutral-400 mt-2">
              Full Stack Developer
            </p>

          </div>

          <FooterLinks />

          <SocialLinks />

        </div>

        <div className="mt-16 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Gaurav Phule. All rights reserved.
        </div>

      </div>

    </footer>
  );
}