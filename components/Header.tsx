
import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="nav-link font-medium text-gray-600 relative transition-colors duration-300 hover:text-pink-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
        {children}
    </a>
);

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">💡</span>
                        </div>
                        <span className="font-oswald font-bold text-xl text-gray-800">DigitalIdeas</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#categories">Categories</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
