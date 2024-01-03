import express, { Router } from "express"
import routes from "./routes/routes";
import authRoutes from "./routes/auth.routes";
import cors from 'cors'
import handler from '../src/middleware/cors/app.cors'
import authRegistre from "./routes/registre.routes";
import get from "./routes/get.routes";
import options from "../src/middleware/cors/app.cors";

import { Client } from "pg";


const app = express();
app.use(cors(options));
app.use(express.json());
app.use(routes);
app.use(authRoutes)
app.use(authRegistre)
app.use(get)


// Adicione esse middleware para configurar os cabeçalhos CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// teste banco de dados //
const DATABASE_URL='postgres://dbneon_user:d88GpXV2Wglb4SxXxKDrcvVQ98dgLhhd@dpg-cm8c90ocmk4c7391dgsg-a.ohio-postgres.render.com/dbneon'
const tableName = 'registro';
const currentColumnName = 'name'; // Nome do campo que você deseja renomear
const newColumnName = 'username';
async function testDatabaseConnection() {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: true
  });

  try {
    await client.connect(); // Conecta ao banco de dados
    const primaryKeyResult = await client.query(`
      SELECT kcu.column_name, tc.constraint_type
      FROM information_schema.table_constraints tc
      JOIN information_schema.key_column_usage kcu 
        ON tc.constraint_name = kcu.constraint_name 
       AND tc.table_schema = kcu.table_schema
       AND tc.table_name = kcu.table_name
      WHERE tc.table_name = $1
        AND tc.constraint_type = 'PRIMARY KEY'
    `, [tableName]);

    if (primaryKeyResult.rows.length > 0) {
      console.log(`Conexão bem-sucedida! Chave primária da tabela '${tableName}':`);
      primaryKeyResult.rows.forEach(row => {
        console.log(`Nome do campo: ${row.column_name}`);
      });
    } else {
      console.log(`Conexão bem-sucedida! Não foram encontradas chaves primárias na tabela '${tableName}'.`);
    }
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } finally {
    await client.end(); // Fecha a conexão com o banco de dados
  }
}
testDatabaseConnection();
// teste //

app.listen(3000, () => console.warn("Serve is running on port 3000"))
