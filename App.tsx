
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
