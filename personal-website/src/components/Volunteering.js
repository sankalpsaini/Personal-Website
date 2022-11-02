// src/components/About.js

import React from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { volunteering } from "../data";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Volunteering() {
     return (
        <section id="volunteering" className="text-gray-400 bg-background_main body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
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
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                    <div className="flex flex-wrap -m-4">
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
                    </div>
                </AnimationOnScroll>
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