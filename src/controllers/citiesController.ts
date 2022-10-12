import { Request, Response } from "express";
import * as citiesServices from "../services/cityServices";

export async function getAll(req: Request, res: Response) {
  const cities = await citiesServices.getAll();
  return res.status(200).send(cities);
}
