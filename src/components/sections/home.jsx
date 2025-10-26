export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl mb-4 font-bold">
                        Hi, I'm Johnny
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        I'm an undergraduate computer science student with a minor in data science at Indiana University
                        Bloomington.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#projects"
                           className="bg-green-600 text-white py-3 px-6 rounded transition hover:shadow-lg">
                            View Projects
                        </a>
                        <a href="#contact"
                           className="border border-green-600 text-green-600 py-3 px-6 rounded transition hover:bg-green-600/10">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="md:w-auto mt-8 md:mt-0 flex justify-end md:flex-shrink-0 md:pr-8">
                        <img
                            src="./linkedinheadshot.png"
                            alt="Johnny Zheng"
                            className="rounded-lg w-64 md:w-80"
                        />
                </div>

            </div>
        </section>
    );
};
