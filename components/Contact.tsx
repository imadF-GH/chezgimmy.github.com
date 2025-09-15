
import React from 'react';

const MapPinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const ClockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact & Heures d'Ouverture</h2>
                    <p className="text-lg text-gray-400">Passez nous voir ou appelez pour commander.</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
                    <div className="bg-brand-dark p-8 rounded-lg shadow-2xl">
                        <h3 className="text-2xl font-bold text-brand-gold mb-6">Nos Coordonnées</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start">
                                <MapPinIcon />
                                <span className="ml-4">3293, Monselet, Mtl-Nord H1H 1Z4</span>
                            </div>
                            <div className="flex items-start">
                                <PhoneIcon />
                                <div className="ml-4 flex flex-col">
                                    <a href="tel:5147597970" className="hover:text-brand-gold">514 759-7970</a>
                                    <a href="tel:5147280728" className="hover:text-brand-gold">514 728-0728</a>
                                    <span className="font-bold mt-1">Cell.: <a href="tel:5142925573" className="hover:text-brand-gold">514 292-5573</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-dark p-8 rounded-lg shadow-2xl">
                        <h3 className="text-2xl font-bold text-brand-gold mb-6">Heures d'Ouverture</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center">
                                <ClockIcon />
                                <p className="ml-4 flex justify-between w-full"><span>Lundi - Vendredi:</span> <span>7h - 20h</span></p>
                            </div>
                            <div className="flex items-center">
                                <ClockIcon />
                                <p className="ml-4 flex justify-between w-full"><span>Samedi:</span> <span>8h - 20h</span></p>
                            </div>
                            <div className="flex items-center">
                                <ClockIcon />
                                <p className="ml-4 flex justify-between w-full"><span>Dimanche:</span> <span>9h - 14h</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
