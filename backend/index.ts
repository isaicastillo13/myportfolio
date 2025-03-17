import { tr } from 'framer-motion/client';
import mysql  from 'mysql2/promise';
async function callStoredProcedure() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Frwpr724_906*',
            database: 'proyectos'
        });

        console.log('Database connected');

        const [rows] = await connection.execute('call proyectos.GetProjects();');
        console.log(rows);
        await connection.end();
    } catch (error) {
        console.log(error);
    }
}

callStoredProcedure();
