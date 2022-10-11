import { Services } from "@prisma/client";
import prisma from "../databases/postgres";

export async function getAll() {
  return await prisma.services.findMany({});
}

export async function getById(id: number) {
  const service: Services = await prisma.services.findFirst({ where: { id } });
  if (!service) throw { code: "NotFound", message: "Service not found" };
  return service;
}

export async function getByName(service: string) {
  const serviceDB: Services = await prisma.services.findFirst({ where: { service } });
  if (!serviceDB) throw { code: "NotFound", message: "Service not found" };
  return serviceDB;
}
