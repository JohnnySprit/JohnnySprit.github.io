export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center relative pt-8">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-19 -mt-75">
                <div className="hidden md:flex flex-col gap-4">
                <a href="https://linkedin.com/in/jnzheng" target="_blank" rel="noopener noreferrer"
                    className="text-gray-200 hover:text-green-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="https://github.com/JohnnySprit" target="_blank" rel="noopener noreferrer"
                    className="text-gray-200 hover:text-green-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                </div>

                {/* Content */}
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl mb-4 font-bold text-gray-200">
                        Hi, I'm <br />Johnny Zheng
                    </h1>
                    <h3 className="text-2xl md:text-3xl mb-2 text-gray-200 font-semibold">
                        I am a Computer Science Student
                    </h3>
                    <h3 className="text-2xl md:text-3xl mb-6 text-gray-200 font-semibold">
                        and Aspiring Software Engineer
                    </h3>

                    <a href="#contact"
                    className="inline-flex items-center gap-2 bg-green-800 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-green-700 hover:shadow-lg">
                        Contact Me
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Image */}
                <div className="md:w-auto mt-8 md:mt-0 flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src="./linkedinheadshot.png"
                            alt="Johnny Zheng"
                            className="rounded-full w-64 md:w-80 h-64 md:h-80 object-cover border-4 border-green-200 shadow-xl scale-115"
                        />
                    </div>
                </div>

            </div>

            {/* Scroll down indicator */}
            <a href="#about" className="absolute bottom-29 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-200 hover:text-green-600 transition-colors">
                <span className="text-sm">Scroll down</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
};
