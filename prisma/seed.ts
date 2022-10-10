import prisma from "../src/databases/postgres";
import { createProfessionalsFac } from "./factories/professionalsFac";

async function main() {
  await upsertCountries();
  await upsertStates();
  await upsertCities();
  await upsertServices();
  await createProfessionals();
}

async function upsertCountries() {
  await prisma.countries.upsert({
    where: { id: 1 },
    update: {},
    create: { country: "Brasil" },
  });
}

async function upsertStates() {
  await prisma.states.upsert({
    where: { id: 1 },
    update: {},
    create: { state: "São Paulo", initials: "SP", countrieId: 1 },
  });

  await prisma.states.upsert({
    where: { id: 2 },
    update: {},
    create: { state: "Rio de Janeiro", initials: "RJ", countrieId: 1 },
  });

  await prisma.states.upsert({
    where: { id: 3 },
    update: {},
    create: { state: "Distrito Federal", initials: "DF", countrieId: 1 },
  });
}

async function upsertCities() {
  await prisma.cities.upsert({
    where: { id: 1 },
    update: {},
    create: { city: "Campinas", stateId: 1 },
  });

  await prisma.cities.upsert({
    where: { id: 2 },
    update: {},
    create: { city: "São Paulo", stateId: 1 },
  });

  await prisma.cities.upsert({
    where: { id: 3 },
    update: {},
    create: { city: "Rio de Janeiro", stateId: 2 },
  });

  await prisma.cities.upsert({
    where: { id: 4 },
    update: {},
    create: { city: "Brasília", stateId: 3 },
  });
}

async function upsertServices() {
  await prisma.services.upsert({
    where: { id: 1 },
    update: {},
    create: { service: "Cabeleireiro" },
  });

  await prisma.services.upsert({
    where: { id: 2 },
    update: {},
    create: { service: "Manicure" },
  });

  await prisma.services.upsert({
    where: { id: 3 },
    update: {},
    create: { service: "Pedicure" },
  });

  await prisma.services.upsert({
    where: { id: 4 },
    update: {},
    create: { service: "Mecânico" },
  });

  await prisma.services.upsert({
    where: { id: 5 },
    update: {},
    create: { service: "Dentista" },
  });

  await prisma.services.upsert({
    where: { id: 6 },
    update: {},
    create: { service: "Pediatra" },
  });

  await prisma.services.upsert({
    where: { id: 7 },
    update: {},
    create: { service: "Advogado" },
  });
}

async function createProfessionals() {
  const professionals = await prisma.professionals.findFirst();
  if (!professionals) {
    await createProfessionalsFac(19, 1, 1);
    await createProfessionalsFac(19, 1, 2);
    await createProfessionalsFac(19, 1, 3);
    await createProfessionalsFac(19, 1, 4);
    await createProfessionalsFac(19, 1, 5);
    await createProfessionalsFac(19, 1, 6);
    await createProfessionalsFac(19, 1, 7);
    await createProfessionalsFac(19, 2, 1);
    await createProfessionalsFac(19, 2, 2);
    await createProfessionalsFac(19, 2, 3);
    await createProfessionalsFac(19, 2, 4);
    await createProfessionalsFac(19, 2, 5);
    await createProfessionalsFac(19, 2, 6);
    await createProfessionalsFac(19, 2, 7);
    await createProfessionalsFac(21, 3, 1);
    await createProfessionalsFac(21, 3, 2);
    await createProfessionalsFac(21, 3, 3);
    await createProfessionalsFac(21, 3, 4);
    await createProfessionalsFac(21, 3, 5);
    await createProfessionalsFac(21, 3, 6);
    await createProfessionalsFac(21, 3, 7);
    await createProfessionalsFac(61, 4, 1);
    await createProfessionalsFac(61, 4, 2);
    await createProfessionalsFac(61, 4, 3);
    await createProfessionalsFac(61, 4, 4);
    await createProfessionalsFac(61, 4, 5);
    await createProfessionalsFac(61, 4, 6);
    await createProfessionalsFac(61, 4, 7);
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
