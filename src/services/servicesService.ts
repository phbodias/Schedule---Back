import * as servicesRepository from "../repositories/servicesRepository";

export async function getAll() {
  return await servicesRepository.getAll();
}
