import Navbar from "../navbar/Navbar";
import React from 'react';
import { Link } from "react-router-dom";


const hoverClasses =
    "hover:bg-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

const Hero = () => {
    return (
        <div className='h-screen flex flex-col  items-center font-bakbakOne' style={{ backgroundImage: `url(../assets/images/hero-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-6 text-center text-pearl z-10 mt-36">
                <h1 className="uppercase font-bold text-8xl">Isaias E. Castillo</h1>
                <p className="font-open-sans text-neutral900 text-2xl max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt nostrum vitae atque dolorum.</p>
                <Link
                    className="group relative flex items-center gap-2 text-neutral900 text-xl uppercase border-4 border-butterYellow py-2 px-4 rounded-full transition duration-300 hover:text-pearl"
                    to="/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver Trabajos
                    <span className="hidden group-hover:block transition-all transition-discrete duration-700 ease-in-out">
                        🚀
                    </span>
                </Link>

            </div>

        </div>
    );
};
export default Hero;