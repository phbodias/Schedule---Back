import { Services } from "@prisma/client";
import { Request, Response } from "express";
import * as servicesService from "../services/servicesService";

export async function getAll(req: Request, res: Response) {
  const services: Services[] = await servicesService.getAll();
  return res.status(200).send(services);
}
