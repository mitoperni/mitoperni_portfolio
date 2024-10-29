import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si la sección visible es bg-light, añadimos la clase al header
            if (entry.target.classList.contains("bg-light")) {
              document.querySelector("header").classList.add("bg-light");
            } else {
              document.querySelector("header").classList.remove("bg-light");
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document
      .querySelectorAll(".bg-light, .bg-dark")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="home">
        <div id="hero-and-about" className="bg-light">
          <div id="home-hero">
            <Hero />
          </div>
          <div id="home-about">
            <About />
          </div>
        </div>

        <div id="home-experience" className="bg-dark">
          <Experience />
        </div>
        <div id="home-projects" className="bg-light">
          <Projects />
        </div>
        <div id="home-skills" className="bg-dark">
          <Skills />
        </div>
        <div id="home-contact" className="bg-light">
          <Contact />
        </div>
      </div>
    </>
  );
}
