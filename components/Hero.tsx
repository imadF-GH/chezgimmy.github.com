
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="accueil" className="relative h-screen flex items-center justify-center text-white text-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop" alt="Delicious pizza with melted cheese" className="absolute inset-0 w-full h-full object-cover" />
            
            <div className="relative z-10 p-4">
                <h1 className="text-6xl md:text-8xl font-dancing mb-4 drop-shadow-lg">Restaurant</h1>
                <h1 className="text-6xl md:text-8xl font-dancing mb-4 drop-shadow-lg">Chez Gimmy</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                    (anciennement O2filles)
                </p>
                <a href="#contact" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Commander
                </a>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <a href="#menu" aria-label="Scroll to menu">
                    <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
