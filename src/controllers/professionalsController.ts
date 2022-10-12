import { Request, Response } from "express";
import * as professionalServices from "../services/professionalServices";

export async function getAny(req: Request, res: Response) {
  const city: number = Number(req.query.city) || 1;
  const professionals = await professionalServices.getAny(city);
  return res.status(200).send(professionals);
}

export async function getByService(req: Request, res: Response) {
  const city: number = Number(req.query.city) || 1;
  const service = Number(req.params.service);
  if (!service)
    throw { code: "BadRequest", message: "Service params must be an integer" };
  const professionals = await professionalServices.getByServiceId(
    city,
    service
  );

  return res.status(200).send(professionals);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const professional = await professionalServices.getById(id);
  return res.status(200).send(professional);
}
