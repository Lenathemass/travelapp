import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import places from "../data/places";
import SearchBar from "../components/SearchBar";

const Destinations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  let searchResults = places.filter(place => 
    place.name.toLowerCase().includes(query.toLowerCase()) || 
    place.description.toLowerCase().includes(query.toLowerCase())
  );

  const [distance, setDistance] = useState(null);
  const [calculatingDistance, setCalculatingDistance] = useState(false);
  const [distanceError, setDistanceError] = useState('');

  useEffect(() => {
    if (!query) {
      setDistance(null);
      setDistanceError('');
      return;
    }

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Earth radius in km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      return Math.round(R * c);
    };

    setCalculatingDistance(true);
    setDistanceError('');
    setDistance(null);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`);
            const data = await response.json();

            if (data && data.length > 0) {
              const destLat = parseFloat(data[0].lat);
              const destLon = parseFloat(data[0].lon);
              const dist = calculateDistance(userLat, userLon, destLat, destLon);
              setDistance(dist);
            } else {
              setDistanceError('Could not locate destination on map.');
            }
          } catch (error) {
            setDistanceError('Failed to fetch destination coordinates.');
          } finally {
            setCalculatingDistance(false);
          }
        },
        (error) => {
          setDistanceError('Please allow location access to calculate distance.');
          setCalculatingDistance(false);
        }
      );
    } else {
      setDistanceError('Geolocation is not supported by your browser.');
      setCalculatingDistance(false);
    }
  }, [query]);

  if (query && searchResults.length === 0) {
    searchResults = [
      {
        id: `dynamic-${query}`,
        name: query,
        region: `Greater ${query}`,
        image: `https://picsum.photos/seed/${encodeURIComponent(query)}/800/600`,
        description: `Explore the magnificent beauty of ${query}. A perfect luxury getaway filled with stunning landscapes, rich culture, and unforgettable experiences.`
      }
    ];
  }

  let nearbySpecials = [];
  
  if (searchResults.length > 0) {
    const firstResult = searchResults[0];
    
    if (String(firstResult.id).startsWith('dynamic-')) {
      nearbySpecials = [
        {
          id: `nearby-1-${query}`,
          name: `North ${query}`,
          region: `Greater ${query}`,
          image: `https://picsum.photos/seed/north${encodeURIComponent(query)}/800/600`,
          description: `Discover the breathtaking sights and serene landscapes in the northern region of ${query}.`
        },
        {
          id: `nearby-2-${query}`,
          name: `South ${query}`,
          region: `Greater ${query}`,
          image: `https://picsum.photos/seed/south${encodeURIComponent(query)}/800/600`,
          description: `Experience vibrant culture and unparalleled luxury in the beautiful southern parts of ${query}.`
        },
        {
          id: `nearby-3-${query}`,
          name: `Central ${query}`,
          region: `Greater ${query}`,
          image: `https://picsum.photos/seed/central${encodeURIComponent(query)}/800/600`,
          description: `Immerse yourself in the bustling heart and historic beauty of central ${query}.`
        }
      ];
    } else {
      const searchRegions = searchResults.map(p => p.region);
      nearbySpecials = places.filter(place => 
        searchRegions.includes(place.region) && !searchResults.some(res => res.id === place.id)
      );
    }
  }

  if (nearbySpecials.length === 0) {
    nearbySpecials = places.filter(place => !searchResults.some(res => res.id === place.id));
  }

  nearbySpecials = nearbySpecials.slice(0, 3);

  const renderPlaceCard = (place) => (
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
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-12 flex justify-center">
        <SearchBar />
      </div>
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
          {query ? `Search Results for "${query}"` : "All Destinations"}
        </h2>
        
        {query && (
          <div className="mb-6 flex items-center gap-3 text-blue-400 bg-blue-500/10 w-fit px-5 py-2.5 rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <MapPin size={18} className={calculatingDistance ? "animate-pulse" : ""} />
            <span className="text-sm font-semibold tracking-wide">
              {calculatingDistance ? (
                "Calculating distance from your location..."
              ) : distance !== null ? (
                `${distance} km from your current location`
              ) : (
                distanceError || "Distance unknown"
              )}
            </span>
          </div>
        )}

        <p className="text-gray-400 max-w-2xl leading-relaxed">
          {query ? "Explore destinations matching your search." : "Embark on a journey to the most exquisite locations around the globe. Each destination is hand-picked to offer an unparalleled standard of luxury and authenticity."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {searchResults.length > 0 ? (
          searchResults.map(renderPlaceCard)
        ) : (
          <p className="text-gray-400 text-lg col-span-full">No destinations found matching your criteria.</p>
        )}
      </div>

      <div className="mb-12 border-t border-gray-800 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">Nearby Specials</h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed mb-12">
          Discover exclusive offers and stunning locations near you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbySpecials.map(renderPlaceCard)}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
