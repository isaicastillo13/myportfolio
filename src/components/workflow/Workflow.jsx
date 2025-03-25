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
    <div className="flex flex-col justify-center items-center gap-10 text-pearl h-screen">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-neutral900 uppercase font-imbPlex">
          Este es nuestro
        </p>
        <h1 className="text-4xl uppercase font-bold">Workflow</h1>
      </div>

      <div className="w-full">
        <div style={{ height: "650px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>

      <Link
          className="group  flex items-center gap-2 text-pearl text-sm md:text-xl uppercase border-4 border-butterYellow py-2 px-4 rounded-full transition duration-300 md:hover:text-pearl md:hover:font-bold"
          to="/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar
          <span className="md:hidden group-hover:block transition-all duration-700 ease-in-out">
            🚀
          </span>
        </Link>
    </div>
  );
};
export default Workflow;
