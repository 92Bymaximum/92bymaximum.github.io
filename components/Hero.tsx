
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Turn Your Photos into
          <br />
          <span className="relative inline-block">
            <span className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg blur opacity-75 animate-pulse"></span>
            <span className="relative px-4 bg-slate-900 rounded-lg">Holographic Volumetric Videos</span>
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          Our AI-powered service transforms your 2D images into stunning 3D holographic animations, bringing your creative visions to life with unparalleled depth and realism.
        </p>
        <div className="flex justify-center">
          <button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded-full hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-[0_0_20px_theme(colors.cyan.500/50%)]">
            Start Creating Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
