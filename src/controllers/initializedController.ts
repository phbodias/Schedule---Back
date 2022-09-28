import { Request, Response } from "express";
import initializedService from "../services/initializedService";

export default async function initialController(req: Request, res: Response) {
  const data = await initializedService();
  res.status(200).send(data);
}
