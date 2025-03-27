import React from "react";
import { Link } from "react-router-dom";
import FlowingMenu from "../animations/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Planificación y Análisis",
    image: "./assets/images/planificacion.jpg",
  },
  {
    link: "#",
    text: "Diseño",
    image: "./assets/images/disenio.jpg",
  },
  {
    link: "#",
    text: "Desarrollo",
    image: "./assets/images/desarrollo.jpg",
  },
  {
    link: "#",
    text: "Pruebas",
    image: "./assets/images/test.jpg",
  },
  {
    link: "#",
    text: "Despliegue y Mantenimiento",
    image: "./assets/images/deploy.jpg",
  },
];

const Workflow = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 text-pearl">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="font-imbPlex text-neutral900 uppercase">
          Este es nuestro
        </p>
        <h1 className="text-4xl font-bold uppercase">Workflow</h1>
      </div>

      <div className="w-full">
        <div style={{ height: "650px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>

      <Link
        to="/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full border-4 border-butterYellow px-4 py-2 text-sm uppercase text-pearl transition duration-300 md:text-xl md:hover:font-bold md:hover:text-pearl"
      >
        Contactar
        <span className="hidden transition-all duration-700 ease-in-out group-hover:block md:hidden">
          🚀
        </span>
      </Link>
    </div>
  );
};
export default Workflow;
