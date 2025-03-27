import React, { useState, useEffect } from "react";
import { fetchProjects } from "./api/projects"; // Importar la función
import ScrollReveal from "./components/animations/ScrollReveal";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener los proyectos al cargar el componente
  useEffect(() => {
    async function getProjects() {
      try {
        const data = await fetchProjects(); // Usar la función
        if (Array.isArray(data[0])) {
          setProjects(data[0]);
        } else {
          console.log("No es un array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProjects();
  }, []);

  // Mostrar un mensaje de carga
  if (loading) {
    return <p>Cargando proyectos...</p>;
  }

  // Mostrar un mensaje de error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Mostrar los proyectos
  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-center uppercase text-pearl">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Trabajos recientes
          </ScrollReveal>
        </h1>
        <p className="my-4 text-sm text-center md:text-xl text-neutral900 w-2/4">
          Figma ipsum component variant main layer. Ellipse main layer component
          select follower subtract link list list.
        </p>
      </div>
      <div className="grid font-bakbakOne text-pearl md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-2">
        {projects.length === 0 ? (
          <p>No hay proyectos disponibles.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-6 p-4 my-4 font-imbPlex"
            >
              <img
                className="transition-all duration-500 filter grayscale hover:filter-none"
                src={`assets/images/${project.image_name}.png`}
                alt={project.project_name}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <h2 className="w-[80%] font-bold uppercase">
                    {project.project_name}
                  </h2>
                  <div className="flex flex-row gap-1 w-[20%]">
                    <a href={project.project_link}>
                      <img
                        className="w-6 h-auto"
                        src="assets/svg/icon_web.svg"
                        alt="external-link"
                      />
                    </a>
                    <a href={project.github_link}>
                      <img
                        className="w-6 h-auto"
                        src="assets/svg/icon_github.svg"
                        alt="external-link"
                      />
                    </a>
                  </div>
                </div>
                <p className="text-justify text-neutral900">
                  {project.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
