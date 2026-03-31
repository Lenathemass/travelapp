import React from "react";
import { useNavigate } from "react-router-dom";
import places from "../data/places";

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">All Destinations</h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Embark on a journey to the most exquisite locations around the globe. Each destination is hand-picked to offer an unparalleled standard of luxury and authenticity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div key={place.id} className="group relative rounded-3xl overflow-hidden bg-[#12141a] border border-gray-800 hover:border-gray-600 transition-colors flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-wide uppercase">{place.name}</h3>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {place.description}
              </p>

              <button
                onClick={() => navigate(`/details/${place.id}`)}
                className="w-full py-3 px-4 bg-transparent border border-gray-700 rounded-full text-sm font-semibold text-white tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
