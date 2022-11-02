// src/components/About.js

import {React} from "react";
import TypeWriterEffect from 'react-typewriter-effect';


export default function About() {
    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <TypeWriterEffect
                        textStyle={{ fontFamily: 'American Typewriter, serif', color: 'black', fontSize: "35px" }}
                        startDelay={100}
                        cursorColor="black"
                        text="Hey there! Welcome to my site!"
                        typeSpeed={100}
                        eraseSpeed={100}
                        
                    />
                    <br></br>
                    <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-slate-300 text-gray-600">
                        University of Alberta Computing Science Fall 2023
                    </h2>
                    <p className="mb-8 leading-relaxed text-gray-350">
                        Welcome to my personal portfolio that I made myself, <em>from scratch</em>! As you can see above, I hope to graduate after the fall semester of 2023. 
                        I have worked two internships at <strong>MuniSoft</strong> , a financial technology software company, based in Regina, Saskatchewan. In addition to this, 
                        I am currently working my third internship at <strong>Shared Services Canada</strong> in Edmonton, Alberta. During this current internship, I am 
                        continuing to complete university courses for my expected graduation. 
                        <br></br>
                        <br></br>
                        After school, I hope to pursue a career in app and/or web development. 
                        I also have an interest in computer vision, artificial intelligence, and design! I am eager to learn about all branches 
                        of computer science and hope to add much more to my personal knowledge with my experiences to come.
                    </p>
                    <div className="flex justify-center">
                        {/* <a href="mailto:sankalpsaini6@gmail.com" */}
                        <a href="https://drive.google.com/file/d/1j-UVyC972YBQ4yj8Hv2s83G4B8ciksgo/view?usp=sharing"
                            className="hover:animate-pulse inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Check out my Resume
                        </a>
                        {/* <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">

                        Take a look at my Projects
                        </Link> */}
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