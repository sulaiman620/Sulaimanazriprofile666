import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 mt-auto bg-[#000d1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-2xl font-bold text-white">سليمان العزري</div>
        
        <div className="text-gray-400 text-sm">
          جميع الحقوق محفوظة © {new Date().getFullYear()} سليمان العزري
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 bg-white/5 text-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#001a33] transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 text-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#001a33] transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 text-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#001a33] transition-all">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
