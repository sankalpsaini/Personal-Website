// src/components/About.js

import React from "react";

import { volunteering } from "../data";
import ScreenDetection from "../tools/screenDetection";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { GlobeAltIcon } from "@heroicons/react/solid";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

var Carousel = require('react-responsive-carousel').Carousel;

export default function Volunteering() {

    let volunteerList;

    if (ScreenDetection() === false) {
        volunteerList =
        // <div className="flex flex-wrap -m-4">
        <div className="grid grid-cols-3 gap-6 pt-10">
            {volunteering.map((volunteer) => (
              <Card sx={{ width: 1, height: 250, borderRadius: '20px' }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ 
                      height: 250,
                      ':hover': {
                        borderRadius: "20px", // theme.shadows[20]
                      },
                    }}
                    image={volunteer.image}
                    title={volunteer.title}
                  />
                </CardActionArea>
              </Card>
            ))}
        </div>
      } else {
        console.log("MOBILE HERE")
        volunteerList = 
          <div className="pt-10">
            <Carousel 
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              >
              {volunteering.map(volunteer => (
                  <a 
                    href={volunteer.link}
                    key={volunteer.image}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="font-bold text-orange-700 text-lg">{volunteer.title}</p>
                    <p className="font-bold text-sm pb-1">{volunteer.subtitle}</p>
                    <div className="flex relative">
                      <img src={volunteer.image} alt={volunteer.title} />
                    </div>
                  </a>
              ))}
            </Carousel>
          </div>
      }

     return (
        <section id="volunteering" className="text-gray-400 bg-background_main body-font">
            <div className="container px-5 pb-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <AnimationOnScroll initiallyVisible={false} animateIn={"animate__flip"}>
                        <GlobeAltIcon className="mx-auto inline-block w-10 mb-4" />
                    </AnimationOnScroll>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Here are some of my Community Involvement Projects!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Other than school and work experience, I enjoy stepping outside of my comfort zone 
                        and participating in non-computing science events and volunteering groups. 
                        I believe that by branching out, I am able to have experiences that I may not otherwise 
                        have; which will also help shape who I am! 
                    </p>
                </div>

                <div>
                    {volunteerList}
                </div>

                {/* <div className="flex flex-wrap -m-4">
                    {volunteering.map((volunteer) => (
                        <a 
                        href={volunteer.link}
                        key={volunteer.image}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="sm:w-1/4 w-full h-[300px] p-5">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full rounded-2xl object-cover object-center border-4 border-white"
                                src={volunteer.image}
                            />
                            <div className="px-8 py-10 relative z-0 w-full rounded-2xl border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-orange-700 mb-1">
                                    {volunteer.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {volunteer.title}
                                </h1>
                                <p className="leading-relaxed">{volunteer.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
                        
                        
                        
                        
                        
                        // <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        //     <h1 className="absolute inset-0 w-full h-20 rounded-2xl object-cover object-center border-4 border-white text-6xl center">
                        //         {volunteer.title}
                        //     </h1>
                        //     <div className="px-8 py-10 relative z-10 w-full rounded-2xl border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        //         <h2 className="tracking-widest text-sm title-font font-medium text-orange-700 mb-1">
                        //             {volunteer.subtitle}
                        //         </h2>
                        //         <h1 className="title-font text-lg font-medium text-white mb-3">
                        //             {volunteer.title}
                        //         </h1>
                        //         <p className="leading-relaxed">{volunteer.description}</p>
                        //     </div>
                        // </div>
                        // </a>