import React from 'react';
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import "../styles/Home.css";

export default function Home() {
  return (
    <div id="home">
      <div id="home-hero">
        <Hero />
      </div>
      <div id="home-about">
        <About />
      </div>
      <div id="home-experience">
        <Experience />
      </div>
      <div id="home-projects">
        <Projects />
      </div>
      <div id="home-skills">
        <Skills />
      </div>
      <div id="home-contact">
        <Contact />
      </div>
    </div>
  );
}
