import { Moon, Search, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('user');
      if (stored) {
        // Just in case it's not valid JSON
        try {
          setUser(JSON.parse(stored));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
          Luxe
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-widest text-gray-300">
          <Link to="/destinations" className="hover:text-white transition-colors uppercase border-b border-transparent hover:border-white pb-1">Destinations</Link>
          <a href="/#experiences" className="hover:text-white transition-colors uppercase border-b border-transparent hover:border-white pb-1">Experiences</a>
          <a href="/#journal" className="hover:text-white transition-colors uppercase border-b border-transparent hover:border-white pb-1">Journal</a>
          <a href="/#concierge" className="hover:text-white transition-colors uppercase border-b border-transparent hover:border-white pb-1">Concierge</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button aria-label="Toggle Dark Mode" className="text-gray-300 hover:text-white transition-colors">
          <Moon size={18} />
        </button>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-semibold tracking-widest text-white uppercase flex items-center gap-2">
              <User size={14} /> {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-red-400 transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate('/login')}
              className="text-[11px] font-semibold tracking-widest text-gray-300 hover:text-white uppercase transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-blue-500 hover:bg-blue-400 text-white text-[11px] font-semibold tracking-widest uppercase px-6 py-2.5 rounded-full transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
