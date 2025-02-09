import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import OverlayProfile from "./Overlays";
import MobileMenu from "./Mobile-menu";

const sections = ["Home", "About", "Projects"];
const hoverClasses =
  "hover:text-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

const ProfileButton = React.memo(({ onClick, isVisible, overlayRef }) => (
  <div className="flex flex-col gap-2">
    <button onClick={onClick}>
      <img
        src="./assets/images/fotoPerfil1.png"
        alt="Profile"
        className={`${hoverClasses} h-16 w-16 object-cover rounded-full border-4 border-white border-solid hover:cursor-pointer hover:border-butterYellow`}
      />
    </button>
    <div className="flex flex-row items-center justify-center gap-1">
      <p className="text-[12px]">Yo</p>
      <img className="w-4 h-4" src="./assets/svg/confirm-circle.svg" alt="" />
    </div>
    {isVisible && (
      <div ref={overlayRef}>
        <OverlayProfile />
      </div>
    )}
  </div>
));

const NavLinks = React.memo(() => (
  <ul className="hidden md:flex justify-center items-center space-x-4">
    {sections.map((section, index) => (
      <li key={index}>
        <Link
          className="text-open-sans uppercase hover:border-b-4 hover:border-butterYellow hover:transition-all transition-discrete duration-700 ease-in-out"
          to={`#/${section.toLowerCase()}`}
        >
          {section}
        </Link>
      </li>
    ))}
  </ul>
));

function Navbar() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setOverlayVisible(false);
      }
    }

    if (isOverlayVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOverlayVisible]);

  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center h-auto p-8 font-open-sans text-white text-pearl bg-negro font-beiruti bg-cover bg-center">
        <div className="flex gap-5">
          <ProfileButton
            onClick={() => setOverlayVisible(!isOverlayVisible)}
            isVisible={isOverlayVisible}
            overlayRef={overlayRef}
          />
        </div>

        <NavLinks />

        <button className="hidden md:flex flex-row items-center justify-center gap-1">
          <img
            className="w-6 h-6 hover:cursor-pointer"
            src="./assets/svg/translate-variant.svg"
            alt="Translation Icon"
          />
        </button>

        <button
          className="md:hidden flex flex-row items-center justify-center gap-1"
          onClick={() => setMobileMenuVisible(!isMobileMenuVisible)}
        >
          <img
            className="w-6 h-6 hover:cursor-pointer"
            src={
              isMobileMenuVisible
                ? "./assets/svg/menu-to-close-alt-transition.svg"
                : "./assets/svg/close-to-menu-alt-transition.svg"
            }
            alt="Menu Icon"
          />
        </button>
      </div>

      {isMobileMenuVisible && <MobileMenu isMobileMenuVisible={isMobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />}
    </nav>
  );
}

export default Navbar;
