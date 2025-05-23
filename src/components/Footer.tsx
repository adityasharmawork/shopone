
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold hero-gradient">ShopOne</h2>
            <p className="text-sm text-gray-500">For all your shopping needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Latest Deals</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-shopone-pink">Join Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 text-center md:text-right text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopOne
        </div>
      </div>
    </footer>
  );
};

export default Footer;
