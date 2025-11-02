import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]
    )

    return (

    <nav>
        <div className="max-w-6xl mx-auto px-18">
            <div className="flex justify-between items-center h-12">
                <a href = "" className="font-[350] text-3xl">
                    <span className="text-gray-200">Johnny</span>
                </a>

                <div className="navbuttons text-2xl hidden md:flex items-center space-x-8">
                    <a href="" className="text-gray-200 hover:text-green-600 duration-300 transition-colors">
                        Home
                    </a>
                    <a href="#about" className="text-gray-200 hover:text-green-600 duration-300 transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-gray-200 hover:text-green-600 duration-300 transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-200 hover:text-green-600 duration-300 transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>

    );
};