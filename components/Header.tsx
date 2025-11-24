import React from 'react';
import { Instagram, Facebook, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm transition-all duration-300 border-b border-stone-100">
      <div className="max-w-[1920px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Left: Navigation Trigger (Visual only for demo) */}
        <div className="flex items-center gap-4">
           <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Menu className="w-5 h-5 text-stone-900" />
           </button>
           <span className="text-xs tracking-[0.2em] font-medium text-stone-500 hidden sm:block uppercase">Catalog</span>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-stone-900 font-display font-medium tracking-tight cursor-pointer whitespace-nowrap">
            House of many.
          </h1>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="#" className="p-2 text-stone-900 hover:text-stone-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-stone-900 hover:text-stone-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;