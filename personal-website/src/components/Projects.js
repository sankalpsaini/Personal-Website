// src/components/Projects.js

import React from "react";

import { projects } from "../data";
import ScreenDetection from "../tools/screenDetection";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { DesktopComputerIcon } from "@heroicons/react/solid";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

var Carousel = require('react-responsive-carousel').Carousel;

export default function Projects() {

  let projectList;

  if (ScreenDetection() === false) {
    projectList =
      <div className="grid grid-cols-2 gap-6 pt-10">
        {projects.map((project) => (
          <Card sx={{ width: 1, height: 250 }}>
            <CardActionArea>
              <CardMedia
                sx={{ 
                  height: 250,
                  ':hover': {
                    borderRadius: "20px", // theme.shadows[20]
                  },
                }}
                image={project.image}
                title={project.title}
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
  } else {
    console.log("MOBILE HERE")
    projectList = 
      <div className="pt-10">
        <Carousel 
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          >
          {projects.map(project => (
              <a 
                href={project.link}
                key={project.image}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="font-bold text-orange-700 text-lg">{project.title}</p>
                <p className="font-bold text-sm pb-1">{project.subtitle}</p>
                <div className="flex relative">
                  <img src={project.image} alt={project.title} />
                </div>
              </a>
          ))}
        </Carousel>
      </div>
  }

  return (
    <section id="projects" className="text-gray-400 bg-background_main body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <AnimationOnScroll initiallyVisible={false} animateIn={"animate__flip"}>
            <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
          </AnimationOnScroll>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Here are some of my Projects!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are projects that I have completed during hackathons, classes, 
            and personal projects. They helped me learn new languages and tone previously 
            existing skills. Click on them to access the project! Find other projects
            on my GitHub!
          </p>
        </div>
        
        <div>
          {projectList}
        </div>

          {/* <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <a 
                href={project.link}
                key={project.image}
                rel="noopener noreferrer"
                target="_blank"
                className="w-full h-full py-4 px-2">
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
          </div> */}
      </div>
    </section>
  );
}