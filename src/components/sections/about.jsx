    export const About = () => {
        return (
        <section id="about" className="flex items-center justify-center py-1">
        <div className="max-w-4xl mx-auto px-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2">About Me</h2>
                <p className="text-gray-200 text-base">My introduction</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Image */}
                <div className="flex justify-center">
                <img
                    src="./linkedinheadshot.png"
                    alt="Johnny Zheng"
                    className="rounded-xl w-64 md:w-76"
                />
                </div>

                {/* Right side - Content */}
                <div className="space-y-6">
                <div className="space-y-4 text-base text-gray-200">
                    <p>
                    I'm currently a student at Indiana University studying Computer Science.
                    I have strong interests in software engineering, full-stack development, and data.
                    </p>

                    <p>
                    I have gained hands-on experience with Java, Python, JavaScript, and SQL.
                    I am also actively incorporating those languages with modern frameworks like Spring Boot, React.js, TailwindCSS, as well as generative AI.
                    </p>

                    <p>
                    I deeply value environments that foster quality, creativity, learning, and a strong engineering culture.
                    I am always open to new opportunities, or simply connecting with others who share the same passion for technology and the pursuit of excellence.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        );
    };
