import { Router } from "express";
import initialController from "../controllers/initializedController";

const router = Router();

router.get("/initialized", initialController);router;

export default router;
