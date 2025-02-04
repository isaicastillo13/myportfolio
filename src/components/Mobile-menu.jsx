import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const hover =
  "hover:text-butterYellow hover:font-semibold transition-all transition-discrete duration-700 ease-in-out";

function MobileMenu() {
  const sections = useMemo(() => ["Home", "About", "Projects"], []);

  return (
    <div className="md:hidden flex justify-end">
      <ul className="flex flex-col items-end w-2/4 h-screen space-y-4 px-8">
        {sections.map((section, index) => (
          <li key={index}>
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
    </div>
  );
}

MobileMenu.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string),
};

export default MobileMenu;
