
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="hover:text-pink-400 transition-colors">{children}</a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-12">
            <div id="about" className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">💡</span>
                            </div>
                            <span className="font-oswald font-bold text-xl">DigitalIdeas</span>
                        </div>
                        <p className="text-gray-400">
                            Empowering creators with profitable digital product ideas and business strategies.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-oswald font-semibold text-lg mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <FooterLink href="#">Planners</FooterLink>
                            <FooterLink href="#">Business</FooterLink>
                            <FooterLink href="#">Design</FooterLink>
                            <FooterLink href="#">Lifestyle</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-oswald font-semibold text-lg mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Tutorials</FooterLink>
                            <FooterLink href="#">Templates</FooterLink>
                            <FooterLink href="#">Community</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-oswald font-semibold text-lg mb-4">Connect</h4>
                        <ul className="space-y-2 text-gray-400">
                            <FooterLink href="#">Newsletter</FooterLink>
                            <FooterLink href="#">Instagram</FooterLink>
                            <FooterLink href="#">Pinterest</FooterLink>
                            <FooterLink href="#">YouTube</FooterLink>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 DigitalIdeas. All rights reserved. Made with ❤️ for creators.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
