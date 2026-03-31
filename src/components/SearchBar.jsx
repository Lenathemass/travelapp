import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="glass-panel w-[90%] md:w-fit mx-auto rounded-full px-4 py-3 xl:py-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-2xl z-50">
      
      {/* Destination Section */}
      <div className="flex items-center gap-4 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-700/50 hover:bg-white/5 rounded-3xl transition-colors cursor-pointer min-w-[200px]">
        <div className="bg-white/10 p-2.5 rounded-full text-blue-400">
          <MapPin size={20} />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-left">Destination</p>
          <p className="text-sm font-medium text-white text-left">Where to?</p>
        </div>
      </div>

      {/* Dates Section */}
      <div className="flex items-center gap-4 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-700/50 hover:bg-white/5 rounded-3xl transition-colors cursor-pointer min-w-[180px]">
        <div className="bg-white/10 p-2.5 rounded-full text-purple-400">
          <Calendar size={20} />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-left">Dates</p>
          <p className="text-sm font-medium text-white text-left">Add dates</p>
        </div>
      </div>

      {/* Guests Section */}
      <div className="flex items-center gap-4 px-4 py-2 hover:bg-white/5 rounded-3xl transition-colors cursor-pointer min-w-[180px]">
        <div className="bg-white/10 p-2.5 rounded-full text-green-400">
          <Users size={20} />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-left">Guests</p>
          <p className="text-sm font-medium text-white text-left">Add guests</p>
        </div>
      </div>

      {/* Search Button */}
      <button 
        onClick={() => navigate('/destinations')}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-3 transition-colors md:ml-4 group w-full md:w-auto justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
      >
        <Search size={18} className="group-hover:scale-110 transition-transform" />
        Search
      </button>

    </div>
  );
};

export default SearchBar;
