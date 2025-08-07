
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">BTCLearn</h3>
            <p className="text-gray-600 mb-2">
              Built with ❤️ for the Bitcoin community
            </p>
            <p className="text-sm text-gray-500">
              All resources are Bitcoin-only and focused on education, privacy, and sovereignty
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-md font-semibold text-gray-900 mb-3">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li><a href="#resources" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Bitcoin Resources</a></li>
                <li><a href="#tutorials" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">DIY Tutorials</a></li>
                <li><a href="#support" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Community Support</a></li>
              </ul>
            </nav>
          </div>
          
          {/* External Links */}
          <div className="text-center md:text-right">
            <h4 className="text-md font-semibold text-gray-900 mb-3">Connect</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Open source project under MIT License
              </p>
              <a 
                href="https://github.com/jpgaviria2/btclearn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:text-orange-700 transition-colors block"
              >
                Contribute on GitHub
              </a>
              <a 
                href="/sitemap.xml" 
                className="text-sm text-gray-600 hover:text-orange-600 transition-colors block"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BTCLearn. All rights reserved. Bitcoin education for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
