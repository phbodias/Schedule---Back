import { Router } from "express";
import multer from "multer";
import { validateJWT } from "../middlewares/tokenMiddleware";
import multerConfig from "../multerConfig/multer";
import * as picturesControllers from "../controllers/picturesControllers";

const uploadRoute = Router();

uploadRoute.use(validateJWT);

uploadRoute.post(
  "/profilePic",
  multer(multerConfig).single("profilePic"),
  picturesControllers.insertProfilePic
);

uploadRoute.get("/profilePic", picturesControllers.getProfilePic);

export default uploadRoute;
