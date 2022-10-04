import { Router } from "express";
import multer from "multer";
import { validateJWT } from "../middlewares/tokenMiddleware";
import multerConfig from "../multerConfig/multer";
import * as uploadController from "../controllers/uploadControllers";

const uploadRoute = Router();

uploadRoute.use(validateJWT);

uploadRoute.post(
  "/profilePic",
  multer(multerConfig).single("profilePic"),
  uploadController.insertProfilePic
);

export default uploadRoute;
