// src/components/Skills.js

import { AcademicCapIcon, ChipIcon, BookOpenIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { familiarSkills, softSkills, learningSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-background_main body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are some technical and OS skills that I have learnt during my work experience, university courses, 
            and personal learning.
            <br></br>
            The first section displays skills that I am familiar with, while the 
            second section displays skills that I am currently learning/pursuing.
            <br></br>
            Want to know about some of my soft skills? They're shown all the way at the bottom 
            in the third section!
          </p>
        </div>

        {/* Familiar Skills */}

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {familiarSkills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/3 w-full">
                    <div className="bg-indigo-900 rounded-3xl flex p-4 h-full items-center">
                        <AcademicCapIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        {skill.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Learning Skills */}

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {learningSkills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/3 w-full">
                    <div className="bg-indigo-700 rounded-3xl flex p-4 h-full items-center">
                        <BookOpenIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        {skill.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Soft Skills */}

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {softSkills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/3 w-full">
                    <div className="bg-indigo-500 rounded-3xl flex p-4 h-full items-center">
                        <UserCircleIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        {skill.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}