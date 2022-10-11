import * as citiesRepository from "../repositories/citiesRepository";

export async function getAll() {
  return await citiesRepository.getAll();
}

export async function findByName(city: string) {
  return await citiesRepository.findByName(city);
}
