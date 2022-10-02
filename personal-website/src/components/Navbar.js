// src/components/Navbar.js

import { MailIcon } from "@heroicons/react/solid";
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';
// ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);


export default function Navbar() {

    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="ml-3 text-3xl cursor-pointer">
                    Sankalp Saini
                    </Link>
                </nav>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-orange-900 rounded text-base mt-4 md:mt-0">

                        Projects
                    </Link>
                    <Link 
                        to="volunteering" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-orange-900 rounded text-base mt-4 md:mt-0">

                        Volunteering
                    </Link>
                    <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-orange-900 rounded text-base mt-4 md:mt-0">

                        Skills
                    </Link>
                </nav>

                {/* Social Icons */}

                <nav>
                {/* className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"> */}
                <SocialIcon 
                    className="cursor-pointer inline-flex items-center py-1 px-3 focus:outline-none text-base mx-1"
                    url="https://www.instagram.com/s.saini6/" 
                    bgColor="#b45309" 
                    fgColor="2D283E" 
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon 
                    className="cursor-pointer inline-flex items-center py-1 px-3 focus:outline-none text-base mx-1"
                    url="https://twitter.com/sankalp_saini" 
                    bgColor="#b45309" 
                    fgColor="2D283E" 
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon 
                    className="cursor-pointer inline-flex items-center py-1 px-3 focus:outline-none text-base mx-1"
                    url="https://www.linkedin.com/in/sankalp-saini/" 
                    bgColor="#b45309" 
                    fgColor="2D283E" 
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon 
                    className="cursor-pointer inline-flex items-center py-1 px-3 focus:outline-none text-base mx-1"
                    url="https://github.com/sankalpsaini" 
                    bgColor="#b45309" 
                    fgColor="2D283E" 
                    style={{ height: 40, width: 40 }}
                />
                </nav>

                {/* Email Me Link */}

                <a
                    href="mailto:sankalpsaini6@gmail.com"
                    className="cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Contact Me
                    <MailIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}

// repeat the same basic structure for all 6 components