import React from 'react';

const Logo: React.FC = () => {
    return (
        <a href="#accueil" className="flex items-center text-white cursor-pointer group">
            <img 
                src="/assets/logo2.png" 
                alt="Logo de Chez Gimmy" 
                className="h-20 w-auto transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[12deg]"
            />
        </a>
    );
};

export default Logo;
