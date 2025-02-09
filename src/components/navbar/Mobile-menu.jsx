import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const hover =
  "hover:text-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

function MobileMenu({ isMobileMenuVisible, setMobileMenuVisible }) {
  const sections = useMemo(() => ["Home", "About", "Projects"], []);

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: isMobileMenuVisible ? "0%" : "-100%", opacity: isMobileMenuVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="md:hidden flex flex-col justify-end items-center gap-8 fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto scrollbar-none bg-negro"
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
     <h5 className="text-xl font-bold uppercase text-neutral900 pt-5">Menu</h5>

      {/* colocar iconos a los tap del menu */}
      <ul className="flex flex-col items-start w-full h-screen space-y-4 px-8">
        {sections.map((section, index) => (
          <li className="flex gap-2" key={index}>
            <img className="w-5" src={`./assets/svg/${section}.svg`} alt="" />
            <Link
              className={`text-open-sans text-pearl uppercase ${hover}`}
              to={`#/${section.toLowerCase()}`}
            >
              {section}
            </Link>
          </li>
        ))}

        <li>
          <img
            className="w-6 h-6 hover:cursor-pointer"
            src="./assets/svg/translate-variant.svg"
            alt="Translation icon"
          />
        </li>
      </ul>
    </motion.div>
  );
}

MobileMenu.propTypes = {
  isMobileMenuVisible: PropTypes.bool.isRequired,
  setMobileMenuVisible: PropTypes.func.isRequired,
};

export default MobileMenu;
