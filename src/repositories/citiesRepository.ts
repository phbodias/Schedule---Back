import prisma from "../databases/postgres";

export async function getAll() {
  return await prisma.cities.findMany({
    select: {
      id: true,
      city: true,
      States: {
        select: {
          initials: true,
        },
      },
    },
  });
}

export async function findByName(city: string) {
  const cityDB = await prisma.cities.findFirst({ where: { city } });
  if (!cityDB) throw { code: "NotFound", message: "City not found" };
  return cityDB.id;
}

export async function findById(id: number) {
  const cityDB = await prisma.cities.findFirst({ where: { id } });
  if (!cityDB) throw { code: "NotFound", message: "City not found" };
  return cityDB;
}
