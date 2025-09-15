import React, { useState, useEffect } from 'react';

// Stock images
const stockImages = [
    { src: '/assets/OmelleteEtCafe.jpg', alt: 'Une délicieuse poutine québécoise' },
    { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60', alt: 'Assiette déjeuner avec un œuf, bacon et rôties' },
    { src: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500&auto=format&fit=crop&q=60', alt: 'Assiette déjeuner avec deux œufs, bacon, rôties et café' },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60', alt: 'Grilled meat and vegetables' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60', alt: 'Pizza with cheese and toppings' },
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60', alt: 'Stack of pancakes with syrup' },
    { src: '/assets/ImageAssiete.jpg', alt: 'Breakfast toast with avocado and egg' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60', alt: 'Fresh salad bowl' },
    { src: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&auto=format&fit=crop&q=60', alt: 'Plate of spaghetti bolognese' },
    { src: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=60', alt: 'Poutine with gravy and cheese curds' },
    { src: '/assets/imageHamber.jpg', alt: 'Club sandwich with fries' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Handle modal and keyboard events
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <section id="galerie" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Galerie de Photos</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                    Un aperçu de nos délicieux plats qui vous mettront l'eau à la bouche.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stockImages.map((image, index) => (
                        <div 
                            key={image.src + index} 
                            className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        >
                            <div
                                onClick={() => setSelectedImage(image.src)}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image.src)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View image ${index + 1}: ${image.alt}`}
                                className="w-full h-full"
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover aspect-square transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                 <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
                    <div 
                        className="relative max-w-4xl max-h-[90vh] bg-brand-dark p-2 rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage} 
                            alt="Enlarged view" 
                            className="w-full h-full object-contain max-h-[calc(90vh-1rem)]"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                            aria-label="Close image viewer"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;