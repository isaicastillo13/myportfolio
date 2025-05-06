import Navbar from "../navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const hoverClasses =
  "hover:bg-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center min-h-[900] h-screen"
      style={{
        backgroundImage: `url(../assets/images/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      
      <div className="flex flex-col items-center justify-center gap-4 text-center text-pearl mt-32 mpx-8 md:mt-20 md:gap-6">
        <h1 className="text-4xl font-bold uppercase md:text-8xl">
          Isaias E. Castillo
        </h1>
        <p className="px-4 text-sm text-center text-neutral900 md:text-xl md:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt
          nostrum vitae atque dolorum.
        </p>
        <Link
          className="flex items-center gap-2 px-4 py-2 text-sm uppercase transition duration-300 border-4 rounded-full text-pearl border-butterYellow md:text-xl md:hover:text-pearl md:hover:font-bold group"
          to="/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Trabajos
          <span className="hidden transition-all duration-700 ease-in-out group-hover:block md:hidden">
            🚀
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
