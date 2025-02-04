import React from "react";
import { Link } from "react-router-dom";

const OverlayProfile = () => {
  return (
    <div className="flex flex-col gap-2 absolute left-28">
      <h2 className="font-bakbakOne text-pearl uppercase text-2xl">
        Isaias E. <br />
        Castillo
      </h2>
      <p className="font-open-sans text-pearl text-[12px] uppercase">
        html | css | js | Node.js <br />
        react | Tailwind | sql | figma
      </p>
      <Link
        className="font-bakbakOne text-pearl font-bold text-[14px] uppercase px-[12px] py-1 border-solid border-butterYellow border-4 rounded-full w-fit"
        to="assets/docs/IsaiasCastillo_Desarrollador.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        ver cv
      </Link>
    </div>
  );
};

export default OverlayProfile;
