import React, { useState, useEffect } from 'react';

const menuItems = [
    {
        src: '/assets/MenuDejeuner.jpg',
        alt: 'Menu des déjeuners, oeufs et omelettes du restaurant Gimmy',
        name: 'Nos Déjeuners'
    },
    {
        src: '/assets/Menu1.jpg',
        alt: 'Deuxième partie du menu du restaurant Gimmy',
        name: 'Pates & Salades'
    },
    {
        src: '/assets/Menu2.jpg',
        alt: 'Troisième partie du menu du restaurant Gimmy, incluant les breuvages et desserts',
        name: 'Pizzas & Sous-marins'
    },
    {
        src: '/assets/Menu3.jpg',
        alt: 'Quatrième partie du menu du restaurant Gimmy, avec les spéciaux du chef',
        name: 'Poutines & Trios'
    }
];

const Menu: React.FC = () => {
    const [selectedMenuImage, setSelectedMenuImage] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedMenuImage(null);
            }
        };

        if (selectedMenuImage) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedMenuImage]);

    return (
        <section id="menu" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre Menu Complet</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                    Jetez un œil à notre sélection variée, des déjeuners copieux aux pizzas gourmandes et nos fameuses poutines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="group relative overflow-hidden rounded-lg shadow-2xl shadow-black/50 cursor-pointer"
                            onClick={() => setSelectedMenuImage(item.src)}
                            onKeyDown={(e) => e.key === 'Enter' && setSelectedMenuImage(item.src)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Voir le menu: ${item.name}`}
                        >
                            <img 
                                src={item.src}
                                alt={item.alt} 
                                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-white text-3xl font-bold font-dancing drop-shadow-md">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedMenuImage && (
                 <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={() => setSelectedMenuImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visionneuse de menu"
                >
                    <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
                    <div 
                        className="relative max-w-xl w-full max-h-[95vh] bg-brand-dark p-2 rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedMenuImage} 
                            alt="Vue agrandie du menu" 
                            className="w-full h-full object-contain max-h-[calc(95vh-1rem)]"
                        />
                        <button
                            onClick={() => setSelectedMenuImage(null)}
                            className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                            aria-label="Fermer la visionneuse de menu"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Menu;