import express, { Router } from "express"
import routes from "./routes/routes";
import authRoutes from "./routes/auth.routes";
import cors from 'cors'
import options from "./middleware/cors/app.cors";


const app = express();

app.use(cors(options));
app.use(express.json());
app.use(routes);
app.use(authRoutes)

app.listen(3000, () => console.warn("Serve is running on port 3000"))