
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Destinations from "./pages/Destinations";
import Details from "./pages/Details";
import Experiences from "./pages/Experiences";
import Journal from "./pages/Journal";
import Concierge from "./pages/Concierge";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-dark)] text-white overflow-x-hidden font-sans flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/concierge" element={<Concierge />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;