import { Router } from "express";
import uploadRoute from "./picturesRoute";
import userRouter from "./userRoute";

const router = Router();

router.use(userRouter);
router.use(uploadRoute);

export default router;
