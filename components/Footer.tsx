
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-6">
            <div className="container mx-auto px-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Chez Gimmy - Cuisine Maison. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
