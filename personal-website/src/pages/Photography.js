import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { photography } from "../data";

export default class Photography extends Component {  
    render() { 
        return (
        <>
            <div className="text-gray-400 bg-background_about body-font">
                <Navbar />
            </div>

            <section className="text-gray-400 bg-background_about body-font min-h-screen">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-slate-300 text-gray-600 text-center">
                            Photography
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-350 text-center">
                            A small collection of my photography work. I dabble in film photography and am trying to hone my skills while discovering new places.
                        </p>
                    </div>
                    
                    {photography.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {photography.map((photo, index) => (
                                <div 
                                    key={index} 
                                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                                >
                                    <img 
                                        src={photo.image} 
                                        alt={photo.title || `Photography ${index + 1}`}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {photo.title && (
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                                            <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-white font-semibold text-lg mb-1">
                                                    {photo.title}
                                                </h3>
                                                {photo.date && (
                                                    <p className="text-gray-300 text-sm">
                                                        {photo.date}
                                                    </p>
                                                )}
                                                {photo.location && (
                                                    <p className="text-gray-300 text-sm">
                                                        {photo.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
                                No photography images added yet. Add images to the photography folder and update data.js.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
        );
    }
}