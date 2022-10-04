import { Router } from "express";
import * as userControllers from "../controllers/userControllers";
import { validateSchemaMiddleware } from "../middlewares/schemasMiddlewares";
import { signinSchema, signupSchema } from "../schemas/userSchemas";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(signupSchema),
  userControllers.create
);

userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(signinSchema),
  userControllers.signin
);

export default userRouter;
