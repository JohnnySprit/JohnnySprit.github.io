export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center 
            justify-center duration-450 ease-in-out
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            `}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4.5 right-9 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close menu"
            >
                &times;
            </button>
            <a 
            href="#home" 
            className={`text-2xl text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            onClick={() => setMenuOpen(false)}
            >
                Home
            </a>
            <a 
            href="#about" 
            className={`text-2xl text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}            
            onClick={() => setMenuOpen(false)}
            >
                About
            </a>
            <a 
            href="#projects" 
            className={`text-2xl text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}            
            onClick={() => setMenuOpen(false)}
            >
                Projects
            </a>
            <a 
            href="#contact" 
            className={`text-2xl text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}            
            onClick={() => setMenuOpen(false)}
            >
                Contact
            </a>
        </div>
    );
};