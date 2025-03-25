import Navbar from "../navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";


const hoverClasses =
  "hover:bg-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

const Hero = () => {
  return (
    <div
      className="min-h-[900] h-screen flex flex-col  items-center"
      style={{
        backgroundImage: `url(../assets/images/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      
      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 text-center text-pearl mt-44 md:mt-36">
        <h1 className="uppercase font-bold text-4xl md:text-8xl">
          Isaias E. Castillo
        </h1>
        <p className=" text-neutral900 text-sm text-center px-4 md:text-xl md:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt
          nostrum vitae atque dolorum.
        </p>
        <Link
          className="group  flex items-center gap-2 text-pearl text-sm md:text-xl uppercase border-4 border-butterYellow py-2 px-4 rounded-full transition duration-300 md:hover:text-pearl md:hover:font-bold"
          to="/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Trabajos
          <span className="md:hidden group-hover:block transition-all duration-700 ease-in-out">
            🚀
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
