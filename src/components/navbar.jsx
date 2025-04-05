import { useEffect } from "react";

export const NavBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]
    )

    return (

    <nav>
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-12">
                <a href = "#home" className="font-[200] text-3xl">
                    <span>Johnny</span><span className="text-green-600">Zheng</span>
                </a>
                
                <div className="text-2xl w-7 h-8 relative cursor-pointer z-40 md:hidden" onClick = {() => setMenuOpen((prev) => !prev)
                }>
                    &#9982;
                </div>

                <div className="navbuttons text-2xl hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-green-600 duration-300 transition-colors" >
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-green-600 duration-300 transition-colors" >
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-green-600 duration-300 transition-colors" >
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-green-600 duration-300 transition-colors" >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>

    );
};