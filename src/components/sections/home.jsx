export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl mb-4 leading-right">
                Hi, I'm Johnny
            </h1>

            <p className="flex justify-center space-x-4 m-4">
                I'm an undergraduate studying computer science with a minor in data science <br/> at
                Indiana University in Bloomginton, IN.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-green-600 text-white py-3 px-6 rounded transition relative 
                overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]">
                    View Projects
                </a>
                <a href="#contact" className="border border-green-600 text-green-600 py-3 px-6 rounded 
                transition-all duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-600/10">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}