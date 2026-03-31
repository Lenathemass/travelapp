import React from 'react';
import { Globe, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-gray-900">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 cursor-pointer">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white uppercase tracking-[0.2em] mb-6">Luxe</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8 pr-8">
            Redefining luxury travel through digital innovation and human curation. Experience the world on your terms.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
             <Globe className="hover:text-white transition-colors" size={20} />
             <Share2 className="hover:text-white transition-colors" size={20} />
             <Mail className="hover:text-white transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">Platform</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">About Us</a></li>
            <li><Link to="/destinations" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Destinations</Link></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Sustainability</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">Concierge</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Private Aviation</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Luxury Villas</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Yacht Charter</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Travel Insurance</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-900 pt-8">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold tracking-wider">
          &copy; {new Date().getFullYear()} Luxe Digital Concierge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
