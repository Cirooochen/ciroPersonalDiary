import { Link } from "react-router";
import Clock from "./Clock";
import WeekDay from "./WeekDay";
const Hero = ({ localEntry }) => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-8 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Main Content */}
      <div className="relative z-10 max-w-xl text-center mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Mind note</h1>
        <p className="text-lg mb-8">Keep your life recorded.</p>
        <Link to="/form">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
            New entry
          </button>
        </Link>
      </div>
      <div className="w-full p-4 m-4  flex flex-col justify-end items-end">
        <WeekDay />
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm">
        <p>Scroll ↓</p>
      </div>
    </section>
  );
};

export default Hero;
