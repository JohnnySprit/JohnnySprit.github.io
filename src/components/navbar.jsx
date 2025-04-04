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
                <a href = "#home" className="font-[150] text-2xl">
                    <span>Johnny</span><span className="text-green-600">Zheng</span>
                </a>
                
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick = {() => setMenuOpen((prev) => !prev)
                }>
                    &#9776;
                </div>

                <div className="navbuttons hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors" >
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors" >
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors" >
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors" >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>

    );
};