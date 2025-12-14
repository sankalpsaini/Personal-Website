// src/components/About.js

import {React} from "react";

// import CustomizedTimeline from "./CustomizedTimeline";
import AboutPara from "./AboutPara";

export default function About() {
    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                {/* < CustomizedTimeline /> */}
                <AboutPara />
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="headshot"
                        src="./headshot2.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}