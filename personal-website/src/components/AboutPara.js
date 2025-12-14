import {React} from "react";
import Alert from '@mui/material/Alert';
import { NavLink } from "react-router-dom";

import ScreenDetection from "../tools/screenDetection";

export default function AboutPara() {

    let mobileMessage;

    if (ScreenDetection() === true) {
        mobileMessage =
        <div>
            <Alert severity="info">This would look a lot better on a Desktop.</Alert>
            <br></br>
        </div>
    }

    return (
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        {mobileMessage}
        <br></br>
        <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-slate-300 text-gray-600">
            University of Alberta BSc - Computing Science 2024
        </h2>

        <p className="mb-8 leading-relaxed text-gray-350">
        I’m a Software Development Engineer at Amazon, currently working on the Healthcare Payments team, where I focus 
        on building full-stack, customer-facing and backend systems at scale. Prior to this, I worked on 
        <a 
            href="https://aws.amazon.com/ecs/" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> AWS ECS</strong></a>, 
        contributing to globally launched infrastructure features, improving service reliability, and supporting 
        high-availability systems used by customers worldwide. I had the opportunity to develop the changes that added support for 
        <a 
            href="https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-ecs-ebs-provisioned-rate-volume-initialization/" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> Amazon EBS Provisioned Rate for Volume Initialization.</strong></a>
        
        <br></br>
        <br></br>

        I graduated from the 
        <a 
            href="https://www.ualberta.ca/en/index.html" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> University of Alberta</strong></a> in 2024 with a BSc in Computer Science, where I also served as a 
        Teaching Assistant for Intro to Software Engineering and Object-Oriented Design. Across internships and full-time 
        roles, I’ve gained over three years of industry experience spanning distributed systems, cloud services, automation, 
        and full-stack development.

        <br></br>
        <br></br>
        
        Before Amazon, I spent two years at 
        <a 
            href="https://www.canada.ca/en/shared-services.html" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> Shared Services Canada </strong></a> as a Systems Analyst Intern, leading automation 
        and data-driven initiatives that improved workflows across hundreds of enterprise workstations nationwide. 
        Earlier in my career, I completed two software engineering internships at 
        <a 
            href="https://www.munisoft.ca/home" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> MuniSoft</strong></a>
        , working on ERP systems, database upgrades, and large-scale municipal software deployments.

        <br></br>
        <br></br>

        Outside of my professional work, I worked as the co-founder of 
        <a 
            href="https://www.prophecyfinance.ca/" 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-gray-600 hover:text-orange-700"
        ><strong> Prophecy</strong></a>
        , a fintech startup focused on making investing and financial literacy more accessible through technology and 
        machine learning. I’ve also led and contributed to numerous projects through university courses, hackathons, 
        and independent work—often taking ownership of architecture, design, and execution to deliver high-quality results.

        <br></br>
        <br></br>

        In my free time, I enjoy 
        <NavLink
            to="/photography"
            className="text-gray-600 hover:text-orange-700">
        <strong> photography</strong></NavLink>
        , reading, and traveling (just finished a backpacking trip through Western Europe!). 
        I love staying active through running, swimming, skiing, and anything else that Vancouver offers.
        </p>

        <div className="flex justify-center">
            <a href="https://drive.google.com/file/d/1YjDbqT49xSlBiYrHLJyusi4EoLeT9aQt/view?usp=sharing" target="_blank" rel="noreferrer"
                className="hover:animate-pulse-slow inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Check out my Resume
            </a>
        </div>
        
    </div>
)}