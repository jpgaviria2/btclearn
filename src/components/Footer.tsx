
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Built with ❤️ for the Bitcoin community
          </p>
          <p className="text-sm text-gray-500 mb-2">
            All resources are Bitcoin-only and focused on education, privacy, and sovereignty
          </p>
          <p className="text-sm text-gray-500">
            Open source project under MIT License - 
            <a 
              href="https://github.com/jpgaviria2/btclearn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 ml-1"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
