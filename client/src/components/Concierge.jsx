import React from 'react';
import { Shield, Plane, Utensils, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Concierge = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Plane,
      title: "Private Aviation",
      description: "Seamless global travel with our fleet of ultra-long-range jets and personalized cabin service."
    },
    {
      icon: Star,
      title: "Bespoke Itineraries",
      description: "Every detail of your journey crafted by expert advisors to match your unique preferences."
    },
    {
      icon: Shield,
      title: "Close Protection",
      description: "Discreet and professional security details ensuring your peace of mind anywhere in the world."
    },
    {
      icon: Utensils,
      title: "Culinary Access",
      description: "Guaranteed reservations at the world's most exclusive Michelin-starred restaurants."
    }
  ];

  return (
    <section id="concierge" className="bg-[var(--color-brand-dark)] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-gray-800/50">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Luxe Concierge</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide leading-tight">
            EXPECT THE <br /> EXTRAORDINARY
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">
            Our private concierge service transforms ordinary trips into seamless, unforgettable experiences. From chartering private yachts to securing exclusive access, our dedicated team anticipates your every need.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Request Service <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-[#12141a]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:bg-[#161820] hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Concierge;
