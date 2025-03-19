import Bun from 'bun';
import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Servidor de base de datos
Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);

        // CORS
        const headers = {
            'Access-Control-Allow-Origin': '*', // Permitir todos los orígenes
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        // Manejar solicitudes OPTIONS para CORS preflight
        if (req.method === 'OPTIONS') {
            return new Response(null, { headers });
        }

        // Endpoint para obtener los datos de los proyectos
        if (url.pathname === '/api/projects' && req.method === 'GET') {
            try {
                const [rows] = await connection.execute('call proyectos.GetProjects();');
                return new Response(JSON.stringify(rows), {
                    headers: { ...headers, 'Content-Type': 'application/json' },
                });
            } catch (error) {
                return new Response(JSON.stringify({ error: 'Error en la obtención de los datos' }), {
                    status: 500,
                    headers: { ...headers, 'Content-Type': 'application/json' },
                });
            }
        }

        // Respuesta por defecto
        return new Response('Backend Funcionando', { status: 200, headers });
    },
});

console.log('Servidor backend corriendo en http://localhost:3000');