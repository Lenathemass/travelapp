import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Journal = () => {
  const navigate = useNavigate();
  
  const entries = [
    {
      id: 1,
      title: "The Art of Slow Travel in Kyoto",
      date: "October 15, 2026",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
      excerpt: "Discover the hidden bamboo groves and traditional tea houses that define the timeless serenity of Japan's ancient capital."
    },
    {
      id: 2,
      title: "Sailing the Turquoise Coast",
      date: "September 28, 2026",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
      excerpt: "A week aboard a private gulet, exploring secluded bays and ancient ruins along the breathtaking Turkish Riviera."
    },
    {
      id: 3,
      title: "Midnight Sun in Iceland",
      date: "August 12, 2026",
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2859&auto=format&fit=crop",
      excerpt: "Embracing the ethereal glow of the midnight sun while soaking in private geothermal lagoons surrounded by dramatic volcanic landscapes."
    }
  ];

  return (
    <section id="journal" className="bg-[#0b0c10] py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-wider uppercase">Travel Journal</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Inspiring stories, insider guides, and reflections from the world's most extraordinary destinations.
            </p>
          </div>
          <button 
            className="flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider hover:text-blue-400 transition-colors"
          >
            Read All Entries <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((entry) => (
            <div key={entry.id} className="group cursor-pointer flex flex-col h-full bg-[#12141a] border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-colors">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={entry.image} 
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">
                  <Calendar size={14} />
                  <span>{entry.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">{entry.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {entry.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
