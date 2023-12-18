import { Router } from "express";
import Usercontroller from "../controllers/users.controller";

const routes = Router();
const usersController = new Usercontroller();

routes.get("/users",usersController.get)

export default routes