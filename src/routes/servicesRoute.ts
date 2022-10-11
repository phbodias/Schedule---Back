import { Router } from "express";
import * as servicesController from "../controllers/servicesController";

const servicesRoute = Router();

servicesRoute.get("/services", servicesController.getAll);

export default servicesRoute;
