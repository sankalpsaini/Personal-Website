import {React} from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Alert from '@mui/material/Alert';

import ScreenDetection from "../tools/screenDetection";

export default function AboutPara() {

    let mobileMessage;

    if (ScreenDetection() === true) {
        mobileMessage =
        <div>
            <Alert severity="info">This would look a lot better on a Desktop.<br></br><br></br>It'll give you access to my script compiler page!</Alert>
            <br></br>
        </div>
    }

    return (
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
        <p className="mb-8 leading-relaxed text-gray-350">
            A little about my professional experience, I have worked two internships as a Software Engineering Intern at 
            <a 
                href="https://www.munisoft.ca/home" 
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-gray-600 hover:text-orange-700"
            ><strong> MuniSoft </strong></a>
            (Regina, SK), 
            a financial technology software company. In addition to this, I had the privilege of 
            working my third internship at 
            <a 
                href="https://www.canada.ca/en/shared-services.html" 
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-gray-600 hover:text-orange-700"
            ><strong> Shared Services Canada </strong></a>
            (Edmonton, AB) as a Systems Analyst Intern for two years and have recently rejoined after graduation! These positions 
            have given me over three years of professional, industry experience in software development, testing, and design.
            <br></br>
            <br></br>
            I am also currently the cofounder of 
            <a 
                href="https://www.prophecyfinance.ca/" 
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-gray-600 hover:text-orange-700"
            ><strong> Prophecy </strong></a>
            which is a startup that is working on making investing and financial literacy more accessible to everyone!
            <br></br>
            <br></br>
            Other than industry experience, I have worked on many projects during classes, hackathons, and in my free time, 
            in which I have led my teams to success. My greatest accomplishments have come from taking charge and putting in 
            long hours to get the project done at a standard that I am proud of. I have used a variety of languages and gained 
            exceptional experience in mobile/web development, machine learning, and design!
        </p>
        <div className="flex justify-center">
            <a href="https://drive.google.com/file/d/1et7KZKhQAu1tfWcIhHdcW1lBczg52p0W/view?usp=sharing" target="_blank" rel="noreferrer"
                className="hover:animate-pulse-slow inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Check out my Resume
            </a>
        </div>
        
    </div>
)}