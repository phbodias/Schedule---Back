import { Router } from "express";
import * as userControllers from "../controllers/userControllers";

const userRouter = Router();

userRouter.post("/sign-up", userControllers.create);

export default userRouter;
