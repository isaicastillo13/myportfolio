import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import OverlayPorfile from "./Overlays";

const sections = ["Home", "About", "Projects"];
const hover =
  "hover:text-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";
//estado para mostrar el overlay
  

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const overlayRef = useRef(null); 

  useEffect(() => {
    
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <nav className="flex justify-between items-center h-auto p-8 font-open-sans text-white text-pearl bg-negro font-beiruti bg-cover bg-center">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <button onClick={()=>setIsVisible(!isVisible)}>
          <img
            src="./assets/images/fotoPerfil1.png"
            alt="Profile"
            className={`${hover} h-16 w-16 object-cover rounded-full border-4 border-white border-solid hover:cursor-pointer hover:border-azulBrillante`}
          />
          </button>
          
          <div className="flex flex-row items-center justify-center gap-1">
            <p className="text-[12px]">Yo</p>
            <img
              className="w-4 h-4"
              src="./assets/svg/confirm-circle.svg"
              alt=""
            />
          </div>
        </div>
        {isVisible && (
          <div ref={overlayRef}>
            <OverlayPorfile />
          </div>
        )}
      </div>

      <ul className="flex justify-center space-x-4">
        {sections.map((section, index) => (
          <li key={index}>
            <Link
              className={`text-open-sans uppercase ${hover}`}
              to={`#/${section.toLowerCase()}`}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <button className={`text-open-sans uppercase ${hover}`}>EN</button>
      </div>
    </nav>
  );
}

export default Navbar;
