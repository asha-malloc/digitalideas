
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Categories from './components/Categories';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import { generateDigitalProductIdeas } from './services/geminiService';
import type { Idea } from './types';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<Idea[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleViewIdeas = useCallback(async (category: string) => {
        setIsModalOpen(true);
        setIsLoading(true);
        setSelectedCategory(category);
        setError(null);
        setModalContent(null);

        try {
            const ideas = await generateDigitalProductIdeas(category);
            setModalContent(ideas);
        } catch (err) {
            console.error(err);
            setError('Sorry, we couldn\'t generate ideas at this moment. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
        // Delay resetting content to allow for closing animation
        setTimeout(() => {
            setModalContent(null);
            setSelectedCategory(null);
            setError(null);
        }, 300);
    };

    return (
        <div className="bg-white">
            <Header />
            <main>
                <Hero />
                <Stats />
                <Categories onViewIdeas={handleViewIdeas} />
                <Cta />
            </main>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} title={`Ideas for ${selectedCategory}`}>
                {isLoading && (
                    <div className="flex flex-col items-center justify-center h-64">
                        <Spinner />
                        <p className="mt-4 text-gray-600 font-medium">Generating creative ideas...</p>
                    </div>
                )}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {modalContent && (
                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 -mr-4">
                        {modalContent.map((idea, index) => (
                            <div key={index} className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                                <h4 className="text-lg font-bold font-oswald text-gray-800">{idea.name}</h4>
                                <p className="text-gray-700 mt-1">{idea.description}</p>
                                <p className="text-sm text-purple-700 mt-2 font-medium">
                                    <strong>Target Audience:</strong> {idea.targetAudience}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default App;
