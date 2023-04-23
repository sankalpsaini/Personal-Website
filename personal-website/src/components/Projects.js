// src/components/Projects.js

import React, {useState} from "react";

import { projects } from "../data";
import ScreenDetection from "../tools/screenDetection";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { DesktopComputerIcon } from "@heroicons/react/solid";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';

var Carousel = require('react-responsive-carousel').Carousel;

export default function Projects() {

  const [isHoveredId, setIsHoveredId] = useState( '' );
  let projectList;

  function handleMouseOver( ID ) {
    return () => {
      setIsHoveredId( ID );
    }
  }

  function handleMouseOut() {
    setIsHoveredId( '' );
  }

  const styles = {
    overlayHeader: {
      position: 'absolute',
      top: '50px',
      left: '20px',
      color: 'white',
    },
    overlaySubtitle: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: '#c2410c',
    },
    overlayBody: {
      position: 'absolute',
      top: '120px',
      left: '20px',
      right: '20px',
      color: '#a8a29e',
    }
  }

  if (ScreenDetection() === false) {
    projectList =
      <div className="grid grid-cols-2 gap-6 pt-10">
        {projects.map((project) => (
          <Card sx={{ width: 1, height: 250 }}>
            <CardActionArea
              onMouseOver={ handleMouseOver(project.title) }
              onMouseOut={ handleMouseOut }
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              { isHoveredId === project.title ?
                <div>
                  <CardMedia
                    sx={{
                      height: 250,
                      // paddingTop: '56.25%'
                    }}
                    image={project.image}
                    title={project.title}
                    className="filter opacity-75 brightness-0"
                  />
                  <Typography variant="h6" style={styles.overlaySubtitle}>
                      <b>{project.subtitle}</b>
                  </Typography>
                  <Typography variant="h3" style={styles.overlayHeader}>
                      <b>{project.title}</b>
                  </Typography>
                  <Typography variant="body1" style={styles.overlayBody}>
                      {project.description}
                  </Typography>
                </div>
                


              :
                <CardMedia
                  sx={{ 
                    height: 250
                  }}
                  image={project.image}
                  title={project.title}
                />
            }
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
            and personal projects. They helped me learn new languages and hone previously 
            existing skills. Hover over them for more information about the languages used. 
            <br></br><b><i>Click</i></b> on them to access the project and find other projects
            on my GitHub!
          </p>
        </div>
        
        <div>
          {projectList}
        </div>
      </div>
    </section>
  );
}