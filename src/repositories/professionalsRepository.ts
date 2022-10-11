import { Professionals } from "@prisma/client";
import prisma from "../databases/postgres";

export async function getAny(cityId: number) {
  return await prisma.professionals.findMany({
    take: 70,
    orderBy: { id: "desc" },
    where: { cityId },
    select: {
      id: true,
      name: true,
      phone: true,
      address: true,
      profilePic: true,
      City: {
        select: {
          city: true,
        },
      },
      Services: {
        select: {
          service: true,
        },
      },
    },
  });
}

export async function getByService(cityId: number, serviceId: number) {
  return await prisma.professionals.findMany({
    orderBy: { id: "desc" },
    where: { cityId, serviceId },
    select: {
      id: true,
      name: true,
      phone: true,
      address: true,
      profilePic: true,
      City: {
        select: {
          city: true,
        },
      },
      Services: {
        select: {
          service: true,
        },
      },
    },
  });
}
