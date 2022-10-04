import { Router } from "express";
import uploadRoute from "./uploadRoute";
import userRouter from "./userRoute";

const router = Router();

router.use(userRouter);
router.use(uploadRoute);

export default router;
