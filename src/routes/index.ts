import { Router } from "express";
import citiesRoute from "./citiesRoute";
import professionalsRoute from "./professionalsRoute";
import servicesRoute from "./servicesRoute";
import userRouter from "./userRoute";

const router = Router();

router.use(userRouter);
router.use(citiesRoute);
router.use(servicesRoute);
router.use(professionalsRoute);

export default router;
