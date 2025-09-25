
import React from 'react';

const Stats: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-anton text-pink-500 mb-2">100+</div>
                        <div className="text-gray-600 font-medium">Product Ideas</div>
                    </div>
                    <div>
                        <div className="text-4xl font-anton text-pink-500 mb-2">6</div>
                        <div className="text-gray-600 font-medium">Categories</div>
                    </div>
                    <div>
                        <div className="text-4xl font-anton text-pink-500 mb-2">∞</div>
                        <div className="text-gray-600 font-medium">Possibilities</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
