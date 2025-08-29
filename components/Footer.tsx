
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white">Vadanite Digital Studio</h3>
            <p className="text-sm text-gray-400">The Future of Creativity · Today</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vadanite Digital Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
