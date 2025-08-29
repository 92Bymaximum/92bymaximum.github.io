
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative flex-1">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-cyan-400/50 rounded-full bg-slate-800 text-cyan-400 text-2xl font-bold shadow-[0_0_15px_theme(colors.cyan.500/30%)]">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">How It Works</h2>
          <p className="text-gray-400 mt-4">A simple, streamlined process to bring your images to life.</p>
        </div>
        <div className="relative">
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
            <Step number="1" title="Upload" description="Select any 2D image from your device." />
            <Step number="2" title="AI Reconstruction" description="Our AI analyzes your image to create a 3D model." />
            <Step number="3" title="Add Effects" description="Customize with holographic shaders and FX." />
            <Step number="4" title="Download" description="Export your creation in multiple high-quality formats." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
