// src/components/About.js

import {React} from "react";

import ScreenDetection from "../tools/screenDetection";

import TypeWriterEffect from 'react-typewriter-effect';
import Alert from '@mui/material/Alert';


export default function About() {

    let mobileMessage;

    if (ScreenDetection() === true) {
        mobileMessage =
        <div>
            <Alert severity="info">This would look a lot better on a Desktop.<br></br><br></br>It'll give you access to my script compiler page!</Alert>
            <br></br>
        </div>
    }

    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {mobileMessage}
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
                        University of Alberta BSc - Computing Science 2024
                    </h2>
                    {/* <p className="mb-8 leading-relaxed text-gray-350">
                        Welcome to my personal portfolio that I wrote myself! As you can see above, I hope to graduate after the winter semester of 2024. 
                        I have worked two internships at <strong>MuniSoft</strong> , a financial technology software company, based in Regina, Saskatchewan. In addition to this, 
                        I am currently working my third internship at <strong>Shared Services Canada</strong> in Edmonton, Alberta. During this current internship, I am 
                        continuing to complete university courses for my expected graduation. 
                        <br></br>
                        <br></br>
                        After school, I hope to pursue a career in app and/or web development. 
                        I also have an interest in computer vision, machine learning, and design! I am eager to learn about all branches 
                        of computer science and hope to add much more to my personal knowledge with my experiences to come.
                    </p> */}
                    <p className="mb-8 leading-relaxed text-gray-350">
                        Welcome to my personal portfolio!
                        <br></br> 
                        <br></br>
                        In terms of work experience, I have worked two internships as a Software Development Intern at 
                        <a 
                            href="https://www.munisoft.ca/home" 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            className="text-gray-600 hover:text-orange-700"
                        ><strong> MuniSoft </strong></a>
                        (Regina, SK), 
                        a financial technology software company. This position 
                        gave me 8 months of professional, industry experience! In addition to this, I am currently 
                        working my third internship at 
                        <a 
                            href="https://www.canada.ca/en/shared-services.html" 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            className="text-gray-600 hover:text-orange-700"
                        ><strong> Shared Services Canada </strong></a>
                        (Edmonton, AB) as a Systems Analyst Intern for 16 months. 
                        <br></br>
                        <br></br>
                        Other than industry experience, I have worked on many projects during classes, hackathons, and in my free time, 
                        in which I have led my teams to success. My greatest accomplishments have come from taking charge and putting in 
                        long hours to get the project done. I have used a variety of languages and gained exceptional experience in 
                        mobile/web development, machine learning, and design!
                   </p>
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/file/d/1YGfvWsDh_PRq-_wnwpl26TDXQeDcWXf4/view?usp=sharing" rel="noopener"
                            className="hover:animate-pulse-slow inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Check out my Resume
                        </a>
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