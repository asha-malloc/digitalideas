
import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-anton font-bold mb-6">
                    Ready to Start Your Digital Business?
                </h2>
                <p className="text-xl mb-8 text-gray-100">
                    Get instant access to our complete guide with detailed instructions for each product idea
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                        Download Free Guide
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                        Join Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
