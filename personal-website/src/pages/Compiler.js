import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Compiler extends Component {  
    render() { 
        return (
        <>
            <div className="text-gray-400 bg-background_about body-font">
                <Navbar />
            </div>


            {/* This is the compiler brought in from trinket.io */}
            <iframe 
                title="Password Generator"
                className="absolute inset-0 pt-20"
                src="https://trinket.io/embed/python/39485873f6"
                width="100%" 
                height="100%"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                allowfullscreen=""
            />

        </>
        );
    }
}