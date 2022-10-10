import prisma from "../src/databases/postgres";

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

async function main() {
  await upsertCountries();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
