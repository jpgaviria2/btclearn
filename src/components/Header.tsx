
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-orange-200" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="sr-only">BTCLearn - </span>
            BTC<span className="text-orange-500">Learn</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive hub for Bitcoin-only resources, education, and tools
          </p>
          <nav className="mt-4" role="navigation" aria-label="Main navigation">
            <ul className="flex justify-center space-x-6 text-sm">
              <li><a href="#resources" className="text-orange-600 hover:text-orange-700 transition-colors">Resources</a></li>
              <li><a href="#tutorials" className="text-orange-600 hover:text-orange-700 transition-colors">Tutorials</a></li>
              <li><a href="#support" className="text-orange-600 hover:text-orange-700 transition-colors">Support</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
