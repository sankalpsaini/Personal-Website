// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";
import Socials from "./components/Socials";

export default function App() {
  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Navbar />
      <About />
      <Projects />
      <Volunteering />
      <Skills />
      <Socials />
    </main>
  );
}