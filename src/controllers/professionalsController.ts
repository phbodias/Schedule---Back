import { Request, Response } from "express";
import * as professionalServices from "../services/professionalServices";

export async function getAny(req: Request, res: Response) {
  const city = (req.query.city || 1) as number;
  const professionals = await professionalServices.getAny(city);
  return res.status(200).send(professionals);
}

export async function getByService(req: Request, res: Response) {
  const city = (req.query.city || 1) as number;
  const service = parseInt(req.params.service);
  const professionals = await professionalServices.getByServiceId(city, service);

  return res.status(200).send(professionals);
}
