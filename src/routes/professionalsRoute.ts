import { Router } from "express";
import * as professionalsControllers from "../controllers/professionalsController";

const professionalsRoute = Router();

professionalsRoute.get("/professionals", professionalsControllers.getAny);

professionalsRoute.get("/professionals/:service", professionalsControllers.getByService);

professionalsRoute.get("/professional/:id", professionalsControllers.getById)


export default professionalsRoute;
