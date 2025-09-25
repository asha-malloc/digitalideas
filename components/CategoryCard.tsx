
import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
    category: Category;
    onViewIdeas: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onViewIdeas }) => {
    const { name, emoji, image, examples, color, buttonColor } = category;

    const buttonClasses = `w-full bg-${buttonColor} hover:bg-${buttonColor.slice(0,-3)}600 text-white py-3 rounded-lg font-medium transition-colors duration-300`;
    
    // This is a bit of a hack for Tailwind JIT compiler.
    // The full class names must exist in the file for Tailwind to generate them.
    // hidden classes: bg-purple-500 hover:bg-purple-600, bg-blue-500 hover:bg-blue-600, bg-orange-500 hover:bg-orange-600, bg-green-500 hover:bg-green-600, bg-yellow-500 hover:bg-yellow-600, bg-pink-500 hover:bg-pink-600
    // hidden classes: bg-pink-400, bg-blue-400, bg-orange-400, bg-green-400, bg-yellow-400
    
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{emoji}</span>
                    <h3 className="text-2xl font-oswald font-bold text-gray-800">{name}</h3>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6 h-48">
                    {examples.map((example) => (
                        <li key={example} className="flex items-center">
                            <span className={`w-2 h-2 bg-${color} rounded-full mr-3`}></span>
                            {example}
                        </li>
                    ))}
                </ul>
                <button 
                    className={buttonClasses}
                    onClick={() => onViewIdeas(name)}
                >
                    View Ideas
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
