// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";

export default function App() {
  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Navbar />
      <About />
      <Projects />
      <Volunteering />
      <Skills />
      <p className="text-gray-400 bg-background_main text-center body-font -m-10">
        © 2022 Sankalp Saini All Rights Reserved
      </p>
    </main>
  );
}