import React, { useState, useEffect } from "react";
import { fetchProjects } from "./api/projects"; // Importar la función

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
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-pearl text-center font-bakbakOne text-4xl my-4 uppercase">Trabajos recientes</h1>
        <p className="text-neutral900 text-center text-2xl my-4 w-2/4">Figma ipsum component variant main layer. Ellipse main layer component select follower subtract link list list.</p>
      </div>
      <div className="text-pearl md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-2 font-bakbakOne">
        {projects.length === 0 ? (
          <p>No hay proyectos disponibles.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="font-imbPlex flex flex-col p-4 my-4 gap-6">
              <img
                src={`assets/images/${project.image_name}.png`}
                alt={project.project_name}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <h2 className="uppercase font-bold">{project.project_name}</h2>

                  <div className="flex flex-row gap-1">
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
                <p className="text-justify">{project.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    
  );
}

export default App;
