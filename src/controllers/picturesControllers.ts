import { Request, Response } from "express";
import * as picturesServices from "../services/picturesServices";
import { TProfilePic } from "../types/uploadTypes";

export async function insertProfilePic(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { location: url, key: s3key } = req.file as any;
  const data: TProfilePic = { url, userId, s3key };
  await picturesServices.insert(data);
  res.sendStatus(200);
}

export async function getProfilePic(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const profilePic = await picturesServices.findProfPicByUserId(userId);
  const url = profilePic ? profilePic.url : "";

  res.status(200).send({ url });
}
