import { Router } from "express";
import * as citiesController from "../controllers/citiesController";

const citiesRoute = Router();

citiesRoute.get("/cities", citiesController.getAll);

export default citiesRoute;
