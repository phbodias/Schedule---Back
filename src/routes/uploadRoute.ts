import { Request, Response, Router } from "express";
import multer from "multer";
import multerConfig from "../multerConfig/multer";

const uploadRoute = Router();

uploadRoute.post(
  "/profilePic",
  multer(multerConfig).single("profilePic"),
  (req: Request, res: Response) => {
    return res.status(200).send(req.file);
  }
);

export default uploadRoute;
