// src/components/Projects.js

import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-background_main body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AnimationOnScroll initiallyVisible={false} animateIn={"animate__flip"}>
            <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
          </AnimationOnScroll>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Here are some of my Projects!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are projects that I have completed during hackathons, classes, 
            and personal projects. They helped me learn new languages and tone previously 
            existing skills. Hover over some of the projects to get more information! Find other projects
            on my GitHub!
          </p>
        </div>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={4}>
          {/* <div className="flex flex-wrap -m-4"> */}
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <a 
                href={project.link}
                key={project.image}
                rel="noopener noreferrer"
                target="_blank"
                // className="h-[250px] p-4">
                className="w-full h-[270px] p-4">
                <div className="flex relative hover:animate-pulse-slow">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full rounded-2xl object-cover object-center border-4 border-white"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-0 w-full rounded-2xl border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-orange-700 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}