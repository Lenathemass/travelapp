import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="bg-[var(--color-brand-card)] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Quote className="text-blue-500 mb-8" size={48} fill="currentColor" />
        
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-light text-white italic leading-relaxed mb-12">
          "LUXE turned our honeymoon into a dream. Every detail was curated with such precision that we felt like royalty. Their concierge service is truly world-class."
        </h3>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 mb-4 p-1">
             <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop" alt="Elara Rodriguez" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="font-bold text-white uppercase tracking-widest text-sm">Elara Rodriguez</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">CEO, Visionary Media</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
