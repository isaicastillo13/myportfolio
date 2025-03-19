
export async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects');
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}