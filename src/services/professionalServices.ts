import * as professionalRepository from "../repositories/professionalsRepository";
import * as citiesRepository from "../repositories/citiesRepository";
import * as servicesRepository from "../repositories/servicesRepository";
import { Cities, Services } from "@prisma/client";

export async function getAny(cityId: number) {
  const city = await citiesRepository.findById(cityId);
  return await professionalRepository.getAny(cityId);
}

export async function getByServiceId(cityId: number, serviceId: number) {
  const city = await citiesRepository.findById(cityId);
  const service: Services = await servicesRepository.getById(serviceId);
  return await professionalRepository.getByService(cityId, serviceId);
}

export async function getById(id: number) {
  const professional = await professionalRepository.getById(id);
  if (!professional)
    throw { code: "BadRequest", message: "Cannot find this user" };
  return professional;
}
