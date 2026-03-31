import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import places from "../data/places";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Destination Not Found</h2>
        <p className="text-gray-400 mb-8">The location you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => navigate('/destinations')}
          className="border border-gray-700 hover:border-white text-white px-8 py-3 rounded-full transition-colors flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Destinations
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full bg-[#12141a]">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/40 to-transparent"></div>
        
        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-10">
          <Link 
            to="/destinations"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to destinations
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-24 w-full">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            <MapPin size={16} /> Featured Location
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide uppercase">
            {place.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 mt-16 md:mt-24 flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-wider">The Experience</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            {place.description}
          </p>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Immerse yourself in the breathtaking beauty of {place.name}. Every aspect of this curated destination has been selected to provide the ultimate luxury experience, from awe-inspiring landscapes to exclusive local encounters.
          </p>
        </div>

        <div className="w-full md:w-[350px]">
          <div className="bg-[#12141a] border border-gray-800 rounded-3xl p-8 sticky top-32">
            <p className="text-xs text-gray-400 uppercase font-semibold tracking-widest mb-2">Exclusive Access</p>
            <h3 className="text-2xl font-bold text-white mb-6">Plan your journey</h3>
            
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Connect with our concierge team to customize your itinerary and unlock exclusive benefits at this mesmerizing destination.
            </p>

            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold tracking-widest uppercase py-4 rounded-full transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4">
              Contact Concierge
            </button>
            <button className="w-full bg-transparent border border-gray-700 hover:border-white text-white text-sm font-semibold tracking-widest uppercase py-4 rounded-full transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;