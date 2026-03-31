import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop" 
          alt="Night Mountains" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0c10]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center select-none pt-12">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] text-blue-400 uppercase mb-4">
          Elite Travel Refined
        </p>
        
        <div className="relative inline-block leading-none">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black text-white tracking-tighter uppercase whitespace-nowrap">
            Santorini
          </h1>
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase whitespace-nowrap text-white/5 blur-[2px] z-[-1]">
            & Beyond
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 translate-y-1/2 z-20 w-full flex justify-center px-4">
         <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
