// src/components/About.js

import React from "react";
import { Link } from 'react-scroll'

export default function About() {
    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-black">
                        Hi there!
                    </h1>
                    <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-slate-300 text-gray-600">
                        University of Alberta Computing Science Fall 2023
                    </h2>
                    <p className="mb-8 leading-relaxed text-gray-350">
                        Welcome to my personal portfolio! As you can see above, I hope to graduate after the fall semester of 2023. 
                        I have currently worked two internships at MuniSoft based in Regina, Saskatchewan. In addition to this, I am currently 
                        working at my third internship at Shared Services Canada in Edmonton, Alberta. During this current internship, I am continuing 
                        to complete university courses for my expected graduation. After school, I hope to pursue a career in app and/or web development. 
                        I also have an interest in computer vision, artificial intelligence, and design! I am eager to learn about all branches 
                        of computer science and hope to add much more to my personal knowledge with my experiences to come.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:sankalpsaini6@gmail.com"
                            className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Email Me
                        </a>
                        <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">

                        Take a look at my Projects
                        </Link>
                    </div>
                    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="headshot"
                        src="./headshot.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}
// repeat the same basic structure for all 6 components