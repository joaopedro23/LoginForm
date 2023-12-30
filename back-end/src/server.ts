import express, { Router } from "express"
import routes from "./routes/routes";
import authRoutes from "./routes/auth.routes";
import cors from 'cors'
import options from "./middleware/cors/app.cors";


import authRegistre from "./routes/registre.routes";
import { TesteClass } from "./database/registreDb/Db.registre";

const app = express();



app.use(cors(options));
app.use(express.json());
app.use(routes);

app.use(authRoutes)
app.use(authRegistre)

// Adicione esse middleware para configurar os cabeçalhos CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(3000, () => console.warn("Serve is running on port 3000"))
