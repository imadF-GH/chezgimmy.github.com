
import React, { useState } from 'react';
import type { NavLink } from '../types';
import Logo from './Logo';

const navLinks: NavLink[] = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#menu', label: 'Menu' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Logo />
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-lg font-medium text-gray-300 hover:text-brand-gold transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-brand-gold focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-brand-dark/95">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gray-300 hover:text-brand-gold transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
