import React, { useEffect } from "react";
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
            // Si la sección visible es bg-white, añadimos la clase al body
            if (entry.target.classList.contains('bg-white')) {
              document.body.classList.add('bg-white');
            } else {
              document.body.classList.remove('bg-white');
            }
          }
        });
      },
      {
        threshold: 0.5 // Cuando al menos 50% de la sección es visible
      }
    );

    // Observar todas las secciones
    document.querySelectorAll('#hero-and-about, #home-experience, #home-projects, #home-skills, #home-contact')
      .forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="home">
        <div id="hero-and-about" className="bg-white">
          <div id="home-hero">
            <Hero />
          </div>
          <div id="home-about">
            <About />
          </div>
        </div>

        <div id="home-experience" className="bg-black">
          <Experience />
        </div>
        <div id="home-projects" className="bg-white">
          <Projects />
        </div>
        <div id="home-skills" className="bg-black">
          <Skills />
        </div>
        <div id="home-contact" className="bg-white">
          <Contact />
        </div>
      </div>
    </>
  );
}