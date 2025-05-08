import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        
        {/* 社群連結 */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaFacebookF size={18} />
          </a>
        </div>

        {/* 電話可撥打 */}
        <a
          href="tel:0229392998"
          className="flex items-center space-x-2 text-sm hover:text-orange-400 transition-colors"
        >
          <FaPhoneAlt />
          <span>02-2939-2998</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
