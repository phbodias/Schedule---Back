import { Router } from "express";
import * as userControllers from "../controllers/userControllers";
import { validateSchemaMiddleware } from "../middlewares/schemasMiddlewares";
import { signupSchema } from "../schemas/userSchemas";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(signupSchema),
  userControllers.create
);

export default userRouter;
