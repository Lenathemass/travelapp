import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("An error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Register Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/80 to-[var(--color-brand-dark)]/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#12141a]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Join Luxe</h2>
            <p className="text-gray-400 text-sm">Create an account to begin your journey.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User size={18} className="text-gray-500" />
              </div>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1c1f28] border border-gray-700 text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-500" />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1c1f28] border border-gray-700 text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1c1f28] border border-gray-700 text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold tracking-widest uppercase py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-8"
            >
              Sign Up <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Already a member?{' '}
              <Link to="/login" className="text-white hover:text-blue-400 transition-colors font-semibold border-b border-transparent hover:border-blue-400 pb-0.5">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;