
import React from 'react';

const VoxelCubeIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
    <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 7L12 12M12 12L20 7M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 4.5L8 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <VoxelCubeIcon />
          <span className="text-xl font-bold tracking-wider text-white">
            VADANITE <span className="text-cyan-400">VaaS</span>
          </span>
        </div>
        <button className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded-full hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
