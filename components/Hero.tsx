
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-gradient text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-anton font-bold mb-6">
                    <span className="text-white">DIGITAL</span><br />
                    <span className="text-white">PRODUCT</span><br />
                    <span className="text-yellow-300 italic font-dancing text-4xl md:text-6xl">ideas</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                    Discover 100+ profitable digital product ideas to launch your creative business and generate passive income
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Explore Categories
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                        Download Guide
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
