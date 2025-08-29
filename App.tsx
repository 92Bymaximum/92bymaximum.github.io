
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Demo from './components/Demo';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-200 font-sans antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover" 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.05 }}
        ></div>
        <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <Demo />
          <Gallery />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
