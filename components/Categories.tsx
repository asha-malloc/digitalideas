
import React from 'react';
import { CATEGORIES } from '../constants';
import CategoryCard from './CategoryCard';

interface CategoriesProps {
    onViewIdeas: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onViewIdeas }) => {
    return (
        <section id="categories" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-800 mb-4">
                        Explore Categories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From planners to digital art, discover profitable product ideas across multiple niches
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CATEGORIES.map((category) => (
                        <CategoryCard key={category.name} category={category} onViewIdeas={onViewIdeas} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
