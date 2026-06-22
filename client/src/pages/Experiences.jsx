import React from 'react';
import { Anchor, Leaf, Compass, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExperienceCard = ({ icon: Icon, title, description, price, rating, iconColor }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#12141a] border border-gray-800 rounded-3xl p-8 hover:bg-[#161820] transition-colors relative group">
      <div className="flex justify-between items-start mb-12">
        <div className={`p-4 rounded-full bg-[#1c1f28] ${iconColor}`}>
          <Icon size={24} />
        </div>
        <div className="flex items-center gap-1 text-gray-300 text-sm font-semibold">
          <span className="text-white">★</span> {rating}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
        {description}
      </p>

      <div className="flex justify-between items-end border-t border-gray-800 pt-6">
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-1">Starting from</p>
          <p className="text-2xl font-bold text-white">
            {price}<span className="text-sm font-normal text-gray-500">/pp</span>
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/destinations')}
          className="flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors"
        >
          Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="bg-[var(--color-brand-dark)] min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">Elite Experiences</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of unparalleled journeys. From private yacht charters in the Mediterranean to exclusive safari camps in the Serengeti, every experience is crafted to perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCard 
            icon={Anchor}
            iconColor="text-blue-400"
            title="Private Aegean Charter"
            rating="4.8"
            description="7 days exploring the Cyclades on a bespoke luxury yacht with a private chef and diving instructor."
            price="$12,400"
          />
          
          <ExperienceCard 
            icon={Leaf}
            iconColor="text-green-400"
            title="Zen Alpine Retreat"
            rating="5.0"
            description="Holistic wellness journey in the Swiss Alps. Thermal baths, meditation, and Michelin-starred organic dining."
            price="$8,900"
          />
          
          <ExperienceCard 
            icon={Compass}
            iconColor="text-purple-400"
            title="Safari Grand Tour"
            rating="4.9"
            description="Serengeti luxury tented camps. Helicopter transfers and private game drives led by expert conservationists."
            price="$15,200"
          />
          
          <ExperienceCard 
            icon={Compass}
            iconColor="text-yellow-400"
            title="Desert Oasis Escape"
            rating="4.9"
            description="Experience the magic of the Arabian desert with a luxury glamping retreat, private falconry displays, and stargazing."
            price="$5,500"
          />

          <ExperienceCard 
            icon={Leaf}
            iconColor="text-emerald-400"
            title="Rainforest Canopy Resort"
            rating="4.7"
            description="Immerse yourself in the Amazon in an eco-luxury treehouse. Guided nocturnal wildlife tours and private river cruises."
            price="$6,800"
          />

          <ExperienceCard 
            icon={Anchor}
            iconColor="text-cyan-400"
            title="Arctic Icebreaker Expedition"
            rating="5.0"
            description="Voyage to the North Pole on a luxury icebreaker. Kayaking among icebergs and exclusive polar bear viewing safaris."
            price="$22,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
