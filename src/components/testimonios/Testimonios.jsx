import { fetchTestimonies } from "../../api/testimonies"; // Importar la función
import { useState, useEffect } from "react";

function Testimonios() {
  const [testimonios, setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTestimonios() {
      try {
        const data = await fetchTestimonies(); // Usar la función
        console.log("Respuesta completa:", data);
        console.log("data[0]:", data[0]);
        console.log("Es array:", Array.isArray(data[0]));
        if (Array.isArray(data[0])) {
          setTestimonios(data[0]);
        } else {
          console.log("No es un array");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getTestimonios();
  }, []);

  if (loading) {
    return <p>Cargando testimonios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid my-8 h-screen md:mb-12 md:grid-cols-2">
      {testimonios.length === 0 ? (
        <p>No hay testimonios disponibles.</p>
      ) : (
        testimonios.map((testimonio) => (
          <figure key={testimonio.id_client} className="flex flex-col items-center justify-center p-8 text-center">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonio.client_name || "Título del testimonio"}
              </h3>
              <p className="my-4">
                {testimonio.testimony || "Contenido del testimonio"}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src={testimonio.avatar_url || "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>{testimonio.client_name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonio.profession || "Cliente"}
                </div>
              </div>
            </figcaption>
          </figure>
        ))
      )}
    </div>
  );
  
}

export default Testimonios;
