export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl mb-4 font-bold">
                        Hi, I'm <br />Johnny Zheng
                    </h1>
                    <h3 className="text-2xl md:text-3xl mb-2 font-semibold">
                        I am a Computer Science Student
                    </h3>
                    <h3 className="text-2xl md:text-3xl mb-6 font-semibold">
                        Aspiring Software Engineer
                    </h3>
                    <p className="text-lg md:text-xl mb-6">
                        I am specializing in Software Engineering and AI, with a minor in Data Science. I am proficient in Python, Java, and JavaScript.
                    </p>
                    <a href="#contact"
                       className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-green-700 hover:shadow-lg">
                        Contact Me
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="md:w-auto mt-8 md:mt-0 flex justify-end md:flex-shrink-0 md:pr-8">
                        <img
                            src="./linkedinheadshot.png"
                            alt="Johnny Zheng"
                            className="rounded-lg w-64 md:w-80"
                        />
                </div>

            </div>

            {/* Scroll down indicator */}
            <a href="#about" className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-green-600 transition-colors">
                <span className="text-sm">Scroll down</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
};
