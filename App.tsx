

import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Menu from './components/Menu.tsx';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
    return (
        <div className="bg-brand-dark">
            <Header />
            <main>
                <Hero />
                <Menu />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
