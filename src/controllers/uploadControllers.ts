import { Request, Response } from "express";
import * as uploadServices from "../services/uploadServices";
import { TProfilePic } from "../types/uploadTypes";

export async function insertProfilePic(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { location: url, key: s3key } = req.file as any;
  const data: TProfilePic = { url, userId, s3key };
  await uploadServices.insert(data);
  res.sendStatus(200);
}
