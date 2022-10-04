import { Request, Response } from "express";
import { createToken } from "../middlewares/tokenMiddleware";
import * as userServices from "../services/userServices";
import { TSigninBody, TUserBody } from "../types/userTypes";

export async function create(req: Request, res: Response) {
  const user: TUserBody = req.body;
  await userServices.create(user);
  return res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user: TSigninBody = req.body;
  const userId: number = await userServices.checkCredentials(user);
  const token: string = await createToken(userId);
  res.status(200).send(token);
}
