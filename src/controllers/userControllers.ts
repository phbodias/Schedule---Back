import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { TUserBody } from "../types/userTypes";

export async function create(req: Request, res: Response) {
  const user: TUserBody = req.body;
  await userServices.create(user);
  return res.sendStatus(201);
}
