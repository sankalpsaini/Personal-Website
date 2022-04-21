// src/components/About.js

import React from "react";

export default function About() {
    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Sankalp Saini
                    </h1>
                    <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-slate-300">
                        University of Alberta Computing Science
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa et nisi facilisis auctor. Etiam vitae elementum felis, non fringilla turpis.
                        Nullam pellentesque nisi leo, a tempor dolor viverra eu. Donec vel tortor lorem. Sed pellentesque malesuada imperdiet. Nunc tellus urna, pharetra ut velit 
                        nec, laoreet dapibus nisl. Donec non ex cursus, molestie enim id, laoreet metus. Praesent eu sapien rutrum, iaculis libero sit amet, pulvinar dui. Quisque 
                        eu finibus orci, eget luctus nunc. Curabitur suscipit blandit justo, a congue velit. Quisque at tempus urna. Fusce non egestas ante, sit amet interdum mi. 
                        Maecenas vel ligula sed felis viverra iaculis ac nec ex. Nullam sem erat, efficitur quis rutrum a, dapibus eget tortor. Nulla sollicitudin ante tincidunt 
                        justo tempus maximus. Nulla faucibus nisl facilisis mollis porttitor.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:sankalpsaini6@gmail.com"
                            className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Email Me
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Take a look at my Projects
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