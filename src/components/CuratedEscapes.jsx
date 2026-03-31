import React from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CuratedEscapes = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[var(--color-brand-dark)] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Curated escapes</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hand-picked destinations for the discerning traveler, where luxury meets authenticity.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div 
            onClick={() => navigate('/destinations')}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1533580579895-3bc636c7a6e1?q=80&w=2938&auto=format&fit=crop" 
              alt="Amalfi Coast" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('/login'); }}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
            >
              <Heart size={20} />
            </button>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <h3 className="text-2xl font-bold text-white mb-3 tracking-wide uppercase">Amalfi Coast</h3>
               <p className="text-gray-300 text-sm w-3/4">Cliffside villages, emerald waters, and the scent of lemons in the air.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => navigate('/destinations')}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2859&auto=format&fit=crop" 
              alt="Reykjavik Highlands" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('/login'); }}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
            >
              <Heart size={20} />
            </button>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <p className="text-green-400 text-[10px] font-bold tracking-widest uppercase mb-2">✦ Sustainability Leader</p>
               <h3 className="text-2xl font-bold text-white mb-3 tracking-wide uppercase">Reykjavik Highlands</h3>
               <p className="text-gray-300 text-sm w-3/4">Experience the raw, untamed beauty of volcanic landscapes and the dancing Northern Lights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedEscapes;
