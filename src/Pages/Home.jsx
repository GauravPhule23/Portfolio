import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Stats from "../Components/Stats/Stats";
import Projects from "../Components/Projects/Project";
import About from "../Components/About/About"
import Skills from "../Components/Skills/Skills"
import Experience from "../Components/Experience/Experience"
import MainLayout from  "../Layouts/MainLayout"
import Contact from "../Components/Contact/Contact"
import { Toaster } from "sonner";

export default function Home() {
  return (
    <MainLayout>
      <Toaster richColors position="top-center" />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact/>
    </MainLayout>
  );
}